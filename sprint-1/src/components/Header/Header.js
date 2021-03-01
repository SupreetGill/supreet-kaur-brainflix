import React , {Component}from 'react';
import './Header.scss';
import BrandLogo from '../../assets/images/Logo-brainflix.svg';
import Pic from '../../assets/images/Mohan-muruge.jpg';
import AddIcon from '@material-ui/icons/Add';


class Header extends Component {
    render() {
        return (
            <header className = 'Header'> 
                <img className = 'Header__logo' src = {BrandLogo} alt=""/>
                <div className = 'Header__rt-side' >
                    <form className = 'Header__form' action="">
                        <input className = 'Header__form-input' type="text" name = "search" id = "search" placeholder = "Search"/>
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

