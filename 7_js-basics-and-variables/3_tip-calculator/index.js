console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.

2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.

4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/

// 1.
const mealCost = 13;
const tipPercentage = 0.1;

// 2.
const tipAmount = mealCost * tipPercentage;
console.log(tipAmount);

// 3.
const totalCost = mealCost + tipAmount;
console.log(totalCost);

// 4.
console.log(mealCost, tipAmount, totalCost);