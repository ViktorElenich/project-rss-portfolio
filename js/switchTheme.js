const switchTheme = document.querySelector('.switch__theme');
switchTheme.addEventListener('click', () => {
    if(switchTheme.classList.toggle('dark')){
        document.body.style.background = 'white';
        document.querySelectorAll('.skill h3').forEach(skill => {
            skill.style.color = 'black';
        });
        document.querySelectorAll('.skill p').forEach(skill => {
            skill.style.color = 'black';
        });
        document.querySelectorAll('.block_price h3').forEach(skill => {
            skill.style.color = 'black';
        });
        document.querySelectorAll('.block_price p').forEach(skill => {
            skill.style.color = 'black';
        });
        document.querySelectorAll('.coast').forEach(skill => {
            skill.style.color = '#bdae82';
        });
        document.querySelectorAll('.contact__author p').forEach(skill => {
            skill.style.color = 'black';
        });
        document.querySelector('.contact__author a').style.color = 'black';
        document.querySelector('.instagram').style.background = `url('../assets/icons/inst_dark.png') no-repeat`;
        document.querySelector('.instagram').style.backgroundSize = 'cover';
        document.querySelector('.facebook').style.background = `url('../assets/icons/fb_dark.png') no-repeat`;
        document.querySelector('.facebook').style.backgroundSize = 'cover';
        document.querySelector('.twitter').style.background = `url('../assets/icons/tw_dark.png') no-repeat`;
        document.querySelector('.twitter').style.backgroundSize = 'cover';
        document.querySelector('.pinterest').style.background = `url('../assets/icons/pinterest_dark.png') no-repeat`;
        document.querySelector('.pinterest').style.backgroundSize = 'cover';
    } else {
        document.body.style.background = 'black';
        document.querySelectorAll('.skill h3').forEach(skill => {
            skill.style.color = 'white';
        });
        document.querySelectorAll('.skill p').forEach(skill => {
            skill.style.color = 'white';
        });
        document.querySelectorAll('.block_price h3').forEach(skill => {
            skill.style.color = 'white';
        });
        document.querySelectorAll('.block_price p').forEach(skill => {
            skill.style.color = 'white';
        });
        document.querySelectorAll('.coast').forEach(skill => {
            skill.style.color = '#bdae82';
        });
        document.querySelectorAll('.contact__author p').forEach(skill => {
            skill.style.color = 'white';
        });
        document.querySelector('.contact__author a').style.color = 'white';
        document.querySelector('.instagram').style.background = `url('../assets/icons/inst.png') no-repeat`;
        document.querySelector('.instagram').style.backgroundSize = 'cover';
        document.querySelector('.facebook').style.background = `url('../assets/icons/fb.png') no-repeat`;
        document.querySelector('.facebook').style.backgroundSize = 'cover';
        document.querySelector('.twitter').style.background = `url('../assets/icons/tw.png') no-repeat`;
        document.querySelector('.twitter').style.backgroundSize = 'cover';
        document.querySelector('.pinterest').style.background = `url('../assets/icons/pinterest.png') no-repeat`;
        document.querySelector('.pinterest').style.backgroundSize = 'cover';
    }
})