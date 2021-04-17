const fs = require('fs')
// const book = {
//     title: 'The Lion Witch and the Wardrobe',
//     author: 'Renn Wasden'
// }
// Working with JSON data and grabbing the objects that you are going to be working with.

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.title)
// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// console.log(dataBuffer.toString())
const dataBuff = fs.readFileSync('1-json.json')
const dataJSON = dataBuff.toString()
const user = JSON.parse(dataJSON)
user.name = 'Pace'
user.age=58
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON) 