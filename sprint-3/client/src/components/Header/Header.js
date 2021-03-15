import React , {Component}from 'react';
import './Header.scss';
import BrandLogo from '../../assets/images/Logo-brainflix.svg';
import Pic from '../../assets/images/Mohan-muruge.jpg';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header> 
                <nav className = 'nav'>
                    <Link to = '/' ><img className = 'nav__logo' src = {BrandLogo} alt=""/></Link>
                    <div className = 'nav__rt-side' >
                        <form className = 'nav__form' action="">
                            <input className = 'nav__form-input' type="text" name = "search" id = "search" placeholder = "Search"/>
                            <div className = "nav__upload"> 
                            <Link to = '/videoUpload' onClick = {this.handleClick} className = "nav__upload-btn"><AddIcon className  = "nav__btn-svg" />UPLOAD</Link>
                                <img className = "nav__upload-pic"  src= {Pic}  alt=""/>
                            </div> 
                        </form>
                    </div> 
                 </nav>
                   
           </header>
        );
    }
}
;

export default Header;

