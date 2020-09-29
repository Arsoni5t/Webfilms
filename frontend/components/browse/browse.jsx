import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './browse_footer'

class Browse extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let {logout} = this.props
        return <div className="browsebg">
{/* //             <h2> Welcome {currentUser.email}!</h2> */}

         <div>
             <div>
                 {/* <button className="browselogout" onClick={logout}>Sign out of Webfilms</button> */}
             </div>
                <div>
                     <img className="browsebanner" src={window.browsebanner}/>  
                </div>
               
         </div>

           
            <Footer />
         </div>
            
                 
              
                 
        

    }
}

export default Browse


