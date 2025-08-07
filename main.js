const getValues = ()=>{

 console.log("where am i")

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
  let val = Math.floor(Math.random()*(max-min)+min)
  return val
}

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

// }
const fillStart = () => {
  const cells = document.querySelectorAll('.cell')
  const values = Array(81).fill('') // 81 leere Strings

  for (let i = 0; i < 20; i++) {
    values[randomInt(81, 0)] = randomInt(9, 1) // Achtung: Index von 0 bis 80
  }

  
  cells.forEach((cell, index) => {
    cell.value = values[index]
  })

  console.log(values)
}
window.onload=fillStart()
