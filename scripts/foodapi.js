console.log("Hi")

// fetch("http://localhost:8088/food")
// .then(foods => foods.json()) //got rid of curly brackets here 
// //so you don't have to return this. Shrunk it to one line. 
// //The J
// .then(parsedFoods => {
//     console.table(parsedFoods)
//     // parsedFoods.forEach(food => {
//     //     console.log("food", food)
//     //     console.log(food.name)
//     // })
//     // console.log(parsedFoods)
// })
const foodListDiv = document.querySelector("div")
foodListDiv.classList.add("foodList")

let foodListItems = ""
const foodFactory = (foodObj) => {
 return foodListItems +=  ` 
       <h1>Name: ${foodObj.name}</h1>
        <p>Category: ${foodObj.category}</p>
        <p>Ethnicity: ${foodObj.ethnicity}</p>
    `
  }

  const addFoodToDom = (foodToAdd) => {
        const foodStuff = document.querySelector(".foodList")
        foodStuff.innerHTML = foodToAdd
  }

  fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            let foodAsHTML = foodFactory(food)
    //        console.log("FOOD AS HTML", foodAsHTML);
            addFoodToDom(foodAsHTML)
        })
    })