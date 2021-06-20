function numeros(num1,num2, callback)
{ 
  return callback(num1,num2)
}

numeros(10,4, function(x,y){
  if (x > y) {
    console.log("O primeiro número é maior")
  }
  if (x < y) {
    console.log("O primeiro número é menor")
  }
  else{
    console.log("Os números são iguais")
  }
})
