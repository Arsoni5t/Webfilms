import React from 'react'

class Footer extends React.Component{

    render(){
        return (
          <footer background-color="black">
            <div className="browsefooter">
              <p className="browsefootertop">Contact Us</p>
              <a
                href="https://linkedin.com/in/bradlarsoncode"
                target="_blank"
                className="browsefooteritems1"
              >
                <img className="browseicons" src={window.linked} />
              </a>
              <a
                href="https://github.com/bradlarsoncode/Webfilms"
                target="_blank"
                className="browsefooteritems"
              >
                <img className="browseicons" src={window.github} />
              </a>
              <a
                href="https://angel.co/u/brad-larson-4"
                target="_blank"
                className="browsefooteritems"
              >
                <img className="browseicons" src={window.angel} />
              </a>
              <a
                href="http://www.bradlarson.me"
                target="_blank"
                className="browsefooteritems"
              >
                <img className="browseicons" src={window.portfolio} />
              </a>
            </div>
          </footer>
        ); }
}

export default Footer

