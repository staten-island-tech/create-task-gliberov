const api = 'https://opentdb.com/api.php?amount=50&type=boolean'
const response = await fetch(api)
const data = await response.json()
const qa = data.results.map(question => 
    ({question: question.question, 
    correct: question.correct_answer, 
    incorrect: question.incorrect_answers }))
console.log(qa)
const input = 5
const used = []
for (let i = 0; i < input; i++){
    let q = qa[i]
    if (q.correct.includes("True")){
        console.log("BUSSSSSSSSSSSS")
    }
    if (q.correct.includes("False")){
        console.log("OHHHHHHH")
    }
    
}