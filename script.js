const questions = document.querySelectorAll('.faq_title');
const answers = document.querySelectorAll('.faq_description');
const arrows = document.querySelectorAll('.faq_arrow');

// Bold the title text
for (e in questions) {
    questions[e].onclick = function () {
        
        questions.forEach(function(btn){
            
            btn.classList.remove('bold');
        })
        this.classList.add('bold');
        var index = 0;
        for(var index = 0; index < questions.length; index++) {
            if(questions[index].classList.contains('bold')) {
                
                console.log(index);
                arrows[index].classList.add('active');
            }
            else {
                arrows[index].classList.remove('active');
            }
        }

    
    }   

}




/* for (e in arrows) {
    arrows[e].onclick = function () {
        arrows.forEach(function(btn) {
            btn.classList.remove('active');
        })
        this.classList.add('active');
    }
   
} */


/* for (e in questions) {
    questions[e].onclick = function () {
        

    }   
} */



/* for (e in questions) {
    questions[e].onclick = function () {
        answers.forEach(function(btn){
            btn.classList.remove('hidden');
        })
        this.classList.add('hidden');
    }
} */