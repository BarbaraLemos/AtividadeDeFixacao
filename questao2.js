function operacoes(val1,val2,callback)
{
  console.log(callback(val1,val2))
}
operacoes(5,5,function(var1,var2)
{
  return var1 + var2;
})
operacoes(5,5, function(var1,var2){
  return var1 - var2
})
operacoes(5,5, function(var1,var2){
  return var1 / var2
})
operacoes(5,5, function(var1,var2){
  return var1 * var2
})
