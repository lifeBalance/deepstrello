var ds = deepstream('localhost:3000', {
  path: '/deepstream'
}).login();

var record = ds.record.getRecord('someUser');
var input = document.querySelector('input');

input.onkeyup = function(){
  record.set('firstname', input.value);
};

record.subscribe('firstname', function(value){
  input.value = value;
});
