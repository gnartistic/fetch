import './index.scss';
import { Select, TextField, MenuItem } from '@material-ui/core';

// CSS for the inner drop down menus
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      width: 100,
      // custom imported font from app.scss
      typography: 'Medium'
    },
  }
  };

// style prop for font styling on input fields, and the height and width of the outter drop down menus
const font = {
  fontFamily: 'Medium',
  height: '3rem',
  width: '10rem',
}

// array for petAge dropdown menu
const petAge = ['<1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

// array for petGender dropdown menu
const petGender = ['Male', 'Female'];

// array for traits dropdown menu
const personalityTraits = [ 'Confident', 'Outgoing', 'Adaptable', 'Shy', 'Independent', 'Aggressive', 'Lone Wolf', 'Timid', 'Laid-back', 'Playful', 'Goofy', 'Active', 'Socialable' ]


// pet details component, passing state
const PetDetails = ({ formData, setFormData }) => {

  return (
    <ul>
      {/* name input field */}
      <li className='half'>
        <TextField
          label='Name'
          type="text"
          value={formData.petName}
          onChange={(e) => {
            setFormData({ ...formData, petName: e.target.value });
          }}
          variant="outlined"
          size='small'
          fullWidth
          required
        />
      </li>
      {/* Age input field */}
      <li className='half'>
        <label className='age'>Age</label>
        <Select
          value={formData.petAge}
          onChange={(e) => {
            setFormData({ ...formData, petAge: e.target.value });
          }}
          variant="outlined"
          required
          style={font}
          MenuProps={MenuProps}>
          {petAge.map((petAge) => (
            <MenuItem
              key={petAge}
              value={petAge}
              style={font}
            >
              {petAge}
            </MenuItem>
          ))}
        </Select>
      </li>
      {/* Gender input field */}
      <li className='half'>
        <label>Gender</label>
        <Select
          value={formData.petGender}
          onChange={(e) => {
            setFormData({ ...formData, petGender: e.target.value });
          }}
          variant="outlined"
          required
          style={font}
          MenuProps={MenuProps}>
          {petGender.map((petGender) => (
            <MenuItem
              key={petGender}
              value={petGender}
              style={font}
            >
              {petGender}
            </MenuItem>
          ))}
        </Select>
      </li>
      {/* Breed input field */}
      <li>
        <TextField
          label='Breed'
          value={formData.petBreed}
          onChange={(e) => {
            setFormData({ ...formData, petBreed: e.target.value });
          }}
          variant="outlined"
          fullWidth
          size='small'
          required
        />
      </li>
      {/* Favorite activity input field */}
      <li>
        <TextField
          label='Favorite Activity'
          value={formData.favActivity}
          onChange={(e) => {
            setFormData({ ...formData, favActivity: e.target.value });
          }}
          variant="outlined"
          fullWidth
          size='small'
          required
        />
      </li>
      {/* personality input field */}
      <li className='half'>
        <label>Personality</label>
        <Select
          value={formData.personalityTraits}
          onChange={(e) => {
            setFormData({ ...formData, personalityTraits: e.target.value });
          }}
          variant="outlined"
          required
          style={font}
          MenuProps={MenuProps}>
          {personalityTraits.map((personalityTraits) => (
            <MenuItem
              key={personalityTraits}
              value={personalityTraits}
              style={font}
            >
              {personalityTraits}
            </MenuItem>
          ))}
        </Select>
      </li>
    </ul>
  )
}

export default PetDetails