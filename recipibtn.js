let nextbtn = document.querySelector("#nextbtn");
let prevbtn = document.querySelector("#prevbtn");
let dishes = document.querySelectorAll(".dishes");
let counter = 0;

dishes.forEach(function (dish, index) {
      dish.style.left = `${index * 100}%`
})

function myFun() {
      dishes.forEach(function (currentValue) {
            currentValue.style.transform = `translateX(-${counter * 100}%)`
      })
}
nextbtn.addEventListener('click', function () {
      counter++;
      if (counter == dishes.length) {
            counter = 0;
      }
      myFun();
})


prevbtn.addEventListener('click', function () {
      counter--;
      if (counter == -1) {
            counter = dishes.length - 1;
      }
      myFun();
})
