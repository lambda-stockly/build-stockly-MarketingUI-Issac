
class SquareCardGenerator {
    constructor(cardData) {
        // core card data
        this.cardData = cardData;
        this.imgSrc = this.cardData.imgSrc;
        this.title = this.cardData.title;
        this.subTitle = this.cardData.subTitle;

        // supplementary card data
        this.linkText = this.cardData.linkText;
        this.linkLocation = this.cardData.linkLocation;

        // parent div and class
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card');

        // construct the card
        this.constructImage();
        this.constructTitle();
        this.constructSubTitle();
        this.constructLink();
    }

    constructImage() {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'image-container');

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

    constructSubTitle() {
        const subTitle = document.createElement('p');
        subTitle.textContent = this.subTitle;
        this.cardContainer.append(subTitle);
    }

    constructLink() {
        if (this.linkText) {
            const link = document.createElement('a');
            link.textContent = this.linkText;
            link.href = this.linkLocation;
            this.cardContainer.append(link);
        }
    }
}

if (document.title == 'Σtockly') {

    const benefitsCard = [
        {
            imgSrc: 'img/benefits/user-accounts.png',
            title: 'User Accounts',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            imgSrc: 'img/benefits/stock_summaries.png',
            title: 'Stock Summaries',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            imgSrc: 'img/benefits/stock-charts.png',
            title: 'Stock Charts',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            imgSrc: 'img/benefits/stock-thresholds.png',
            title: 'Stock Thresholds',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            imgSrc: 'img/benefits/leaderboard-page.png',
            title: 'Leaderboard Page',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            imgSrc: 'img/benefits/sentiment-analysis.png',
            title: 'Sentiment Analysis',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        // {
        //     imgSrc: 'img/benefits/user-accounts.png',
        //     title: 'User Accounts',
        //     subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        //     linkText: '',
        //     linkLocation: '',
        // },  
    ]

    const benefitsContainer = document.querySelector('.card-container');

    benefitsCard.forEach(benefit => {
        // create in this line
        let newBenefit = new SquareCardGenerator(benefit);
        benefitsContainer.append(newBenefit.cardContainer);
        // append in this line
    });
}

if (document.title == 'About') {

    const teamCard = [
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        },
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        }, 
        {
            imgSrc: 'img/team/team-placeholder.png',
            title: 'Firstname Lastname',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            linkText: 'Github',
            linkLocation: 'https://www.google.com',
        }, 
    ]

    const teamContainer = document.querySelector('.card-container');

    teamCard.forEach(member => {
        let newMember = new SquareCardGenerator(member);
        teamContainer.append(newMember.cardContainer);
    });
}
