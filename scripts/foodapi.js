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
const foodListArticle = document.querySelector("article")
foodListArticle.classList.add("foodList")

// const articleFlexbox = document.querySelector("article")
// articleFlexbox.classList.add("foodListFlexbox")

let foodListItems = ""
const foodFactory = (foodObj) => {
 return foodListItems +=  `
        <div>
            <h3>Name: ${foodObj.name}</h3>
            <p>Category: ${foodObj.category}</p>
            <p>Ethnicity: ${foodObj.ethnicity}</p>
        </div>
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

//getting new information using the barcodes and 
//external API.

const foodIngredientDiv = document.querySelectorAll("div")
foodIngredientDiv.classList.add("dishList")

//     let ingredientItems = ""
// const populateIngredients = (ingred) => {
//  return ingredientItems +=  `
//         <div>
//             <h3>Name: ${foodObj.name}</h3>
//             <p>Category: ${foodObj.category}</p>
//             <p>Ethnicity: ${foodObj.ethnicity}</p>
//         </div>
//     `
//   }

//   const addFoodToDom = (foodToAdd) => {
//         const foodStuff = document.querySelector(".foodList")
//         foodStuff.innerHTML = foodToAdd
//   }

//     fetch("https://world.openfoodfacts.org/api/v0/product/00286565.json")
//     .then(response => response.json())
//     .then(productInfo => {
//         productInfo.forEach(thing =>{
//             let stuffinDiv = stuff(thing)
//             addFoodToDom(stuffinDiv)
//         })
//     })



