import React from 'react';
import Video from './video';
import Nav from './placenav';
import Pieces from './Pieces';


export default function Place() {
    return (
        <div className='piecesbg'>
            <Nav/>
            <Video/>
        </div>
    )
}