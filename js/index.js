if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function() {
        console.log('SW registered')
    });
}

// Sign up button animation
const signUpButton = document.querySelectorAll('.sign-up');

signUpButton.forEach(button => {
    button.addEventListener('mouseenter', (event) => mouseOverPriButton(event));
    button.addEventListener('mouseleave', (event) => mouseOutPriButton(event));
});

function mouseOverPriButton(event) {
    let targetedButton = event.target;
    TweenMax.to(targetedButton, 0.3, { backgroundColor: '#50CDC5' });
}

function mouseOutPriButton(event) {
    let targetedButton = event.target;
    TweenMax.to(targetedButton, 0.3, { backgroundColor: '#5AE5DD' });

}

// log in button animation
const loginButton = document.querySelectorAll('.log-in');

loginButton.forEach(button => {
    button.addEventListener('mouseenter', (event) => mouseOverSecButton(event));
    button.addEventListener('mouseleave', (event) => mouseOutSecButton(event));
});

function mouseOverSecButton(event) {
    let targetedButton = event.target;
    TweenMax.to(targetedButton, 0.3, {color: '#97A2B9'});
}

function mouseOutSecButton(event) {
    let targetedButton = event.target;
    TweenMax.to(targetedButton, 0.3, {color: '#0D122B'});

}

// hamburger button animation
const hamburgerMenu = document.querySelector('.menu label');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('close');
});

// nav link hover effect
const navLinks = document.querySelectorAll('.hover-nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', (event) => mouseOverNavLink(event));
    link.addEventListener('mouseleave', (event) => mouseOutNavLink(event));
})

function mouseOverNavLink(event) {
    let targetedLink = event.target;
    TweenMax.to(targetedLink, 0.3, { color: '#97A2B9' });
}

function mouseOutNavLink(event) {
    let targetedLink = event.target;
    TweenMax.to(targetedLink, 0.3, { color: '#0D122B' });
}

// footer list item hover effect
const footerLinks = document.querySelectorAll('.footer-links a');

footerLinks.forEach(link => {
    link.addEventListener('mouseenter', (event) => mouseOverFooterLink(event));
    link.addEventListener('mouseleave', (event) => mouseOutFooterLink(event));
});

function mouseOverFooterLink(event) {
    let targetedLink = event.target;
    TweenMax.to(targetedLink, 0.3, { color: '#5AE5DD' });
}

function mouseOutFooterLink(event) {
    let targetedLink = event.target;
    TweenMax.to(targetedLink, 0.2, { color: '#F9F9F9' });
}

// fixed scroll bar shadow
const navBar = document.querySelector('.nav-wrapper');
window.addEventListener('scroll', () => floatingNavBar());

function floatingNavBar() {
    if(navBar.classList.contains('floatingNav') && window.scrollY > 10){
        // do nothing
    } else if(window.scrollY > 10) {
        navBar.classList.add('floatingNav');
    } else {
        navBar.classList.remove('floatingNav');
    }
}

// approach page
if (document.title == 'Approach') {
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
}


