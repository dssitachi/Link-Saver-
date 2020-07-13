let linkCategory = document.querySelector('#linkCategory');
let submitButton = document.querySelector('#submitButton');
const addButton = document.querySelector('#addBtn');
const cancelButton = document.querySelector('#cancelButton');
const panel = document.querySelector('.panel');
const linksList = document.querySelector('#linksList');
const addedCategories = document.querySelector('.addedCategories');
const addLinkContainer = document.querySelector('#addLinkContainer');

let linkCategories = [];
let editIndex = -1;

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
    if(editIndex === -1)
        links.unshift(newLink);
    else {
        links[editIndex] = newLink;
        editIndex = -1;    
    }
    //hide the addForm when the user clicks submit 
    // to be done remaining
    addLinkContainer.classList.add('hidden');
    clearForm();
    displayLinks(); 
})


function showPanelForm() {
    addLinkContainer.classList.remove('hidden');
    displayLinkCategories();
}

addButton.addEventListener('click', (e) => {
    showPanelForm();
})

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    addLinkContainer.classList.add('hidden');
    clearForm();
})

function displayLinks() {
	linksList.innerHTML = '';

	let index = 0;
	for (let link of links) {

		let linkHTMLString = `
		<div class="flex-item">
			<div class="link panel">
				<div class="link-options">
					<button class="btn-sm" onclick="deleteLink(${index})">Delete</button>
					<button class="btn-sm" onclick="editLink(${index})">Edit</button>
				</div>
				<a href="${link.url}">
					<h1 class="header">${link.title}</h1>
				</a>
				<p class="link-date">${Date.now()}</p>
				<div class="categories">
					Categories:`;
		for (let category of link.categories) {
			linkHTMLString += `<span class="category">${category}</span>`;
		}

		linkHTMLString += `
					</div>
				</div>	
			</div>	
			`
			;

		linksList.innerHTML += linkHTMLString;
		index++;
	}
}


displayLinks();

function deleteLink(index) {
    links.splice(index, 1);
}

function editLink(index) {
    editIndex = index;
    linkTitle.value = links[index].title;
    linkUrl.value = links[index].url;
    linkCategories = links[index].categories;

    showPanelForm();
}