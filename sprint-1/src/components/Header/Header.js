import React , {Component}from 'react';
import './Header.scss';
import BrandLogo from '../../assets/images/Logo-brainflix.svg';
// import Search from '../../assets/images/Icon-search.svg';
import Pic from '../../assets/images/Mohan-muruge.jpg';
import AddIcon from '@material-ui/icons/Add';
// import  Likes from '../../assets/images/Icon-likes.svg';

//form element in Header

class Header extends Component {
    render() {
        return (
            <header className = 'Header'> 
                <img className = 'Header__logo' src = {BrandLogo} alt=""/>
                <div className = 'Header__rt-side' >

                    <form className = 'Header__form' action="">
                    
                        <input className = 'Header__form-input' type="text" name = "search" id = "search" placeholder = "Search"/>
                        {/* <img className = 'Form__search-icon' src = {Search} alt=""/> */}
                  {/* had my form closing here */}
                   
                    <div className = "Header__upload"> 
                        <button className = "Header__upload-btn"><AddIcon className  = "Header__btn-svg" />UPLOAD</button>
                        <img className = "Header__upload-pic"  src= {Pic}  alt=""/>
                    </div> 

                    </form>
                </div>    
           </header>
        );
    }
}


;

export default Header;

