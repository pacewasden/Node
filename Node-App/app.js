// const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { string, argv } = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder:{
        title:
        {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder:{
        title:
        {
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log('Removed note.')
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing out all notes.')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a notes')
    }
})
//console.log(yargs.argv)
yargs.parse()