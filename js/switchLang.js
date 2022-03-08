const settingCont = document.querySelector('.switch__lang');
const languageItems = settingCont.querySelectorAll('.lang');

languageItems.forEach(lang => {
    lang.addEventListener('click', (e) => {
        languageItems.forEach(lang => {
            lang.classList.remove('lang__active');
            e.target.classList.add('lang__active');
        })
    })
})