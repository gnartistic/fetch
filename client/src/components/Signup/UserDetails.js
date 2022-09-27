import './index.scss';
import './index.scss';
import { Select, TextField, MenuItem, FormHelperText } from '@material-ui/core';

// css style for inner dropdown menu
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

// css styles for input fields and outter dropdown menus
const font = {
    fontFamily: 'Medium',
    height: '3rem',
    width: '10rem',
}

//  array for age dropdown menu
const age = [ '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65' ];

//  array for gender choices in gender dropdown menu
const gender = [ 'Man', 'Woman', 'Trans Man', 'Trans Woman', 'Non-binary', 'Other' ];

// array for sexual preference dropdown menu
const showMe = [ 'Men', 'Women', 'Everyone' ];


//component
const UserDetails = ( { formData, setFormData } ) =>
{
    return (

        <ul>

            <li className='half'>
                <TextField
                    label='Email Address'
                    type="text"
                    value={formData.email}
                    onChange={( e ) =>
                    {
                        setFormData( { ...formData, email: e.target.value } );
                    }}
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
                    type="text"
                    value={formData.username}
                    onChange={( e ) =>
                    {
                        setFormData( { ...formData, username: e.target.value } );
                    }}
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
                    value={formData.password}
                    onChange={( event ) =>
                        setFormData( { ...formData, password: event.target.value } )
                    }
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
                    value={formData.firstName}
                    onChange={( event ) =>
                        setFormData( { ...formData, firstName: event.target.value } )
                    }
                    variant="outlined"
                    fullWidth
                    size='small'
                    required
                />
            </li>

            <li className='half'>
                <label className='age'>Age</label>
                <Select
                    value={formData.age}
                    onChange={( event ) =>
                        setFormData( { ...formData, age: event.target.value } )
                    }
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
                    value={formData.gender}
                    onChange={( event ) =>
                        setFormData( { ...formData, gender: event.target.value } )
                    }
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
                    value={formData.city}
                    onChange={( event ) =>
                        setFormData( { ...formData, city: event.target.value } )
                    }
                    variant="outlined"
                    fullWidth
                    size='small'
                    required
                />
            </li>

            <li>
                <TextField
                    label='state'
                    value={formData.state}
                    onChange={( event ) =>
                        setFormData( { ...formData, state: event.target.value } )
                    }
                    variant="outlined"
                    fullWidth
                    size='small'
                    required
                />
            </li>
            <li className='half'>
                <TextField
                    label='occupation'
                    value={formData.occupation}
                    onChange={( event ) =>
                        setFormData( { ...formData, occupation: event.target.value } )
                    }
                    variant="outlined"
                    fullWidth
                    size='small'
                    required
                />
            </li>

            <li className='half'>
                <label>Show me</label>
                <Select
                    value={formData.showMe}
                    onChange={( event ) =>
                        setFormData( { ...formData, showMe: event.target.value } )
                    }
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
    )
}

export default UserDetails