import './index.scss';
import Loader from 'react-loaders';
import './index.scss';
import { Link } from "react-router-dom";
import { Select, TextField, Button, MenuItem, FormControl, FormHelperText } from '@material-ui/core';

const bg = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 1.5 + ITEM_PADDING_TOP,
            width: 100,
            typography: 'Medium'
        },
    },
};

const font = {
    fontFamily: 'Medium',
    height: '3rem',
    width: '10rem',
}

const age = [ '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65' ];

const gender = [ 'Man', 'Woman', 'Trans Man', 'Trans Woman', 'Non-binary', 'Other' ];

const showMe = [ 'Men', 'Women', 'Everyone' ];

const UserDetails = ( { nextStep, handleChange, values } ) =>
{

    // for continue event listener
    const Continue = e =>
    {
        e.preventDefault();
        nextStep();
    }

    return (
        <>
            <div className='signup-page container' style={bg}>
                <div className='form-zone'>
                    <FormControl className='signup-form'>
                        <div>
                            <h1>User Information</h1>
                            <ul>

                                <li className='half'>
                                    <TextField
                                        label='Email Address'
                                        onChange={handleChange( 'email' )}
                                        defaultValue={values.email}
                                        variant="outlined"
                                        autoComplete='email'
                                        fullWidth
                                        required
                                        size='small'
                                    />
                                    <FormHelperText>Please enter a valid email.</FormHelperText>
                                </li>
                                <li className='half'>
                                    <TextField
                                        label='Username'
                                        onChange={handleChange( 'username' )}
                                        defaultValue={values.username}
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                        required
                                    />
                                    <FormHelperText>Must be between 6-14 characters.</FormHelperText>
                                </li>

                                <li className='half'>
                                    <TextField
                                        label='Password'
                                        onChange={handleChange( 'password' )}
                                        defaultValue={values.password}
                                        variant="outlined"
                                        autoComplete="password"
                                        fullWidth
                                        size='small'
                                        type="password"
                                        required
                                    />
                                    <FormHelperText>Must be a minimum of 8 characters.</FormHelperText>
                                </li>

                                <li className='half'>
                                    <TextField
                                        label='First name'
                                        onChange={handleChange( 'firstName' )}
                                        defaultValue={values.firstName}
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                        required
                                    />
                                </li>

                                <li className='half'>
                                    <label className='age'>Age</label>
                                    <Select
                                        onChange={handleChange( 'age' )}
                                        defaultValue={values.age}
                                        variant="outlined"
                                        required
                                        style={font}
                                        MenuProps={MenuProps}>
                                        {age.map( ( age ) => (
                                            <MenuItem
                                                key={age}
                                                value={age}
                                                style={font}
                                            >
                                                {age}
                                            </MenuItem>
                                        ) )}
                                    </Select>
                                    <FormHelperText>Must be 18 years or older to join.</FormHelperText>
                                </li>

                                <li className='half'>
                                    <label>Gender</label>
                                    <Select
                                        onChange={handleChange( 'gender' )}
                                        defaultValue={values.gender}
                                        variant="outlined"
                                        required
                                        style={font}
                                        MenuProps={MenuProps}>
                                        {gender.map( ( gender ) => (
                                            <MenuItem
                                                key={gender}
                                                value={gender}
                                                style={font}
                                            >
                                                {gender}
                                            </MenuItem>
                                        ) )}
                                    </Select>
                                    <FormHelperText>Choose the option that fits you best.</FormHelperText>
                                </li>

                                <li>
                                    <TextField
                                        label='city'
                                        onChange={handleChange( 'city' )}
                                        defaultValue={values.city}
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                        required
                                    />
                                </li>

                                <li>
                                    <TextField
                                        label='state'
                                        onChange={handleChange( 'state' )}
                                        defaultValue={values.state}
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <TextField
                                        label='occupation'
                                        onChange={handleChange( 'occupation' )}
                                        defaultValue={values.occupation}
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                        required
                                    />
                                </li>

                                <li className='half'>
                                    <label>Show me</label>
                                    <Select
                                        onChange={handleChange( 'showMe' )}
                                        defaultValue={values.showMe}
                                        variant="outlined"
                                        required
                                        style={font}
                                        MenuProps={MenuProps}>
                                        {showMe.map( ( showMe ) => (
                                            <MenuItem
                                                key={showMe}
                                                value={showMe}
                                                style={font}
                                            >
                                                {showMe}
                                            </MenuItem>
                                        ) )}
                                    </Select>
                                    <FormHelperText>Only you can see this.</FormHelperText>
                                </li>
                            </ul>
                            <div className='nextButton'>
                                <Button onClick={Continue}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Next
                                </Button>
                            </div>
                            <div className='prevButton'>
                                <Button 
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                <Link to='/Login'>Back to Login</Link>
                                </Button>
                            </div>
                        </div>
                    </FormControl>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default UserDetails