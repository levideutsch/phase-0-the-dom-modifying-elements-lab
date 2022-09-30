const removeMain = document.getElementById("main") // This will remove the "main" element
removeMain.remove()
// console.log(removeMain)

const newHeader = document.createElement("h1") // This will create the "h1" element
// document.body.append(newHeader)

newHeader.id = 'victory' // This will add the id of "victory" to our "h1" element

newHeader.textContent = "YOUR-NAME is the champion"
// newHeader.append(newText)
