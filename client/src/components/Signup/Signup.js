import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PetDetails from './PetDetails'
import Home from '../Home'

export default class Signup extends Component
{
    state = {
        step: 1,
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
    }

    // go back to previous step
    prevStep = () =>
    {
        const { step } = this.state;
        this.setState( { step: step - 1 } );
    }

    // proceed to the next step
    nextStep = () =>
    {
        const { step } = this.state;
        this.setState( { step: step + 1 } );
    }

    // Handle fields change
    handleChange = input => e =>
    {
        this.setState( { [ input ]: e.target.value } );
    }


    render ()
    {
        const { step } = this.state;

        const { email, username, password, firstName, age, gender, showMe, city, state, occupation, petName, petAge, petGender, petBreed, favActivity, personalityTraits } = this.state;

        const values = { email, username, password, firstName, age, gender, showMe, city, state, occupation, petName, petAge, petGender, petBreed, favActivity, personalityTraits }

        switch( step ) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <PetDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Home />
                )
            default:
            // do nothing
        }
    }
}
