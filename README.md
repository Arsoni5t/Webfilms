# PRODUCTION README

![alt text][logo]

[logo]: https://webfilms.herokuapp.com/assets/logo-a695cc2f7a40be8370006b1c10aa60b3ab4957c12dab4929bd83e50706113c82.png


## INTRODUCTION

[WEBFILMS](https://webfilms.herokuapp.com/#/ "Webfilms") is a full-stack film streaming clone. Built with React/Redux, JS, styled with basic CSS and supported by a Rails backend. 

## FUNCTIONALITY

Users can sign up, log in as a new or demo user, and once logged in, select a film to watch. 
Over two-dozen of your favorite film trailers are available at the click of a button!

![alt text](https://webfilms-films.s3.amazonaws.com/github/Browse+screen.png "browse")

## BUILD NOTES

#### The goal of the design was to create a clean and easy to follow user interface. 
  Highlights of the design include:
  * Making films pop out when a user hovers over the image. 
  * Clear design that allows for intuitive interaction by the user. 
  * Responsive loads that only fetch elements as they are called.
  * Respecting the familiarity of the cloned site 
  * Honor the design of the cloned site to illustrate understanding of design elements and user interaction. 
  
## Added Genres and Carousel feature to the browse page:

  ![alt text]( https://webfilms-films.s3.amazonaws.com/carousel.gif "carousel")
  
  ```CSS
#prev {
display: inline-block;
    position: absolute;
    left: -3px;
    font-size: 72px;
    height: 20px;
    cursor: pointer;
    top: 10px;
    color: #E5E5E5;
    z-index: 2;
    height: 200px;
    background-color: transparent;
    border: hidden;
    outline: none;
    visibility: hidden;
}

.carousel:hover{
    #prev{
        visibility: visible;
    }
    #next{
        visibility: visible;
    }
}


JS
$('#prev').on('click', function() {
  $('#scary').animate({
    scrollLeft: '-=750'
  }, 300);
});

$('#next').on('click', function() {
  $('#scary').animate({
    scrollLeft: '+=750'
  }, 300);
});
```

  
## UPCOMING FEATURES

In the coming weeks, new features will include:
* Popout/modal when user clicks on film poster that dispays details about the film.
* Ability for the user to search films by title or genre.
* User will have the ability to make a queue of films to watch later. 

![alt text](https://webfilms-films.s3.amazonaws.com/github/tv.png "symbol")
