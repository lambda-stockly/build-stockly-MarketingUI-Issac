
class HorizontalCardGenerator {
    constructor(cardData) {
        this.cardData = cardData;

        this.link = this.cardData.link;
        this.imgSrc = this.cardData.imgSrc;
        this.title = this.cardData.title;
        this.paragraph = this.cardData.paragraph;

        // initial card setup
        this.linkContainer = document.createElement('a');
        this.linkContainer.href = this.link;

        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card');
        this.linkContainer.append(this.cardContainer);

        this.constructImage();
        this.constructText();
        console.log(this.linkContainer);
    }

    constructImage() {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'work-benefits-image');

        const image = document.createElement('img');
        image.src = this.imgSrc;
        image.alt = this.title;
        imageContainer.append(image);

        this.cardContainer.append(imageContainer);
    }

    constructText() {
        this.textContainer = document.createElement('div');
        this.textContainer.setAttribute('class', 'work-benefits-text');

        this.constructTitle();
        this.constructParagraph();

        this.cardContainer.append(this.textContainer);
    }

    constructTitle() {
        const title = document.createElement('h3');
        title.textContent = this.title;
        this.textContainer.append(title);
    }

    constructParagraph() {
        const paragraph = document.createElement('p');
        paragraph.textContent = this.paragraph;
        this.textContainer.append(paragraph);
    }
}

if (document.title == 'About') {
    const workBenefitCards = [
        {
            link: '#',
            imgSrc: 'img/work-benefits/life-at-stockly.png',
            title: 'Life at Σtockly →',
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse."
        },
        {
            link: '#',
            imgSrc: 'img/work-benefits/operate-globally.png',
            title: 'How We Work →',
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse."
        }
    ]

    const workBenefitsContainer = document.querySelector('.work-benefits-wrapper');

    workBenefitCards.forEach(workBenefit => {
        let newWorkBenefit = new HorizontalCardGenerator(workBenefit);
        workBenefitsContainer.append(newWorkBenefit.cardContainer);
    });

}