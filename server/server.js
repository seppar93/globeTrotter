const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const PORT = 8080
// Route requires
const user = require('./routes/user')
 // MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
 // Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)
 // Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
 // Routes
app.use('/user', user)
 // Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})


////////////Socket.io server//////////////////

const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 8989;

app.use("/assets", express.static(__dirname + "/dist"));

let users = {};

getUsers = () => {
  return Object.keys(users).map(function(key) {
    return users[key].username;
  });
};

createSocket = user => {
  let cur_user = users[user.uid],
    updated_user = {
      [user.uid]: Object.assign(cur_user, {
        sockets: [...cur_user.sockets, user.socket_id]
      })
    };
  users = Object.assign(users, updated_user);
};

createUser = user => {
  users = Object.assign(
    {
      [user.uid]: {
        username: user.username,
        uid: user.uid,
        sockets: [user.socket_id]
      }
    },
    users
  );
};

removeSocket = socket_id => {
  let uid = "";
  Object.keys(users).map(function(key) {
    let sockets = users[key].sockets;
    if (sockets.indexOf(socket_id) !== -1) {
      uid = key;
    }
  });
  let user = users[uid];
  if (user.sockets.length > 1) {
    // Remove socket only
    let index = user.sockets.indexOf(socket_id);
    let updated_user = {
      [uid]: Object.assign(user, {
        sockets: user.sockets
          .slice(0, index)
          .concat(user.sockets.slice(index + 1))
      })
    };
    users = Object.assign(users, updated_user);
  } else {
    // Remove user by key
    let clone_users = Object.assign({}, users);
    delete clone_users[uid];
    users = clone_users;
  }
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log("Running server on 127.0.0.1:" + port);
});

io.on("connection", socket => {
  let query = socket.request._query,
    user = {
      username: query.username,
      uid: query.uid,
      socket_id: socket.id
    };

  if (users[user.uid] !== undefined) {
    createSocket(user);
    socket.emit("updateUsersList", getUsers());
  } else {
    createUser(user);
    io.emit("updateUsersList", getUsers());
  }

  socket.on("message", data => {
    console.log(data);
    socket.broadcast.emit("message", {
      username: data.username,
      message: data.message,
      uid: data.uid
    });
  });

  socket.on("disconnect", () => {
    removeSocket(socket.id);
    io.emit("updateUsersList", getUsers());
  });
});
