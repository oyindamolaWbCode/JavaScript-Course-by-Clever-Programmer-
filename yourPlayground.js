
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

//  Objects

const personal = {
    name: 'Lampard',
    shirt: "black"
}

console.log(personal.name)



const introducerMe = (name, shirt) => {
    const person = {
    name:  name,
    shirt: shirt,
    assets: 5000000,
    liabilty : 100000,
    netWorth : function (){
        return this.assets - this.liabilty
    }
}
 const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $ ${person.netWorth()} USD`

 return intro
}

console.log(introducerMe('Oyindamola', 'flowery'))