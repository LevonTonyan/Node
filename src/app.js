const getNotes = require('./notes')
const yargs = require('yargs')


/////changeing version
yargs.version('1.1.2')



////create////
yargs.command({
    command: 'add',
    describe: 'adding a note',
    handler: function () {
        console.log("adding a note....")
    }
})
/////////////Remove a note//////////
yargs.command({
    command: 'remove',
    describe: 'removeing a note',
    handler: function () {
        console.log("removeing a note....")
    }
})

////////Listing 
    yargs.command({
    command: 'list',
    describe: 'Printing all  notes',
    handler: function () {
        console.log("Listing  notes....")
    }
    })

    ////////Read 
    yargs.command({
        command: 'read',
        describe: 'Reading .....',
        handler: function () {
            console.log("Reading....")
        }
    })


    console.log(yargs.argv)
