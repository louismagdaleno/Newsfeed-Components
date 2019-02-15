
// function composeArticle

function composeArticle(my_content, my_heading) {
        let art = document.createElement('div');
        art.classList.add('article');

        let article_content = document.createElement('p');
        article_content.textContent = my_content;

        let article_heading = document.createElement('h2');
        
        article_heading.textContent = my_heading;

        let date = document.createElement('p');
        date.classList.add('date');
        let options = {month: 'short', year: 'numeric', day: 'numeric'};
        date.textContent = new Date().toLocaleDateString("en-US", options);

        let post_button = document.createElement('span');
        post_button.classList.add('expandButton');
        //post_button.textContent = 'expand';

        let post_button_img = document.createElement('img');
        post_button_img.setAttribute('src', "./assets/down-arrow.svg")
        post_button_img.classList.add('down-arrow');
        post_button.appendChild(post_button_img);

        // clean up input fields
        post_form.firstElementChild.value = '';
        post_form.firstElementChild.nextElementSibling.value = '';

        // append the above created elements to the parent div
        art.appendChild(article_heading);
        art.appendChild(date);
        art.appendChild(article_content);
        art.appendChild(post_button);

        return art;
}

// function prependArticle
function prependArticle(art) {
        let parent = document.querySelector('.articles');

        // add the newly constructed article node to the beginning of articles
        parent.prepend(art);
}


// grab form
let post_form = document.querySelector('.post form');
console.log(post_form);

// let articles = document.querySelectorAll('.article').forEach(obj => new Article(obj));
let post_form_btn = document.querySelector('form span');
console.log(post_form_btn);

// *************************************************
//
//
//      Post Form Button Click Event Listener
//
//
// *************************************************
// click event handler for post button
post_form_btn.addEventListener('click', e => {
   

    // grab the values from the forms inputs
    let heading = post_form.firstElementChild.value;
    let content = post_form.firstElementChild.nextElementSibling.value;

    // edge case testing -- if the values are empty, don't do anything
    if (heading.length >0 && content.length > 0) {
         // button is clicked, change colors to indicate to user that success 
        e.target.style.backgroundColor = 'rgb(160, 1, 30)';
        e.target.style.color = 'white';

         // change colors back to normal after a short time
        setTimeout(function () {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
        }, 2000);

        // create elements for an article post and set appropriate classes / text content createArticle() -- return composes article
        let art = composeArticle(content, heading);
        
        // grab the articles element, contains our article classes
        prependArticle(art);

        // change border to indicate new post to user
        art.style.border = '1px solid rgb(160, 1, 30)';

        setTimeout(function () {
            art.style.border = '1px solid lightgrey';
        }, 1000);


        // run the new article through the Article constructor
        setTimeout(function () {
        art =  new Article(art);
    }, 1500);

        
        
    }
    
    
})



