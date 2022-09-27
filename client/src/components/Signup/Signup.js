import React, { useState } from 'react'
import UserDetails from './UserDetails'
import PetDetails from './PetDetails'
import './index.scss';
import Loader from 'react-loaders';
import { Button, FormControl } from '@material-ui/core';

// background, css enclosed in javascript
const bg = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}

// class component 
const Signup = () =>
{
    // page's state
    const [ page, setPage ] = useState( 0 );

    // default formdata state
    const [ formData, setFormData ] = useState( {
        email: '',
        username: '',
        password: '',
        firstName: '',
        age: '',
        gender: '',
        showMe: '',
        city: '',
        state: '',
        occupation: '',
        petName: '',
        petAge: '',
        petGender: '',
        petBreed: '',
        favActivity: '',
        personalityTraits: ''
    } );

    // page titles
    const formTitles = [ "User Information", "Pet Information" ];

    //page rendering conditional statement
    const pageDisplay = () =>
    {
        if( page === 0 ) {
            return <UserDetails formData={formData} setFormData={setFormData} />;
        } else {
            return <PetDetails formData={formData} setFormData={setFormData} />;
        }
    };

    // rendered page
    return (
        <>
            <div className='signup-page container' style={bg}>
                <div className='form-zone'>
                    <FormControl className='signup-form'>
                        <h1>{formTitles[ page ]}</h1>
                        <div>{pageDisplay()}</div>
                        <div className='prevButton'>
                            <Button
                                onClick={() =>
                                {
                                    setPage( ( currPage ) => currPage - 1 );
                                }}
                            >
                                Prev
                            </Button>
                        </div>
                        <div className='nextButton'>
                            <Button
                                onClick={() =>
                                {
                                    if( page === formTitles.length - 1 ) {
                                        console.log( formData );
                                    } else {
                                        setPage( ( currPage ) => currPage + 1 );
                                    }
                                }}
                            >
                                {page === formTitles.length - 1 ? "Submit" : "Next"}
                            </Button>
                        </div>
                    </FormControl>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}
export default Signup
