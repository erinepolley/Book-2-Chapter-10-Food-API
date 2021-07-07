// console.log("Hi")

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


//This element is targeting the article tag in the HTML
//and adding a foodList class to it.
const foodListArticle = document.querySelector("article")
foodListArticle.classList.add("foodList")

// const articleFlexbox = document.querySelector("article")
// articleFlexbox.classList.add("foodListFlexbox")

//WHERE THE FUNCTIONS WERE, IN CASE I SCREW THIS UP

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             let foodAsHTML = foodFactory(food)
//             //        console.log("FOOD AS HTML", foodAsHTML);
//             addFoodToDom(foodAsHTML)
//         })
//     })


// //FAILED EXPERIMENT: Attempting to add class list of dishList to every div where
// //each food is, using a loop.
// let foodIngredientDiv = document.querySelectorAll("div")
// console.log(foodIngredientDiv)
// for( i = 0; i <foodIngredientDiv.length; i++) {
//     foodIngredientDiv[i].classList.add("dishList")
// }


// //FAILED EXPERIMENT: Attempt to put the ingredient targeted from data into the div
// //where all the other info is.
// const puttingStuffInDivString = (ingred) => {
//     food[i].ingredients = ingred.product.ingredients_text_en
// }
// // Adding ingredient to DOM. See below fetch for function call.
//   const addIngredToDom = (foodToAdd) => {
//         const foodStuff = document.querySelector(".foodList")
// foodStuff.innerHTML = foodtoAdd
//   }
// //fetching data for linguine with barcode in URL
// fetch("https://world.openfoodfacts.org/api/v0/product/00286565.json")
//     .then(response => response.json())
//     .then(productInfo => {
//         productInfo.forEach(thing => {
//             puttingStuffInDivString(thing)
//             addIngredToDom(stuffinDiv)
//         })
//     })

//NEW CODE FROM ACTUAL DIRECTIONS. THIS WORKED!!!!!
//Here, I am creating a string of HTML elements 
//to add to the DOM, populated with information I received
//from the data I fetched from both local and external APIs.
let foodListItems = ""
const foodFactory = (foodObj) => {
    return foodListItems += `
        <div>
            <h3>Name: ${foodObj.name}</h3>
            <p>Category: ${foodObj.category}</p>
            <p>Ethnicity: ${foodObj.ethnicity}</p>
            <p>Barcode: ${foodObj.barcode}</p>
            <p>Ingredients: ${foodObj.ingredients}</p>
            <p>Fat: ${foodObj.fat}</p>
            <p>Sugar: ${foodObj.sugar}</p>
            <p>Calories: ${foodObj.calories}</p>
            <p>Country of Origin: ${foodObj.country_of_origin}</p>
        </div>
    `
}
//Now, I am taking the HTML string from foodFactory
//function and populating it in HTML (but on the DOM, of course.)
const addFoodToDom = (foodToAdd) => {
    const foodStuff = document.querySelector(".foodList")
    foodStuff.innerHTML = foodToAdd
}
//First, fetching the array of objects from local JSON.
//Parsing that stuff, then saying for teach object...
//THEN, using barcode from each object to fetch data
//from external API. Parsing that...
//THEN, targeting ingredient elements within data structure
//and using that in foodFactory function. WHOA.

//ONE, must fetch the information
//TWO, must target the following information from the data:
//ingredients
//country of origin
//calories per serving
//fat per serving
//sugar per serving
fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(taco => {
            fetch(`https://world.openfoodfacts.org/api/v0/product/${taco.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    if (productInfo.product.ingredients_text) {
                        taco.ingredients = productInfo.product.ingredients_text
                    } else {
                        taco.ingredients = "no ingredients listed"
                    }
                    //Right here, I'm targeting facets of the food by looking at the data and
                    //chain object names together. I'm then assigning those values to 
                    //the array of objects, so they can be passed into the food factory
                    //argument and get populated in the string of HTML.
                    if (productInfo.product.nutriments.fat_value) {
                        taco.fat = productInfo.product.nutriments.fat_value
                    } else {
                        taco.fat = "no fat listed"
                    }

                    if(productInfo.product.nutriments.sugar) {
                        taco.sugar = productInfo.product.nutriments.sugar
                    } else {
                        taco.sugar = "no sugar listed"
                    }

                    if (productInfo.product.nutriments.calories) {
                        taco.calories = productInfo.product.nutriments.calories
                    } else {
                        taco.calories = "no calories listed"
                    }

                    if (productInfo.product.countries) {
                        taco.country_of_origin = productInfo.product.countries
                    } else {
                        taco.country_of_origin = "no country listed"
                    }
                    // Produce HTML representation (see above)
                    const foodAsHTML = foodFactory(taco)
                    console.log(foodAsHTML)

                    // Add representaiton to DOM. Shaboom shaboom.
                    addFoodToDom(foodAsHTML)
                })
        })
    })

