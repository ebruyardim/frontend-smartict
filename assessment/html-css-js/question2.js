// ASSESSMENT:
// Fill inside of the optimizeFunction function!

let lastTask={"number":"", "result":"", "func": ""};

function doExpensiveTask(input) {
  const result = 2 * input;
  console.log("Doing expensive task...:", result);
  return result;
}

function optimizeFunction(func, number) {
  // You shouldn't need to edit anywhere else
  // Do your work inside this function
  // SOLUTION:

  if (lastTask.func===func & lastTask.number===number){
      console.log("Same input, no need to calculate: ", lastTask.result);
      return lastTask.result;
  }
  else{
    result = func(number);
    lastTask = {"number":number, "result":result, "func": func};
  }

}

// anOptimizedFunc shouldn't execute the expensive task if new input is same as the previous one
const anOptimizedFunc = (number) => optimizeFunction(doExpensiveTask, number);
anOptimizedFunc(2); // Should print: Doing expensive task...: 4
anOptimizedFunc(2); // Should print: Same input, no need to calculate: 4
anOptimizedFunc(4); // Should print: Doing expensive task...: 8
anOptimizedFunc(4); // Should print: Same input, no need to calculate: 8
// It should forget the older input
anOptimizedFunc(2); // Should print: Doing expensive task...: 4

function doAnotherExpensiveTask(input) {
  const result = 10 * input;
  console.log("Doing another expensive task...:", result);
  return result;
}

// We can optimize another function, which should also behave similarly
const anotherOptimizedFunc = (num) => optimizeFunction(doAnotherExpensiveTask, num);
anotherOptimizedFunc(2); // Should print: Doing another expensive task...: 20
anotherOptimizedFunc(2); // Should print: Same input, no need to calculate: 20
anotherOptimizedFunc(4); // Should print: Doing another expensive task...: 40
anotherOptimizedFunc(4); // Should print: Same input, no need to calculate: 40
anotherOptimizedFunc(2); // Should print: Doing another expensive task...: 20
