const axios = require("axios");
const db = require("../models");
require("dotenv").config();

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    var queryURL =
      "https://www.googleapis.com/books/v1/volumes?" + params + "key=" + APIKey;
    console.log("queryURL: " + queryURL);
    axios.get(queryURL).then(results => {
      results.data.items.filter(result => console.log(result));
    });
  }
};
