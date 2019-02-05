
// grab form
let post_form = document.querySelector('.post form');
console.log(post_form);

// let articles = document.querySelectorAll('.article').forEach(obj => new Article(obj));
let post_form_btn = document.querySelector('form span');
console.log(post_form_btn);


post_form_btn.addEventListener('click', e => {
    e.target.style.backgroundColor = 'green';
    e.target.style.color = 'white';
    let heading = document.querySelector('#heading').value;

    let content = post_form.firstElementChild.nextElementSibling.value;

    if (heading.length >0 && content.length > 0) {
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


        art.appendChild(my_heading);
        art.appendChild(date);
        art.appendChild(my_content);
        art.appendChild(post_button);
  
        let parent = document.querySelector('.articles');

        parent.prepend(art);


        art =  new Article(art);


        
    }
    
    
})



