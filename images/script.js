const questions = document.querySelectorAll('.faq_title');
const arrow = document.querySelectorAll('faq_arrow');
const answers = document.querySelectorAll('faq_description');

for (e in questions) {
    questions[e].onclick = function() {
        questions.forEach(function(){
            answers.classList.remove('hidden')
        })
    }
}

