const DOMSelectors = {
   input: document.querySelector("#input"),
   form: document.querySelector('#form'),
   question: document.querySelector('#question'),
   true: document.querySelector('#true'),
   false: document.querySelector('#false')
}
async function main() {
const api = 'https://opentdb.com/api.php?amount=50&type=boolean'
const response = await fetch(api)
const data = await response.json()
const score = 0
const used = []
const qa = data.results.map(question => 
    ({
    question: question.question, 
    correct: question.correct_answer, 
    incorrect: question.incorrect_answers 
    })
    )

    DOMSelectors.form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = DOMSelectors.input.value
    console.log(input)
    
    for (let i = 0; i < input;){
        let q = qa[i]
        console.log(q)
        let click = 'no'
        clear()
        DOMSelectors.question.insertAdjacentHTML("beforeend", `<h1>${q.question}</h1>`)
        if (click==="no") {
        DOMSelectors.true.addEventListener('click', function(event) {
            event.preventDefault();
            let answer = "True"
            if (q.correct.includes(answer)){
                console.log("BUSSSSSSSSSSSS")}
            score++
            i++
            click = 'yes'
        })
        DOMSelectors.false.addEventListener('click', function(event) {
            event.preventDefault();
            let answer = "False"
            if (q.correct.includes(answer)){
                console.log("BUSSSSSSSSSSSS")}
            score++
            i++
            click = 'yes'
       })}
        }})
}
function clear() {
    DOMSelectors.question.innerHTML = ''
}

main()
