const portfolioBtn = document.querySelectorAll('.btn__season');
const portfolioImages = document.querySelectorAll('.portfolio__img');
const portfolioBtns = document.querySelector('.btn__block');

const changeImage = (e) => {
    if(e.target.classList.contains('btn__season')){
        portfolioBtn.forEach(btn => {
            btn.classList.remove('btn__season__active');
        });
        e.target.classList.add('btn__season__active');
        portfolioImages.forEach((img, i) => (img.src = `./assets/${e.target.dataset.season}/${i + 1}.png`));
    }
}

portfolioBtns.childNodes.forEach(btn => {
    btn.addEventListener('click', (event) => { changeImage(event)});
})


const preloadImages = () => {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach(season => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/${season}/${i}.png`;
        }
    })
}
preloadImages();