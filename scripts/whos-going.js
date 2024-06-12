const whosGoingList = [];

function renderWhosGoing () {
    let whosGoingHTML = '';

    for (let i = 0; i < whosGoingList.length; i++) {
        const person = whosGoingList[i];
        const html = `<div>${person}<button class="remove-button">Remove</button></div>`;
        whosGoingHTML = whosGoingHTML + html;
    }

    document.querySelector('.js-person-list').innerHTML = whosGoingHTML;
}



function addPerson() {
    const nameInput = document.querySelector('.js-name-input');
    const name = nameInput.value;
    if(nameInput.value !== '') {
        whosGoingList.push(name);
        nameInput.value = '';
    }
    
    renderWhosGoing();

}

function enterKeydown(event) {
    if (event.key === 'Enter') {addPerson();}
}