// let ourDiv = document.getElementById("FizzBuzz");
function fizzBuzz() {
  for (let i = 1; i < 50; i++) {
    if (i % 15 === 0) {
      document.getElementById("fizzbuzz").innerHTML += "<p>FizzBuzz</p>";
    } else if (i % 5 === 0) {
      document.getElementById("fizzbuzz").innerHTML += "<p>Buzz</p>";
    } else if (i % 3 === 0) {
      document.getElementById("fizzbuzz").innerHTML += "<p>Fizz</p>";
    } else {
      document.getElementById("fizzbuzz").innerHTML += "<p>" + i + "</p>";
    }
  }
}
/*for (let i = 0; i < 50; i++){
    ourDiv.innerHTML += "<p>i</p>" }*/
