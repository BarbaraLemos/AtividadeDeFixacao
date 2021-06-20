function um(x, callback) {
	return function dois(y) {
		callback(x, y)
	};
}
var v1 = um(90, function(x, y) {
  if(x%y == 0){
    console.log('true')
  }
  else
  {
    console.log('false')
  }
})
v1(3)
