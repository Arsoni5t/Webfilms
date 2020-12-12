import React from 'react';


class Enjoy extends React.Component {


    render() {
        return <div className="subbar"> 
                    <h2 className="enjoyontv">Enjoy on your TV.</h2>
                        <div >   
                            <p className="watchon">Watch on WebTV, TurboGrafx-16, </p><br/>
                            <div>
                                <img className="tvstyle" src={window.videoGif} /> 
                            </div> 
                            <p className="watchon">Microwaves, Zune, LaserDisc players, and</p><br/>
                            <p className="watchon">more.</p>

                        </div>
                </div>
    }
}

export default Enjoy

