import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid'
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
        ],
        current : null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // ADD contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({type:ADD_CONTACT, payload:contact});
    }

    // Delete contact

    const deleteContact = id => {
        dispatch({type:DELETE_CONTACT, payload:id});
    }

    // Set current contact

    const setCurrent = contact => {
        dispatch({type:SET_CURRENT, payload:contact});
    }

    // clear current contact

    const clearCurrent = () => {
        dispatch({type:CLEAR_CURRENT});
    }

    // update contact
    const updateContact = contact => {
        dispatch({type:UPDATE_CONTACT, payload:contact});
    }
    // filter contacts
    const filterContacts = text => {
        dispatch({type:FILTER_CONTACT, payload:text});
    }
    // clear filter 

    const clearFilter = () => {
        dispatch({type:CLEAR_FILTER});
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;