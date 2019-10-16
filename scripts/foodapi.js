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

    linguine: 00286565
    curry: 0016229008635
    green curry: 0016229906191 
    ravioli: 0719283590596
    tuscan soup: 0011150479547
    spaghetti: 0071300055557

