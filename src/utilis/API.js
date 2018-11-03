import axios from "axios";

export default {
  // Post User Info to Mongo
  saveUser: function(userData) {
    return axios.post("/api/accounts", userData);
  }
}