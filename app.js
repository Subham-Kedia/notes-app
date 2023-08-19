const yargs = require("yargs")
const {
  AddNote,
  getNotesList,
  removeNote,
  readNote,
  updateNote,
} = require("./notes.js")

yargs.command({
  command: "add",
  describe: "Add Notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    AddNote(argv.title, argv.body)
  },
})
yargs.command({
  command: "remove",
  describe: "Remove Notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    removeNote(argv.title)
  },
})
yargs.command({
  command: "getList",
  describe: "Get Notes",
  handler: function () {
    const data = getNotesList()
    if (data.length) console.log("List is empty")
    data.forEach((ele) => {
      console.log(ele.title)
    })
  },
})
yargs.command({
  command: "read",
  describe: "Read Notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (args) {
    readNote(args.title)
  },
})
yargs.command({
  command: "update",
  describe: "Update Notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    updateNote(argv.title, argv.body)
  },
})

yargs.parse()
