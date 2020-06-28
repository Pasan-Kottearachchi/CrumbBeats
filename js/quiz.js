(function(){
    // Functions

    function startQuiz(){
        startHours = m1.getHours();
        startMinutes = m1.getMinutes();
        startSeconds = m1.getSeconds();

        // Store the html output
        const output = [];

        // Show questions
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // Store the list answers
                const answers = [];

                // For each available answer and...
                for(letter in currentQuestion.answers){

                    // Add a radio button
                    answers.push(
                        `<label>
                                    <input type="radio" name="question${questionNumber}" value="${letter}">
                                        ${letter} :
                                        ${currentQuestion.answers[letter]}
                                 </label>`
                    );
                }

                // Add this question and its answers to the output
                output.push(
                    `<div class="slide">
                               <div class="question"> ${currentQuestion.question} </div>
                               <div class="answers"> ${answers.join("")} </div>
                            </div>`
                );
            }
        );

        // Combine our output list into one string of html
        quizContainer.innerHTML = output.join('');
    }

    function showResults(){
        var m2 = new Date();
        var endHours = m2.getHours();
        var endMinutes = m2.getMinutes();
        var endSeconds = m2.getSeconds();
        t = 0;
        previousBtn.style.display = 'inline-block';
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach( (currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if(userAnswer === currentQuestion.correctAnswer){
                // add one to the number of correct answers
                numCorrect++;

                // set answers color green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or no input
            else{
                // set answers color red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show the value of correct answers and the time in the results section
        resultsContainer.innerHTML = `Your score: ${numCorrect} out of ${myQuestions.length}, Click previous to see your summary.<br>
        Start time- ${startHours}:${startMinutes}:${startSeconds} <br> 
        Quiz ended- ${endHours}:${endMinutes}:${endSeconds}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
            t = setTimeout(showNextSlide, 120000)
            previousBtn.style.display = 'none';
        }
        if(currentSlide === slides.length-1){
            t = setTimeout(showResults, 120000)
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        }
        else{
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    var t;
    var m1 = new Date();
    var startHours;
    var startMinutes;
    var startSeconds;
    const quizContainer = document.getElementById('quiz');//Quiz container
    const resultsContainer = document.getElementById('results');//Results container
    const submitBtn = document.getElementById('submit');
    const myQuestions = [
        {
            question: "1. Which of the following singers sang 'All About Tonight'?",
            answers: {
                a: "Pixie Lott",
                b: "Kelly Clarkson ",
                c: "Bruno Mars",
                d: "Pitbull"
            },
            correctAnswer: "a"
        },
        {
            question: "2. Which female singer had a hit with 'Stronger'?",
            answers: {
                a: "Beyonce",
                b: "Kelly Clarkson",
                c: "Pixie Lott",
                d: "Taylor Swift"
            },
            correctAnswer: "b"
        },
        {
            question: "3. Which male singer had a hit with 'Marry You'?",
            answers: {
                a: "Pitbull",
                b: "Bruno Mars",
                c: "Chris Brown",
                d: "Taylor Swift"
            },
            correctAnswer: "b"
        },
        {
            question: "4. Which male singer had a hit with 'Rain Over Me'?",
            answers: {
                a: "Pitbull",
                b: "John Legend",
                c: "Chris Brown",
                d: "Bruno Mars"
            },
            correctAnswer: "a"
        }, {
            question: "5. Which male singer sang 'Boyfriend' in 2012?",
            answers: {
                a: "John Legend",
                b: "Chris Brown",
                c: "Justin Beiber",
                d: "Bruno Mars"
            },
            correctAnswer: "c"
        },
        {
            question: "6. Which songwriter and rapper’s real name is Timothy Z Mosley?",
            answers: {
                a: "Travis Scott",
                b: "Lil Pump",
                c: "Lil Uzi",
                d: "Timbaland"
            },
            correctAnswer: "d"
        },
        {
            question: "7. What state was \"The King of Pop\", Michael Jackson born in?",
            answers: {
                a: "Chicago",
                b: "Indiana",
                c: "Kentucky",
                d: "Ohio"
            },
            correctAnswer: "b"
        },
        {
            question: "8. What was the name of Michael Jackson's famous dance move?",
            answers: {
                a: "Anti-gravity lean",
                b: "Toe stand",
                c: "Moonwalk",
                d: "The robot"
            },
            correctAnswer: "c"
        },
        {
            question: "9. Harry, Liam, Niall, Louis and Zayn are all members of which British boy band?",
            answers: {
                a: "One Direction",
                b: "The Who",
                c: "Blur",
                d: "The Kinks"
            },
            correctAnswer: "a"
        },
        {
            question: "10. Which singer released the single ‘Lonely’ in 2005?",
            answers: {
                a: "Akon",
                b: "Pitbull",
                c: "Bruno Mars",
                d: "Chris Brown"
            },
            correctAnswer: "a"
        },
    ];

    // Kick things off

    startQuiz();

    // Pagination
    const previousBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitBtn.addEventListener('click', showResults);
    previousBtn.addEventListener("click", showPreviousSlide);
    nextBtn.addEventListener("click", showNextSlide);
})();

