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
  
For the carousel, I tried to implement a simple solution that leveraged the strength of HTML5, CSS, jQuery, JavaScript ES6 fat arrow bindings and the React useMemo hook to create a dynamic and scalable carosel for each genre, that allows a preview of the film when hovering over the title cards on the browse page. 
  
  ```
    function Genres({films, openModal, genre}){
    const matches = useMemo(() => {
      return films.filter((film) => film.genre.includes(genre))},
      [films, genre]
      ) 
      
    const clickNext = () => {
      $("#" + genre).animate(
        {scrollLeft: "+=750",},300);
      }HTML

    const clickPrev = () => {
      $("#" + genre).animate(
        {scrollLeft: "-=750",},300);
      };
    console.log(matches)
  return (
    <>
      <div id="scroller">
        <button id="next" onClick={clickNext}>&gt;</button>
        <button id="prev" onClick={clickPrev}>&#60;</button>
      </div>
      <div key={genre} id={genre}>
          {matches && matches.map((film) => {
            return (
              <Link key={film.id} to={`/`}>
                <video
                  id="movie"
                  src={film.film}
                  poster={film.poster}
                  onClick={() => openModal("show", film.id)}
                  muted
                  onMouseOver={(e)=>e.target.play()}
                  onMouseOut={(e)=>e.target.load()}
                />
              </Link>
            );
          })
          }
      </div>
      <FilmInfo />
    </>
  );
}

export default Genres

```

![alt text](https://webfilms-films.s3.amazonaws.com/github/tv.png "symbol")
