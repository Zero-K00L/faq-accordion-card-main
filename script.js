const questions = document.querySelectorAll('.faq_title');
const answers = document.querySelectorAll('.faq_description');

for (e in questions) {
    questions[e].onclick = function () {
        questions.forEach(function(btn){
            btn.classList.remove('bold');
        })
        this.classList.add('bold');
    }   
}




/* for (e in questions) {
    questions[e].onclick = function () {
        answers.forEach(function(btn){
            btn.classList.remove('hidden');
        })
        this.classList.add('hidden');
    }
} */