// const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    handler: function(){
        console.log('Adding a new note.')
    }
})
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function(){
        console.log('Removed note.')
    }
})
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler: function(){
        console.log('Listing all notes.')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function(){
        console.log('Reading the notes')
    }
})
console.log(yargs.argv)