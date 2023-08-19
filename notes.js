const fs = require("fs")

const getNotesList = () => {
  const dataBuffer = fs.readFileSync("notes.json")
  const JSONString = dataBuffer.toString()
  if (JSONString) return JSON.parse(JSONString)
  else return []
}

const readNote = (title) => {
  const data = getNotesList()
  const index = data.findIndex((ele) => ele.title === title)
  if (index > -1) console.log(data[index].body)
  else console.log("no such notes available")
}

const AddNote = (title, body) => {
  const note = {
    title,
    body,
  }
  const data = getNotesList()
  const index = data.findIndex((item) => item.title === title)
  if (index > -1) {
    console.log("Title already taken")
    return
  }
  data.push(note)
  fs.writeFileSync("notes.json", JSON.stringify(data))
  console.log("Note added successfully")
}

const removeNote = (title) => {
  const data = getNotesList()
  const index = data.findIndex((item) => item.title === title)

  if (index > -1) {
    const updatedData = [...data.slice(0, index), ...data.slice(index + 1)]
    fs.writeFileSync("notes.json", JSON.stringify(updatedData))
  } else console.log("This note does not exist")
}

const updateNote = (title, body) => {
  const data = getNotesList()
  const index = data.findIndex((item) => item.title === title)

  if (index > -1) {
    const updatedData = [
      ...data.slice(0, index),
      { ...data[index], body },
      ...data.slice(index + 1),
    ]
    fs.writeFileSync("notes.json", JSON.stringify(updatedData))
  } else console.log("This note does not exist")
}

module.exports = { AddNote, getNotesList, removeNote, readNote, updateNote }
