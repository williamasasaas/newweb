document.getElementById("demo").innerHTML = 5 + 6;
console.log("The answer should be 11.")

var a = 0;
function myFunction() {
  if (a==0) {
    document.getElementById("demo").style.fontSize = '35px';
    a = 1;
  }
  else {
    document.getElementById("demo").style.fontSize = '15px';
    a = 0;
  }
}