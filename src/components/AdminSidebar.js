import React from 'react';
import '../asserts/commoncss/sidebar.css'
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faEnvelopeSquare, faBars , faTags , faBarcode , faClipboardCheck ,faGift} from '@fortawesome/free-solid-svg-icons'

class AdminSidebar extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            side_bar_toggle : false
        };
    }

   

  render(){
    const {  side_bar_toggle} = this.state;
    const { active } = this.props;
    return(
        <>
        <nav className="navbar navbar-dark bg-dark py-0 shadow-sm topnav fixed-top">
        <span className="navbar-brand mb-0 h6 text-light ml-2">Fashi Dashboard
        <FontAwesomeIcon
        onClick={ () => this.setState({side_bar_toggle : !this.state.side_bar_toggle}) }
        icon={faBars} className="ml-4 click show-icon"></FontAwesomeIcon>
        </span>
        </nav>

        <div className={`sidebar_wrap sidebar-top ${ side_bar_toggle ? 'sidebar_active' : ''}`}>
        <div className="sidebar-header pb-4 pt-2">
            <div className="d-flex px-4" >
            <img src="images/default/user2.jpg" className="rounded-circle sidebar-image my-auto"></img>
            <div className="my-auto">            
                <h6 style={{lineHeight : '12px' , fontWeight : 600}} className={`text-white mb-0 mt-1`}>Admin</h6>
                <span className="small text-light " >amoda29@gmail.com</span>
            </div>
            </div>
        </div>
        <ul className="sidebar">
        <li className="listitem" >
            <h6 className="categorylink px-2">
            <FontAwesomeIcon icon={faUser} className="mx-3 sidebar-icon"></FontAwesomeIcon>Users
            </h6>
        </li>  
        <Link to="/admin/category">
        <li className={`listitem ${ active == 'categories' && 'active_category' }`}  >
            <h6 className={`categorylink px-2 ${ active == 'categories' && 'active_category' }`}>
            <FontAwesomeIcon icon={faTags} className="mx-3 sidebar-icon"></FontAwesomeIcon>Categories
            </h6>
        </li>  
        </Link>
        <Link to="/admin/products">
        <li className={`listitem ${ active == 'products' && 'active_category' }`} >
            <h6 className={`categorylink px-2 ${ active == 'products' && 'active_category' }`}>
            <FontAwesomeIcon icon={faBarcode} className="mx-3 sidebar-icon"></FontAwesomeIcon>Products
            </h6>
        </li>  
        </Link>
        {/* <li className="listitem" >
            <span className="categorylink px-4">
            <FontAwesomeIcon icon={faEnvelopeSquare} className="mx-3 sidebar-icon"></FontAwesomeIcon>Add Products
            </span>
        </li>   */}
        <li className="listitem" >
            <h6 className="categorylink px-2">
            <FontAwesomeIcon icon={faClipboardCheck} className="mx-3 sidebar-icon"></FontAwesomeIcon>Orders
            </h6>
        </li>  
        <li className="listitem" >
            <h6 className="categorylink px-2">
            <FontAwesomeIcon icon={faGift} className="mx-3 sidebar-icon"></FontAwesomeIcon>Offers
            </h6>
        </li>  
        <li className="listitem" >
            <h6 className="categorylink px-2">
            <FontAwesomeIcon icon={faGift} className="mx-3 sidebar-icon"></FontAwesomeIcon>Comments
            </h6>
        </li>  
      </ul>
   </div>
   </>
    );
  }
}
export default AdminSidebar;