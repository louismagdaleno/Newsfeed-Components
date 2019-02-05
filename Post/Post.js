
// grab form
let post_form = document.querySelector('.post form');
console.log(post_form);

// let articles = document.querySelectorAll('.article').forEach(obj => new Article(obj));
let post_form_btn = document.querySelector('form span');
console.log(post_form_btn);

// click event handler for post button
post_form_btn.addEventListener('click', e => {
    // button is clicked, change colors to indicate to user that success
    e.target.style.backgroundColor = 'green';
    e.target.style.color = 'white';

    // change colors back to normal after a short time
    setTimeout(function () {
        e.target.style.backgroundColor = 'white';
        e.target.style.color = 'black';
    }, 2000);

    // grab the values from the forms inputs
    let heading = post_form.firstElementChild.value;

    let content = post_form.firstElementChild.nextElementSibling.value;

    // edge case testing -- if the values are empty, don't do anything
    if (heading.length >0 && content.length > 0) {
        // create elements for an article post and set appropriate classes / text content
        let art = document.createElement('div');
        art.classList.add('article');

        let my_content = document.createElement('p');
        my_content.textContent = content;

        let my_heading = document.createElement('h2');
        
        my_heading.textContent = heading;

        let date = document.createElement('p');
        date.classList.add('date');
        date.textContent = new Date();

        let post_button = document.createElement('span');
        post_button.classList.add('expandButton');
        post_button.textContent = 'expand';

        // clean up input fields
        post_form.firstElementChild.value = '';
        post_form.firstElementChild.nextElementSibling.value = '';

        // append the above created elements to the parent div
        art.appendChild(my_heading);
        art.appendChild(date);
        art.appendChild(my_content);
        art.appendChild(post_button);
        
        // grab the articles element, contains our article classes
        let parent = document.querySelector('.articles');

        // add the newly constructed article node to the beginning of articles
        parent.prepend(art);

        // run the new article through the Article constructor
        art =  new Article(art);

        
    }
    
    
})



