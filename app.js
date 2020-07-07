let linkCategory = document.querySelector('#linkCategory');
let submitButton = document.querySelector('#submitButton');

let linkCategories = [];
let links = [];

linkCategory.addEventListener('keydown', (event)=> {
    if(event.keyCode === 13) {
        event.preventDefault();
        //console.log('hello')
        if(event.target.value)
            linkCategories.push(event.target.value);
        linkCategory.value = '';

        displayLinks();
    }
       
})


function displayLinks() {

}

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    let title = linkTitle.value;
    let url = linkUrl.value;
    let categories = linkCategories;

    let newLink = {
        title,
        url,
        categories
    }
    linkTitle.value = '';
    linkUrl.value = '';
    linkCategories = [];

    links.push(newLink);
})