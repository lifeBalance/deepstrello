var express = require('express');
var router = express.Router();

var boardsRouter = function (Trello) {
  var bookController = require('../controllers/boardsController')();

  router.route('/')
    .get(boardsController.index);

  return router;
};

module.exports = boardsRouter;
