const questions = document.querySelectorAll('.faq_title');
const answers = document.querySelectorAll('.faq_description');
const arrows = document.querySelectorAll('.faq_arrow');

// Bold the title text
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
                answers[index].classList.remove('hidden');
            }
            else {
                arrows[index].classList.remove('active');
                answers[index].classList.add('hidden');
            }
        }
    }   
}

