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
 
 
 const qa = data.results.map(question => 
     ({
     question: question.question, 
     correct: question.correct_answer, 
     incorrect: question.incorrect_answers 
     })
     )
     game(qa)
 }
 
 function game(qa) {
     let i = 0
     const used = []
     
     DOMSelectors.form.addEventListener('submit', function(event) {
         event.preventDefault()
         const input = DOMSelectors.input.value;
         displayQuestion(input)
     });
 
     function displayQuestion(input) {
         if (i < input) {
             let q = qa[i]
             console.log(q)
             clear()
             DOMSelectors.question.insertAdjacentHTML("beforeend", `<h1>${q.question}</h1>`)
         }
         
     }
 DOMSelectors.true.addEventListener('click', function(event) {
         event.preventDefault()
             let answer = "True"
             checkAnswer(answer)
             displayQuestion(DOMSelectors.input.value)
             console.log(DOMSelectors.input.value)
     });
 
     DOMSelectors.false.addEventListener('click', function(event) {
         event.preventDefault()
             let answer = "False"
             checkAnswer(answer)
             displayQuestion(DOMSelectors.input.value)
             console.log(DOMSelectors.input.value)
         }
     );
 
     function checkAnswer(answer) {
         let q = qa[i]
         if (q.correct.includes(answer)) {
            used.push("Correct")
         }
         else {
            used.push("Incorrect")
         }
         i++
         if (i === Number(DOMSelectors.input.value)){final(used)}
     }
     function final(array){
        let a = 0
        let b = 0
        for (let i = 0; i < array.length; i++){
         if (array[i].includes("Correct")) {a++}
         if (array[i].includes("Incorrect")) {b++}}
         clear()
         const correct = a * 100/DOMSelectors.input.value
         const incorrect = b * 100/DOMSelectors.input.value
         DOMSelectors.question.insertAdjacentHTML("beforeend", `<h1>You got ${correct}% of them right and ${incorrect}% of them wrong!</h1>`)
        }
 }
 

 function clear() {
     DOMSelectors.question.innerHTML = ''
 }
 
 main()