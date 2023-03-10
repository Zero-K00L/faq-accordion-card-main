const questions = document.querySelectorAll('.faq_title');
const answers = document.querySelectorAll('.faq_description');
const arrows = document.querySelectorAll('.faq_arrow');

// Bolds the title text, animates arrows and reveals answers.
for(e in questions) {
    questions[e].onclick = function () { 
        questions.forEach(function(btn) {  
            btn.classList.remove('bold');
        })
        this.classList.add('bold');
        var index = 0;
        for(var index = 0; index < questions.length; index++) {
            if(questions[index].classList.contains('bold')) {
                console.log(index);
                arrows[index].classList.add('active');
                answers[index].classList.remove('close');
                answers[index].classList.remove('hidden');
                answers[index].classList.add('open');
            }
            else {
                arrows[index].classList.remove('active');
                arrows[index].classList.remove('open');
                answers[index].classList.add('close');
                answers[index].classList.add('hidden');
            }
        }
    }   
}

