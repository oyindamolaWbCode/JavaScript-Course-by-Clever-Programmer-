console.log('hello world')

// Math Methods
//Floor ()- Rounds down
//Ceil() - Rounds up
//random() - Gives a random number

let number = Math.floor(Math.random() * 4)

console.log(number)

const groceries = ['banana', 'orange', 'cucumber', 'kiwi', 'pear']

groceries.push('cookies')
groceries.push('chocolate')
console.log(groceries.indexOf('pear'))
 console.log(groceries)
 console.log(groceries[0])

 //array slice
//start from 0 INCLUSIVE and up to 3 [0,3]
 console.log(groceries.slice(0, 3))
//  console.log(groceries.splice(3, 6))
 console.log(groceries.splice(1, 3))