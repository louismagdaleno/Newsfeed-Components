// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // this.expandButton.textContent = 'expand';
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    
  }

  expandArticle () {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    
    // toggle up and down arrows based on whether the article is expanded or not
    let buttonImg = this.expandButton.querySelector('img');
    if (buttonImg.getAttribute('src') == './assets/down-arrow.svg') {
      buttonImg.setAttribute('src', './assets/up-arrow.svg');
      TweenMax.to(this.domElement, 1, {className: '+=article-open'});
    } else {
      buttonImg.setAttribute('src', "./assets/down-arrow.svg");
      TweenMax.to(this.domElement, 1, {className: '-=article-open'});
    }


  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

// node list of objects that have a class of article
let articles = document.querySelectorAll('.article').forEach(obj => new Article(obj));

