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

// functional component 
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
                                // eslint-disable-next-line eqeqeq
                                disabled={page == 0}
                                onClick={() =>
                                {
                                    // go back one page
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
                                    // using the page's state as comparison with the title's index in array again
                                    // index starts at 0, so if the page = 2, then the index needs to be 1 to match, that's why formTitles.length -1
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
