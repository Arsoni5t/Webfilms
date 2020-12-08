import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDownSFill } from 'react-icons/ri'
import shortid from 'shortid';
import SearchBarContainer from '../search/search_bar_container'
import { FaSearch } from 'react-icons/fa'

class Nav extends React.Component{
     constructor(props){
        super(props)
        //  this.handleSubmit = this.handleSubmit.bind(this);
    }

    //    handleSubmit(e){
    //        let { logout } = this.props
    //         e.preventDefault();
    //             logout;
    //     }

    render(){
        
         let { logout } = this.props

            $(window).on("scroll", function() {
                if($(window).scrollTop() > 10) {
                    $(".browsenav").addClass("scrolling");
                } else {
                    $(".browsenav").removeClass("scrolling");
                }
            });

        return(

            <header className= 'browsenav' >
                    <nav className="browsenavleft">
                        <Link to="/">
                            <img className="browselogo" src={window.logoUrl} />
                        </Link>

                        <Link to="/browse" className="browsenavlinkshome">
                            <span>Home</span>
                        </Link>

                        {/* <Link to="/browse"> 
                            <span className="browsenavlinks">Latest</span>
                        </Link>

                        <Link to="/browse"> 
                        <span className="browsenavlinks">My List</span>
                        </Link> */}

                        
                    </nav>

                    <nav className="browsenavright">
                        
                         <SearchBarContainer />
                             {/* <Link to="/browse"> 
                        <span className="searchicon"><FaSearch className="playicon"/></span> 
                        </Link>  */}
                           <div>
                               <ul>
                                <li key={shortid.generate()} className="browselogout">Account
                               
                                        <ul className="logoutbg">
                                           
                                            <li key={shortid.generate()} className="logouttxt">
                                                <a href="https://www.linkedin.com/in/bradlarsoncode/" target="_blank">LinkedIn</a>
                                            </li>
                                             <li key={shortid.generate()}  className="logouttxt">
                                                <a href="https://github.com/bradlarsoncode/Webfilms" target="_blank">Github</a>
                                            </li>

                                            <li key={shortid.generate()}  className="logouttxt">
                                                <a href="https://angel.co/u/brad-larson-4" target="_blank">AngelList</a>
                                            </li>
                                            <li key={shortid.generate()}  className="logouttxt">
                                                <a href="http://www.bradlarson.me" target="_blank">Portfolio</a>
                                            </li>
                                            <hr className="solid" />
                                             <li key={shortid.generate()}  className="logouttxt">
                                                {/* <a onClick={this.logout}>Sign Out</a> */}
                                                <a onClick={logout}>Sign Out</a>
                                            </li>
                                        </ul>
                                   </li>
                               </ul>
                           </div>
                        <RiArrowDownSFill className="downarrow"/>
                      
                                     
                                            
                                     
                      
                    </nav>

            </header>


        )
    }
}

export default Nav
