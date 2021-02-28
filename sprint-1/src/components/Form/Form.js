import React, { Component } from 'react';
import './Form.scss';
import Pic from '../../assets/images/Mohan-muruge.jpg';

class Form extends Component {
    state = {
    comment:''
    }

//    handleSubmit = (e)=>{
//    e.preventDefault();
//    let commentObj = {
//        comment: this.state.comment,
//        id:11,
//        name :"PreetiGill"
//    }
//    addcomment(commentObj)

//    }

    UpdatedFormState = (e)=>{
    e.preventDefault();
    this.setState({ comment : e.target.value})
    }

    render() {
        return (
            <form className = "Highlights__form" action="">
                <img className = "Highlights__form-img" src= {Pic} alt=""/>     
                <div className  = "Highlights__text-btn-box">
                    <div className = "Highlights__input-section">
                        <div className ="Highlights__label-text-box" >
                            <p className ="Highlights__form-heading" >JOIN THE CONVERSATION</p>

                            <textarea 
                            className = "Highlights__form-input" 
                            type="text" 
                            name = "comment" 
                            placeholder= "write comment here" 
                            id="" cols="30" rows="5"
                            onChange = {this.UpdatedFormState}
                            >
                         
                            </textarea>
                        </div>
                        <button className = "Highlights__form-button" type = "submit" >COMMENT</button>
                    </div>      
                </div>
            </form>     
        );
    }
}

export default Form;