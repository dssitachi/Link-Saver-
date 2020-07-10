let linkCategory = document.querySelector('#linkCategory');
let submitButton = document.querySelector('#submitButton');
const addButton = document.querySelector('#addBtn');
const cancelButton = document.querySelector('#cancelButton');
const panel = document.querySelector('.panel');
const linksList = document.querySelector('#linksList');
const addedCategories = document.querySelector('.addedCategories');

let linkCategories = [];
let links = [
    {
        title: 'New Link 1',
        url: 'url1.com',
        categories: ['node', 'angular']
    },
    {
        title: 'New Link 2',
        url: 'url2.com',
        categories: ['js', 'angular']
    },
    {
        title: 'New Link 3',
        url: 'url3.com',
        categories: ['node', 'bootstrap']
    }
];


function clearForm() {
    linkTitle.value = '';
    linkUrl.value = '';
    linkCategories = [];
    linkCategory.value = '';
    addedCategories.innerHTML = '';
}


linkCategory.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        //console.log('hello')
        if (event.target.value)
            linkCategories.push(event.target.value);
        linkCategory.value = '';

        displayLinkCategories();
    }

})

function displayLinkCategories() {
    addedCategories.innerHTML = '';

    for(let category of linkCategories) {
        let categoryHTMLString =  `<span class="category">${category}</span>`;
        addedCategories.innerHTML += categoryHTMLString;
    }

}

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let title = linkTitle.value;
    let url = linkUrl.value;
    let categories = linkCategories;

    let newLink = {
        title,
        url,
        categories
    }

    links.unshift(newLink);


    //hide the addForm when the user clicks submit 
    // to be done remaining
    panel.classList.add('hidden');
    displayLinks(); 
})


addButton.addEventListener('click', (e) => {
    panel.classList.remove('hidden');
})

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    panel.classList.add('hidden');
    clearForm();
})

function displayLinks() {
    linksList.innerHTML = '';
    let linkHtmlString ='';
    for (let link of links) {
        linkHtmlString += `
        <div class="link panel">

            <div class="link-options">
                <button class="btn-sm">Delete</button>
                <button class="btn-sm">Edit</button>
            </div>
            <a href="${link.url}">
                <h1 class="header">${link.title}</h1>
            </a>

            <p class="link-date">${Date.now()}</p>
            <div class="categories">
            Categories:` ;


        for (let category of link.categories) {

            linkHtmlString +=
                `
        <span class="category">${category}</span>
        `
        }

        linkHtmlString += `</div>
        </div>`

    }
    linksList.innerHTML = linkHtmlString;
}


displayLinks();