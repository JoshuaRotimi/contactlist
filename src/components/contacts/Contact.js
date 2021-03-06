import React, { Component } from "react";
import {Consumer} from "../../context";
import axios from 'axios';
import {Link} from "react-router-dom";


class Contact extends Component {
    state = {
        showContactInfo: false
        
    };

    onShowClick = () => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    };
    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users${id}`);
            dispatch({type: 'DELETE_CONTACT', payload: id});
        }catch (e) {
            dispatch({type: 'DELETE_CONTACT', payload: id});
        }


    };


    render() {
        const {id, name, email, phone} = this.props.contact;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                 return (
                     <div className='card card-body mb-3'>
                         <h4>{name}{' '}
                             <i onClick={this.onShowClick} className='fas fa-sort-down'/>
                             <i className='fas fa-times'
                                style={{cursor: 'pointer', float: 'right'}}
                                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                             />
                             <Link to={`contact/edit/${id}`}>
                                 <i
                                     className='fas fa-pencil-alt'
                                     style={{
                                         cursor: 'pointer',
                                         float: 'right',
                                         color: 'black',
                                         marginRight: '1rem'
                                     }}
                                 />
                             </Link>
                         </h4>
                         {this.state.showContactInfo ? (
                             <ul className='list-group'>
                                 <li className='list-group-item'>Email: {email}</li>
                                 <li className='list-group-item'>Phone number: {phone}</li>
                             </ul>) : null }
                     </div>
                 )
                }}

            </Consumer>





        );
    }
}

export default Contact
