const featureListImes = document.querySelectorAll('.list-item');
const activeItemSelector = document.getElementById('active-selector');
const slider = document.getElementById('slider');
const questions = document.querySelectorAll('.question');
const features = document.querySelectorAll('.features');
const downloadButtons = document.querySelectorAll('.get-btn');
const contact = document.querySelectorAll('.contact');
const arrElements = [downloadButtons,features, contact];
const emailField = document.getElementById('email');
const emailButton = document.getElementById('email-btn');
const mobileMenuOn = document.getElementById ('menu-hamburger');
const mobileMenuOff = document.getElementById('menu-close');
const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
const logo = document.getElementsByClassName('header-logo')[0];

window.addEventListener('resize', ()=> {
    if(window.matchMedia('(max-width: 1100px)').matches){
        activeItemSelector.style.marginLeft = '0';
        slider.style.transform = 'translateX(0)';
        activeItemSelector.style.top = '54px';
        featureListImes[0].classList.add('active-item');
        for (let i=1; i < featureListImes.length; i++){
            featureListImes[i].classList.remove('active-item');
        }
    }
});

mobileMenuOn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('mobile-menu-active');
    logo.classList.toggle('mobile-menu-active');
    mobileMenuOn.classList.toggle('mobile-menu-active');
});

mobileMenuOff.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('mobile-menu-active');
    logo.classList.toggle('mobile-menu-active');
    mobileMenuOn.classList.toggle('mobile-menu-active');
});

featureListImes.forEach((element, index) => {
    element.addEventListener('click', (e)=> {
            if(window.matchMedia('(max-width: 1100px)').matches){
                activeItemSelector.style.top = (index == 0) ? '54px' : (index+1)*57 +'px';
            }else {
                activeItemSelector.style.marginLeft = (index)+'00%';
            }
        slider.style.transform = "translateX(-"+(115*index)+"%)";
        const activeItem = document.querySelector('.list-item.active-item');
        if (activeItem && activeItem !== element) {
            activeItem.classList.remove('active-item');
        }
        element.classList.add('active-item');
    });
});

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

arrElements.forEach((elements)=> {
    elements.forEach((element)=> {
        element.addEventListener('click', (e)=> {
            if(mobileMenu.classList.contains('mobile-menu-active')) {
                const activeElements = document.querySelectorAll('.mobile-menu-active');
                activeElements.forEach((element) => {
                    element.classList.toggle('mobile-menu-active')
                });
            }
            if(element.classList.contains('features')) {
                const scrollSection = document.getElementsByClassName('main-features')[0];
                scrollSection.scrollIntoView({
                    behavior: "smooth",
                    block: 'start',
                    inline: 'center'
                });
            }else if (element.classList.contains('get-btn')) { 
                const scrollSection = document.getElementsByClassName('browser-selection')[0];
                scrollSection.scrollIntoView({
                    behavior: "smooth",
                    block: 'start',
                    inline: 'center'
                });
            }else{
                document.body.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'end'
                });
            }
        })
    });
});

const emailCheck = () => {
    const errorMsg = document.getElementsByClassName('error-msg')[0];
    errorMsg.innerHTML = '';
    emailField.parentElement.classList.remove('error-mail');
    let isValid = true;
    if (emailField.value != '') {
        let lastAtPos = emailField.value.lastIndexOf('@');
            let lastDotPos = emailField.value.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && emailField.value.indexOf('@@') === -1 && lastDotPos > 2 && (emailField.value.length - lastDotPos) > 2)) {
                const errorMsg = document.getElementsByClassName('error-msg')[0];
                errorMsg.innerHTML = 'Whoops, make sure it’s an email';
                emailField.parentElement.classList.add('error-mail');
                isValid = false;
        }
    }
    return isValid;
}
const inputCheck = () => {
        const errorMsg = document.getElementsByClassName('error-msg')[0];
        errorMsg.innerHTML = '';
        emailField.parentElement.classList.remove('error-mail');
        let isValid = true
        if (emailField.value == '' || emailField.value == undefined){
            const errorMsg = document.getElementsByClassName('error-msg')[0];
            errorMsg.innerHTML = 'Whoops, please enter an email';
            emailField.parentElement.classList.add('error-mail');
            isValid = false;
        }
    return isValid;
}

emailButton.addEventListener('click', (e) => {
    if (emailCheck() && inputCheck()) {
        emailField.value = '';
        const doneMsg = document.getElementsByClassName('done-msg')[0];
        doneMsg.innerHTML = 'Sign up complete!'
        emailField.parentElement.classList.add('done-mail');
        emailButton.disabled = true;
        setTimeout(()=> {
            emailField.parentElement.classList.remove('done-mail');
            emailButton.disabled = false;
        },5000)
    }
});
emailField.addEventListener('change', emailCheck);




