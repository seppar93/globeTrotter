const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

/////////////////////////////////////////////Socket.io server////////////////////////////////////////////////////////////////////////
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 8989;

app.use("/assets", express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log("Running server on 127.0.0.1:" + port);
});

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
  socket.on("disconnect", () => {
    removeSocket(socket.id);
    io.emit("updateUsersList", getUsers());
  });
});
