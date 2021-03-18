// import React from 'react'
// import { Link } from 'react-router-dom';
// // import { BsFillPlayFill } from 'react-icons/bs'
// import FilmItem from '../film/film_item'
// // import FilmInfo from '../modal/modal'
// // import Nav from '../nav/nav'

// class Genre extends React.Component {
//     constructor(props){
//         super(props)
//     }
  
//     componentDidMount(){
//         this.props.fetchFilms();
//     }

    

//     render(){
//        console.log(this.props)
//   // $('#prev').on('click', function() {
//   //   $('#category').animate({
//   //     scrollLeft: '-=750'
//   //   }, 300);
//   // });

//   // $('#next').on('click', function() {
//   //   $('#category').animate({
//   //     scrollLeft: '+=750'
//   //   }, 300);
//   // });

  

//   // $(window).click(function(e) {
//   //   $(".modal").css({left: e.pageX});
//   //   $(".modal").css({top: e.pageY});
//   //   $(".modal").show();
//   // });
//   const genres = ["indie", "scary", "comedy", "adventure"]
//         return (
      
//             <div className="carousel">
//               {genres.map(category => 
//               <div>
//                 <h1 key ={category} className="genretitle">{category[0].toUpperCase()}{category.slice(1)}</h1> 
//                   {/* <div id="scroller">
//                     <button id="next">&gt;</button>
//                     <button id="prev">&#60;</button>
//                   </div> */}
//                   <div id="category">
//                     {films.map(film => {
//                         if(film.id === 350){
//                           return (
//                             <Link key={film.id} to = {`/`}> 
//                                 <img id="movie" src = {film.poster} onClick={() => this.props.openModal('show', film.id)} />
//                             </Link>
//                         )
//                     }})} */}

//                 {/* </div> 
//               </div>
//               )}
//             </div>
     
               

//         )
//     }
// }


// export default Genre


