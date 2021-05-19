import React from 'react';
import Genres from './genres'


export default function Carousel({films, openModal}) {

    const genres = ["adventure", "indie", "comedy", "scary"];
    
    return (
      <>
        {genres.map((genre) => (
          <div id="carousel" key={genre}> 
            <h1 className="genretitle">
              {genre[0].toUpperCase()}
              {genre.slice(1)}
            </h1>
            <Genres films={films} openModal={openModal} genre={genre} />
          </div>
        ))}
      </>
    ); 
}

// import React from "react";
// import Genres from "./genres";

// export default function Carousel({ films, openModal }) {
//   const genres = ["adventure", "indie", "comedy", "scary"];

//   return (
//     <>
//       {genres.map((category) => (
//         <div id="carousel" key={category}>
//           <h1 className="genretitle">
//             {category[0].toUpperCase()}
//             {category.slice(1)}
//           </h1>
//           <Genres films={films} openModal={openModal} category={category} />
//         </div>
//       ))}
//     </>
//   );
// }