import './index.scss';
import Loader from 'react-loaders';
import './index.scss';
import { Select, TextField, Button, MenuItem } from '@material-ui/core';

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
            maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
            width: 180,
            typography: 'Medium'
        },
    },
};

const font = {
    fontFamily: 'Medium'
}

const age = [ '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65' ];

const gender = [ 'Man', 'Woman', 'Trans Man', 'Trans Woman', 'Non-binary/non-conforming', 'Prefer not to specify' ];

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
            <div className='container signup-page' style={bg}>
                <div className='form-zone'>
                    <form className='signup-form'>
                        <div>
                            <h1>Create Account</h1>
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
                                    />
                                </li>
                                <li className='half'>
                                    <TextField
                                        label='Username'
                                        onChange={handleChange( 'username' )}
                                        defaultValue={values.username}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </li>

                                <li className='half'>
                                    <TextField
                                        label='Password'
                                        onChange={handleChange( 'password' )}
                                        defaultValue={values.password}
                                        variant="outlined"
                                        autoComplete="password"
                                        fullWidth
                                        type="password"
                                        required
                                    />
                                </li>

                                <li className='half'>
                                    <TextField
                                        label='First name'
                                        onChange={handleChange( 'firstName' )}
                                        defaultValue={values.firstName}
                                        variant="outlined"
                                        fullWidth
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
                                </li>

                                <li className='half'>
                                    <label>Gender</label>
                                    <Select
                                        onChange={handleChange( 'gender' )}
                                        defaultValue={values.gender}
                                        variant="outlined"
                                        required
                                        MenuProps={MenuProps}>
                                        {gender.map( ( gender ) => (
                                            <MenuItem
                                                key={gender}
                                                value={gender}
                                                style={font}
                                                label='Gender'
                                            >
                                                {gender}
                                            </MenuItem>
                                        ) )}
                                    </Select>
                                </li>

                                <li>
                                    <TextField
                                        label='city'
                                        onChange={handleChange( 'city' )}
                                        defaultValue={values.city}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </li>

                                <Button onClick={Continue}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Next
                                </Button>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default UserDetails