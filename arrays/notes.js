const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

//notes.splice(1,1,'This is the new second item')

notes[2]='This is now the new notes three'

notes.forEach(
    function(item, index) {
        console.log(item)
        console.log(index)
})

console.log(notes.length)
console.log(notes)
//console.log(notes[notes.length-1]) //Grab last item from list