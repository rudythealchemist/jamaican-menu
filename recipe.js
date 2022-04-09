// items - menu array
const menu = [
    {
        id: 1,
        title: 'jerk chicken',
        category: 'dinner',
        price: 25.99,
        img: "./img/jerkchk.jpeg",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    },
    {
        id: 2,
        title: 'Pepper Shrimp',
        category: 'lunch',
        price: 15.99,
        img: "https://i.ytimg.com/vi/RO89T-5_w5s/sddefault.jpg",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    },
    {
        id: 4,
        title: 'Cocktails',
        category: 'beverages',
        price: 15.99,
        img: "https://couplesresorts.co.uk/wp-content/uploads/2018/09/Jamican-rum-cocktail.jpg",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    },
    {
        id: 5,
        title: 'Ackee & Saltfish',
        category: 'dinner',
        price: 10.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiYxDnl7G1ZqOW3rQTYsJQSbo6txqPpUh-g&usqp=CAU",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    },
    {
        id: 6,
        title: 'oxtail',
        category: 'dinner',
        price: 10.99,
        img: "https://www.savorythoughts.com/wp-content/uploads/2021/01/Instant-Pot-Oxtail-Savory-Thoughts-8.jpg",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    },
    {
        id: 7,
        title: 'Brown stew chicken',
        category: 'breakfast',
        price: 12.99,
        img: "https://64.media.tumblr.com/bf1f9ce43a3ad0e2104018e9d2f1d127/tumblr_o6w99yLeR91rwy6s8o1_640.jpg",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    },
    {
        id: 8,
        title: 'Pudding',
        category: 'dessert',
        price: 10.99,
        img: "https://i.etsystatic.com/13642768/r/il/cf4c41/2753494843/il_794xN.2753494843_fsa2.jpg",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    },
    {
        id: 8,
        title: 'Gizzarda',
        category: 'dessert',
        price: 8.99,
        img: "http://admin.jamaicaexperiences.com//img/domains/959801708/Gizzada.png",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    },
    {
        id: 9,
        title: 'Jamaican drinks',
        category: 'beverages',
        price: 8.99,
        img: "https://photos.smugmug.com/Travel/Jamaica/i-hfPcTdj/0/45fc71c0/1500x1500/jamaica%20supermarket%20souvenirs-10-1500x1500.jpg",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut, error debitis reprehenderit ea rem id nobis nulla iure fugit.'
    }
];

// When page loads add/create content in parent element- section center.

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


//Loads items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu); //this function avoids retyping of menu items
    displayMenuButtons();
});

function displayMenuItems(menuItem) {
    // map copies array and creates a function once for each item
    let displayMenu = menuItem.map(function (item) {
        // console.log('item');

        // dyamically populated html
        return `<article class="menu" >
            <img src=${item.img} alt=${item.title}/>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article > `;
    });
    // arrays have a "Join method" that joins data into one string.
    displayMenu = displayMenu.join('');//empty strings removes commas between elements.

    // console.log(displayMenu);
    // add data to html parent element
    sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
        ['all']
    );
    // console.log(categories);
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    }).join('');
    container.innerHTML = categoryBtns;
    //filter btns
    const filterBtns = container.querySelectorAll('.filter-btn');
    //filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(menuCategory);
            if (category === 'all') {
                displayMenuItems(menu);
            } else (displayMenuItems(menuCategory));
        });
    });
}