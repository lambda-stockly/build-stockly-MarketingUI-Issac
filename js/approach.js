let t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

t1.add({
    targets: '.approach section div',
    backgroundColor: '#E0FCF9',
    delay: anime.stagger(75)
})

const stocklyApproach = document.querySelector('.stockly-approach');
TweenMax.from(stocklyApproach, 2, {opacity: 0});

const approachSection = document.querySelector('.approach');
TweenMax.to(approachSection, 2, {backgroundColor: '#F9F9F9'});

const approachHeader = document.querySelector('.header-approach h2');
const approachSubtitle = document.querySelector('.header-approach p');
const approachImage = document.querySelector('.header-approach .approach-image-container');

TweenMax.from(approachHeader, 2, {opacity: 0});
TweenMax.from(approachSubtitle, 2, {opacity: 0});
TweenMax.from(approachImage, 2, {opacity: 0});
