const queue = [];

queue.push(5);
queue.push(2);
queue.push(3);
queue.push(7);
queue.shift();
queue.push(1);
queue.push(4);
queue.shift();

console.log(queue); //[3, 7, 1, 4]
console.log(queue.reverse()); //[4, 1, 7, 3]