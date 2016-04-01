function AuthenticateTrello() {
  Trello.authorize({
    type: "popup",
    name: "Deepstrello",
    scope: {
      write: false,
      read: true
    },
    expiration: "never",
    success: successAuthorizing,
    error: errorAuthorizing
  });
}

var successAuthorizing = function () {
  console.log('Success authorizing Trello!!');
}

var errorAuthorizing = function () {
  console.log('There was some error authorizing Trello');
}

$(document).ready(function(){
    $("#authTrello").click(function(){
        AuthenticateTrello();
    });
});
