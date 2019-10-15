console.log("Hi")

fetch("http://localhost:8088/food")
.then(foods => foods.json()) //got rid of curly brackets here 
//so you don't have to return this. Shrunk it to one line. 
//The J
.then(parsedFoods => {
    console.table(parsedFoods)
    // parsedFoods.forEach(food => {
    //     console.log("food", food)
    //     console.log(food.name)
    // })
    // console.log(parsedFoods)
})
const foodListDiv = document.querySelector("div")
foodListDiv.classList.add("foodList")

