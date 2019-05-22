
class VerticalCardGenerator {
    constructor(cardData) {
        this.cardData = cardData;

        this.symbol = cardData.symbol;
        this.imgSrc = cardData.imgSrc;
        this.title = cardData.title;
        this.paragraph = cardData.paragraph;

        // parent div and class
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card');

        // construct the card
        this.constructSymbol();
        this.constructImage();
        this.constructTitle();
        this.constructParagraph();
    }

    constructSymbol() {
        const symbolContainer = document.createElement('div');
        symbolContainer.setAttribute('class', 'symbol-mark');

        const symbol = document.createElement('p');
        symbol.setAttribute('class', 'symbol');
        symbol.textContent = this.symbol;

        symbolContainer.append(symbol);

        this.cardContainer.append(symbolContainer);
    }

    constructImage() {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'value-image');

        const image = document.createElement('img');
        image.src = this.imgSrc;
        image.alt = this.title;
        imageContainer.append(image);

        this.cardContainer.append(imageContainer);
    }

    constructTitle() {
        const title = document.createElement('h4');
        title.textContent = this.title;
        this.cardContainer.append(title);
    }

    constructParagraph() {
        const paragraph = document.createElement('p');
        paragraph.textContent = this.paragraph;
        this.cardContainer.append(paragraph);
    }
}

if (document.title == 'About') {
    const valueCards = [
        {
            symbol: '✔',
            imgSrc: 'img/values/solutions-focused.png',
            title: 'Solutions-Focused',
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla dui ut lobortis fringilla.Lorem ipsum dolor sit amet."
        },
        {
            symbol: '✔',
            imgSrc: 'img/values/dedicated-mission.png',
            title: 'Dedicated Mission',
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla dui ut lobortis fringilla.Lorem ipsum dolor sit amet."
        },
        {
            symbol: '✔',
            imgSrc: 'img/values/privacy-first.png',
            title: 'Privacy First',
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla dui ut lobortis fringilla.Lorem ipsum dolor sit amet."
        },
    ]

    const valuesContainer = document.querySelector('#values-container');

    valueCards.forEach(value => {
        let newValue = new VerticalCardGenerator(value);
        valuesContainer.append(newValue.cardContainer);
    });

}