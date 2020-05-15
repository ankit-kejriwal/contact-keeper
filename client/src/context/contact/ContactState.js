import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {ADD_CONTACT, DELETE_CONTACT, SET_CURRENT,CLEAR_CURRENT,UPDATE_CONTACT,FILTER_CONTACT,CLEAR_FILTER} from '../types';

const ContactState = props => {
    const initialState = {
        contacts : [
            {
                id: 1,
                type :  'personal',
                name :  'kejriwal',
                email :  'kejri@gmail.com',
                phone :  '123456123'
            },
            {
                id: 2,
                type :  'professional',
                name :  'ankit',
                email :  'ankit@gmail.com',
                phone :  '987654321'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // ADD contact

    // Delete contact

    // Set current contact

    // clear current contact

    // update contact

    // filter contacts

    // clear filter 

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;