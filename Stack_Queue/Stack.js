const stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();

console.log(stack) //[5, 2, 3, 1];
console.log(stack.reverse());//[1, 3, 2, 5];