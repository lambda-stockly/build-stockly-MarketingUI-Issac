
class Carousel {
    constructor(tabs, images) {
        this.tabs = tabs;
        this.images = images;

        this.tabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                this.selectTab();
            });
        });
    }

    selectTab() {
        this.tabs.forEach(tab => {
            tab.parentNode.classList.remove('active-link');
        });
        
        event.target.parentNode.classList.add('active-link');
        this.selectImage();
    }

    selectImage() {
        const tabIdentifier = event.target.parentNode.dataset.tab;
        
        this.images.forEach(image => {
            image.classList.remove('active-photo');
            if(image.dataset.tab == tabIdentifier){
                image.classList.add('active-photo');
            }
        });
    }
}

const featureTabs = document.querySelectorAll('.features li h4');
const featureImages = document.querySelectorAll('.image-carousel img');

new Carousel(featureTabs, featureImages);