function change(){
    document.getElementById("demo").innerHTML = "Hey! You just changed me...";
    document.getElementById("first").innerHTML="I am javascript!";
    let Disappear="Buttons Disappeared";
    document.getElementById("btn").innerHTML= Disappear;
    
    
}
const array=["Iamabeginner"];
document.getElementById("first").innerHTML=array.length;


function uppercase(str)
{
  var array= str.split(' ');//(madhumita, amrit, ray)
  var newarray = [];
    
  for(var x = 0; x < array.length; x++){
      newarray.push(array[x].charAt(1).toUpperCase() + array[x].slice(1,2));
  }
  return newarray.join(' ');
}
console.log(uppercase("madhumita amrit ray "));