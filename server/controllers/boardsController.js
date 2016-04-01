var boardsController = function () {
  var index = function (req, res) {
    res.render('boards', {
      title: 'Boards'
    });
  };
};

module.exports = boardsController;
