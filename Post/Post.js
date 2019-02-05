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
        let art = new ArticleComponent({'post_heading': heading, 'post_content': content});
        console.log('logging art now');
        console.log(art);
        art.classList.add('article');
        let parent = document.querySelector('.articles');
        parent.prepend(art);
    }
    
    
})



