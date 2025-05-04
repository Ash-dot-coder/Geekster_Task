import React, {useState, useEffect} from 'react';

const Quiz = () => {
const [questions, setQuestions] = useState([]);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [timeLeft, setTimeLeft] = useState(5);
const [showResult, setShowResult] = useState(false);
const [error, setError] = useState(null);

useEffect(() =>{
    const cachedQuestions = localStorage.getItem('questions');
    if (cachedQuestions) {
        setQuestions(JSON.parse(cachedQuestions));
        return;
    }

    fetch("https://opentdb.com/api.php?amount=10&type=multiple").then((res)=>{
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) =>{
        if (data.results && data.results.length >0) {
            localStorage.setItem('questions', JSON.stringify(data.results));
            setQuestions(data.results);
        }else{
            throw new Error("No questions found");
        }
    })
    .catch((err) =>{
        console.error('Error fetching questions:', err);
        setError(err.message);
    })
}, [])

useEffect(()=>{
    if (timeLeft === 0) {
        handleNextQuestion();
    }
    const timer = setInterval(() =>{
        setTimeLeft((prev) =>(prev > 0? prev - 1:0));
    }, 1000);
    return ()=>clearInterval(timer);
}, [timeLeft]);

const handleAnswer =  (selectedAnswer)=>{
    if (selectedAnswer === questions[currentQuestion].correct_answer) {
        setScore(score + 1);
    }
    handleNextQuestion();
};

const handleNextQuestion  = ()=>{
    if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(5);
    }else{
        setShowResult(true);
    }
};

// pause on line no: 66 (handleSkip)

  return (
    <div>Quiz</div>
  )
}

export default Quiz