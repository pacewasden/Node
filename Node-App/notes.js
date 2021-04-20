const fs = require('fs')
const chalk = require('chalk');

const readNote = (title) =>{
    const note = loadNotes()
    console.log('Reading the notes')
    const test = note.find((test)=> test.title===title)
    if (test){
        console.log(chalk.inverse(test.title))
        console.log(test.body)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const getNotes =  () => {
    console.log(chalk.inverse('Title of all the Notes'))
    const test = loadNotes()
    test.forEach((note)=> {
        console.log(note.title)
    })
}

// Function goes through and adds a note.
const addNote = (title, body)=>{
    const note = loadNotes()
    const duplicateNote = note.find((note)=> note.title===note.title)
    if (!duplicateNote){
        note.push({
            title:title,
            body: body
        })
        saveNotes(note)
        console.log('New note added')
    }else{
        console.log('Note title taken')
    }

}

// Function checks if there are matching title names
const removeNote= (title) =>{
    const note = loadNotes()
    const notesToKeep = note.filter((note)=>note.title != title)
    if (note.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    }else {
        console.log(chalk.red.inverse('No Note Was Found'))
    } 
}


const saveNotes = (note)=>{
    const dataJSON=JSON.stringify(note)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes =( )=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }

}
module.exports = {
    getNotes:getNotes, 
    addNote:addNote,
    removeNote:removeNote,
    getNotes: getNotes,
    readNote: readNote
}