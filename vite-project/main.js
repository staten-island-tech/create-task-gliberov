import './style.css'

const api = 'https://opentdb.com/api.php?amount=50&type=boolean'
const response = await fetch(api)
const data = await response.json()
console.log(data.results)