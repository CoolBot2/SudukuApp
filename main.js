const getValues = ()=>{

const cells = document.querySelectorAll('.cell')
const values = []

cells.forEach((cell) => {
  values.push(cell.value.trim())
})

return values

}

const test1 = ()=>{
  console.log(getValues())
}

const randomInt= (max,min)=>{
  let val = Math.floor(Math.random()*(max-min+1)+min)
  return val
}
//check
// const fillStart=()=>{
//   const cells = document.querySelectorAll('.cell')
//   const values = Array(81).fill('') // 81 leere Strings

//   const values = getValues()
//   for(let i=0; i<20;i++){
//     let index =randomInt(81,1)
//     let content =  randomInt(9,1)
//       values[index]=content
//       cells[index].value=content
//   }
//   console.log(values)



const testValues=()=>{
  console.log(getValues());
}

const getRows=(values)=>{
  const rows = []
  for(let i=0;i<9;i++){
    rows.push(values.slice(i*9, (i+1)*9))
  }
  console.log(rows)
  return rows
  
}
const getColumns=(values)=>{
  const Columns = []
  for(let i=0;i<9;i++){
    const column = []
    for(let j=0;j<9;j++){
      column.push(values[j*9+i])
    }
    Columns.push(column)
  }
  
  console.log(Columns)
  return Columns

}
const getBoxes=(values)=>{
  const boxes = []
  
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const box = []
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const index = (boxRow * 3 + row) * 9 + (boxCol * 3 + col)
          box.push(values[index])
        }
      }
      boxes.push(box)
    }
  }
  
  console.log(boxes)
  return boxes
}

const check = (arr) => {
const seen = new Set()
for (const v of arr) {
    if (v === '' || v === null || v === undefined) continue;
    const s = String(v);
    if (s < '1' || s > '9') return false;   // optional: nur 1–9 erlauben
    if (seen.has(s)) return false;
    seen.add(s);
  }
  return true
}
  const testCheck=()=>
    {
  const values = getValues()
  const rows = getRows(values)
  rows.forEach((row, index) => {
    console.log(`Row ${index + 1}: ${check(row) ? 'has no dupes' : 'has dupes'}`)
  })
}
const fillStart = () => {
  const cells = document.querySelectorAll('.cell')
    let values = Array(81).fill('') // 81 leere Strings


let valid = false
  do{
    // Reset values
    values = Array(81).fill('') // 81 leere Strings
    // Fill random values


    for (let i = 0; i < 20; i++) {
      let index = randomInt(80, 0) // 0-80 for
      let content = randomInt(9, 1) // 1-9 for Sudoku
      // Check if the cell is empty before assigning a value
      if (values[index] === '') {
        values[index] = content
        cells[index].value = content
      }
    }
    const rows = getRows(values)
    const columns = getColumns(values)
    const boxes = getBoxes(values)
    const allRowsValid = rows.every(check);
    const allColsValid = columns.every(check);
    const allBoxesValid = boxes.every(check);
    valid = allRowsValid && allColsValid && allBoxesValid
  } while (!valid);

    cells.forEach((cell, index) => {
      cell.value = values[index]
    })
  
    console.log(values)
  }
  window.onload=fillStart
 