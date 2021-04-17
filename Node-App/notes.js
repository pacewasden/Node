const fs = require('fs')
const getNotes = function () {
    return 'Your notes...'
}
const addNote = function (title, body){
    const note = loadNotes()
    const duplicateNote = note.filter(function(note){
        return note.title ===title
    })
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
const saveNotes = function(note){
    const dataJSON=JSON.stringify(note)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function(){
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
    addNote:addNote
}