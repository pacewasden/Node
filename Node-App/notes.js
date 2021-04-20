const fs = require('fs')
const chalk = require('chalk')
const getNotes =  () => {
    return 'Your notes...'
}

// Function goes through and adds a note.
const addNote = (title, body)=>{
    const note = loadNotes()
    const duplicateNote = note.filter((note)=>note.title ===title)
    // const duplicateNote = note.filter(function(note){
    //     return note.title ===title
    // })
    if (duplicateNote.length === 0){
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


const loadNotes =()=>{
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
    removeNote:removeNote
}