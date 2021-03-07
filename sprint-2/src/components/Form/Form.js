import React, { Component } from 'react';
import './Form.scss';
import Pic from '../../assets/images/Mohan-muruge.jpg';

class Form extends Component {
    state = {
    comment:''
    }
 
    UpdatedFormState = (e)=>{
        e.preventDefault();
        this.setState({ comment : e.target.value})
    }

    handleSubmit=(e)=>{
        const {selectedId,addComment}= this.props;
        e.preventDefault();
        const body = {
            name: "Preeti Gill",
            comment: e.target.comment.value
        }
        // if(!this.state.comment){
        //     return false;
        // }
        addComment(selectedId,body)
        //lets c
       this.setState({
           comment: ''
       })
    }

    render() {
        // add form validation

        return (
            <form  onSubmit = {this.handleSubmit}className = "Highlights__form" action="">
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
                            value ={this.state.comment}
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