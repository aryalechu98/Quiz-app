const quizdata= [
    {
       question:"which is the deepest canal in the world?",
       a: "Panama Canal",
       b: "Suez Canal",
       c: "Grand canal of china",
       d: "Corinth canal",
       correct: "d",
    },
    {
        question:"which is the largest country by area?",
        a: "Canada",
        b: "China",
        c: "Russia",
        d: "United states",
        correct: "c",
    },
    {
        question:"which is the longest day?",
        a: "31 March",
        b: "12th Febuary",
        c: "26th December",
        d: "21th June",
        correct: "d",
    
    },
    {
        question:"which is the worlds longest beach?",
        a:"Virginia Beach",
        b:"Ninrty Mile Beach",
        c:"Coxs Bazaar",
        d:"Praia Cassino Beach",
        correct:"d",
    },
    {
        question:"Which is the fastest bird?",
        a: "Ostrich",
        b: "Hummingbird",
        c: "Perigrine Falcon",
        d: "Golden Eagle",
        correct: "c",
    }
    
    
    ];
    
    const quiz = document.getElementById('quiz')
    const answerEls =document.querySelectorAll('.answer')
    const questionEl =document.getElementById('question')
    const a_text =document.getElementById('a_text')
    const b_text =document.getElementById('b_text')
    const c_text =document.getElementById('c_text')
    const d_text =document.getElementById('d_text')
    const submitBtn =document.getElementById('submit')
    
    let currentQuiz= 0
    let score = 0
    
    loadQuiz()
    function loadQuiz(){
        deselectAnswers()
        const currentQuizData = quizdata[currentQuiz]
        console.log(currentQuizData)
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }
    
    function deselectAnswers(){
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    function getselected(){
        // let answer
        // answerEls.forEach(answerEl => {
        //     if(answerEl.checked) {
        //     answer = answerEl.id
        //     console.log(answer) 
        //     // return true
        //     }
                
        //     })
        //     return answer;
        let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
            console.log(answer)
        }
    })
    return answer
    }
    
     
    
    submitBtn.addEventListener('click', () => {
        
        const answer = getselected()
        console.log("Selected answer id " + answer);
        console.log(answer === quizdata[currentQuiz].correct)
        if(answer) {
            if(answer === quizdata[currentQuiz].correct) {
                score++
            }
            currentQuiz++
            if(currentQuiz < quizdata.length) {
                loadQuiz()
            }else {
                quiz.innerHTML = `
        <h2>You answerd ${score}/${quizdata.length} questions correctly</h2>
    
                <button onclick="location.reload()">Reload</button>
                `
            }
            
            
        
        }
    })
    