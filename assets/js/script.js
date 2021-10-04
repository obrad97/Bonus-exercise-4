const listImes = document.getElementsByClassName('list-item');
const activeItemSelector = document.getElementById('active-selector');
const slider = document.getElementById('slider');
[...listImes].forEach((element, index) => {
    element.addEventListener('click', (e)=> {
        slider.style.transform = "translateX(-"+(115*index)+"%)";
        activeItemSelector.style.marginLeft = (index)+'00%';
        const activeItem = document.querySelector('.list-item.active-item');
        if (activeItem && activeItem !== element) {
            activeItem.classList.remove('active-item');
        }
        element.classList.add('active-item');
    });
});

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        const activeQuestion = document.querySelector('.question.question-active');
        if (activeQuestion && activeQuestion !== question){
            activeQuestion.classList.toggle('question-active');
            activeQuestion.nextElementSibling.classList.toggle('answer-active');
            activeQuestion.nextElementSibling.style.maxHeight = '0px';
        }
        const height = question.nextElementSibling.scrollHeight;
        question.classList.toggle('question-active');
        if (question.classList.contains('question-active')) {
            question.nextElementSibling.classList.toggle('answer-active');
            question.nextElementSibling.style.maxHeight = `${height}px`;
        }else{
            question.nextElementSibling.classList.toggle('answer-active');
            question.nextElementSibling.style.maxHeight = '0px';
        }
    });
});

