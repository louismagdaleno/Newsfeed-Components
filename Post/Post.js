class ArticleComponent {
    constructor(obj) {
        this.post_heading = document.createElement('h2');
        this.post_heading.text_content = this.post_heading;
        this.post_date = document.createElement('p');
        this.post_date.classList.add('date');
        this.post_date.text_content = new Date();
        this.post_content = document.createElement('p');
        this.post_content.text_content = this.post_content;
        this.post_button = document.createElement('span');
    }
}
// grab form
let post_form = document.querySelector('.post form');
console.log(post_form);

// let articles = document.querySelectorAll('.article').forEach(obj => new Article(obj));
let post_form_btn = document.querySelector('form span');
console.log(post_form_btn);

post_form_btn.addEventListener('click', e => {
    e.target.style.backgroundColor = 'green';
    e.target.style.color = 'white';
    let heading = post_form.firstElementChild.value;
    console.log(heading);
    let content = post_form.firstElementChild.nextElementSibling.value;
    console.log(content);
    if (heading.length >0 && content.length > 0) {
        let art = document.createElement('div');
        art.classList.add('article');

        let content = document.createElement('p');
        content.textContent = content;

        let heading = document.createElement('h2');
        heading.textContent = heading;

        let date = document.createElement('p');
        date.classList.add('date');
        date.textContent = new Date();

        let post_button = document.createElement('span');


        art.append(heading);
        art.append(date);
        art.append(content);
        art.append(post_button);
  
        let parent = document.querySelector('.articles');
        parent.prepend(art);
    }
    
    
})



