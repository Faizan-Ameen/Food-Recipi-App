



let user_search = document.querySelector("#user-search");
let search_btn = document.querySelector("#search-btn");
let DishValue = document.querySelectorAll(".dish");
console.log(DishValue);

console.log(user_search);
console.log(search_btn);


const Data = async (value) => {
      let GetData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
      let jsonData = await GetData.json();
      document.querySelector(".result-area").innerHTML = "";
      jsonData.meals.forEach(mealsData => {
            console.log(mealsData);
            let newEle = document.createElement("div");
            newEle.classList.add("card");
            newEle.innerHTML = `
             <img src=${mealsData.strMealThumb} alt="">
             <h1>${mealsData.strMeal}</h1>
             <p>${mealsData.strInstructions}</p>
             <span>Scroll Down</span>
            `
            document.querySelector(".result-area").appendChild(newEle)

      });




}



search_btn.addEventListener('click', function () {
      let searchData = user_search.value;
      console.log(searchData);
      Data(searchData);
});



DishValue.forEach(function (DishData) {
      console.log(DishData);
      DishData.addEventListener('click', function () {
            Data(DishData.value);
      })
});