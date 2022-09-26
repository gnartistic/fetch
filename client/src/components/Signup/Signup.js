import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import Success from './Success'

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
        occupation: '',
        interests: '',
        petName: '',
        petAge: '',
        petGender: '',
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

        const { email, username, password, firstName, age, gender, showMe, city, occupation, interests, petName, petAge, petGender, favActivity, personalityTraits } = this.state;

        const values = { email, username, password, firstName, age, gender, showMe, city, occupation, interests, petName, petAge, petGender, favActivity, personalityTraits }

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
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 6:
                return (
                    <Success />
                )
            default:
            // do nothing
        }
    }
}
