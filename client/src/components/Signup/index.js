import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import UserDetails from './UserDetails'
import PetDetails from './PetDetails'
import './index.scss';
import Loader from 'react-loaders';
import { Button, FormControl } from '@material-ui/core';

// background, css enclosed in javascript
const bg = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #637dec 0%,#7068ce 20%, #7e55af 100%)'
}

// functional component 
const Signup = () =>
{
    //navigate to login
    const navigate = useNavigate();

    const navigateToLogin = () =>
    {
        navigate( '/login' );
    }

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
        return page === 0 ? <UserDetails formData={formData} setFormData={setFormData} /> : <PetDetails formData={formData} setFormData={setFormData} />;
    };

    // rendered page
    return (
        <>
            <div className='signup-page container' style={bg}>
                <div className='form-zone'>
                    <FormControl className='signup-form'>
                        {/* I'm using the page's current state as the title's index in array */}
                        <h1>{formTitles[ page ]}</h1>
                        {/* page's conditional statement */}
                        <div>{pageDisplay()}</div>
                        <div className='prevButton'>
                            <Button
                                onClick={() =>
                                {
                                    if( page == 0 ) {
                                        return navigateToLogin();
                                    }
                                        // go back one page
                                        setPage( ( currPage ) => currPage - 1 )
                                }
                                }
                            >
                                {page === formTitles.length - 1 ? "back" : "Back to login"}
                            </Button>
                        </div>
                        <div className='nextButton'>
                            <Button
                                onClick={() =>
                                { 
                                    // using the page's state as comparison with the title's index in array again
                                    // index starts at 0, so if the page = 2, then the index needs to be 1 to match, that's why formTitles.length -1
                                    if( page === formTitles.length - 1 ) {
                                        console.log( formData );
                                        return navigateToLogin();
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
