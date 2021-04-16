// const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(chalk.redBright.inverse('this worked'))
// console.log(validator.isURL('pacewasdenil.com'))
console.log(process.argv)