import React from 'react'

class Footer extends React.Component{

    render(){
        return (
          //         <div className="loginfooter">
          //     <p className="loginfootertop">Hiring? Call 1-267-269-5454</p>
          //     <p className="loginfooteritems">FAQ</p>
          //     <p className="loginfooteritems3">Help Center</p>
          //     <p className="loginfooteritems3">Terms of Use</p>
          //     <p className="loginfooteritems3">Privacy</p>
          //     <div >
          //         <p className="loginfooteritems2">Cookie Preferences</p>
          //         <p className="loginfooteritems4">Corporate Information</p>
          //     </div>

          // </div>
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

