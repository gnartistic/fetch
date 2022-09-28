import './index.scss';
import './index.scss';
import { Select, TextField, Button, MenuItem, FormControl } from '@material-ui/core';

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

const petAge = [ '<1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20' ];

const petGender = [ 'Male', 'Female' ];

const personalityTraits = ['Confident', 'Outgoing', 'Adaptable', 'Shy', 'Independent', 'Aggressive', 'Lone Wolf', 'Timid','Laid-back', 'Playful', 'Goofy', 'Active', 'Socialable']


const PetDetails = ( { prevStep, nextStep, handleChange, values } ) =>
{

  const Continue = e =>
  {
    e.preventDefault();
    nextStep();
  }

  const Previous = e =>
  {
    e.preventDefault();
    prevStep();
  }

  return (
    <>
      <div className='signup-page container' style={bg}>
        <div className='form-zone'>
          <FormControl className='signup-form'>
            <div>
              <h1>Pet Information</h1>
              <ul>
                <li className='half'>
                  <TextField
                    label='Name'
                    onChange={handleChange( 'petName' )}
                    defaultValue={values.petName}
                    variant="outlined"
                    size='small'
                    fullWidth
                    required
                  />
                </li>

                <li className='half'>
                  <label className='age'>Age</label>
                  <Select
                    onChange={handleChange( 'petAge' )}
                    defaultValue={values.petAge}
                    variant="outlined"
                    required
                    style={font}
                    MenuProps={MenuProps}>
                    {petAge.map( ( petAge ) => (
                      <MenuItem
                        key={petAge}
                        value={petAge}
                        style={font}
                      >
                        {petAge}
                      </MenuItem>
                    ) )}
                  </Select>
                </li>

                <li className='half'>
                  <label>Gender</label>
                  <Select
                    onChange={handleChange( 'petGender' )}
                    defaultValue={values.petGender}
                    variant="outlined"
                    required
                    style={font}
                    MenuProps={MenuProps}>
                    {petGender.map( ( petGender ) => (
                      <MenuItem
                        key={petGender}
                        value={petGender}
                        style={font}
                      >
                        {petGender}
                      </MenuItem>
                    ) )}
                  </Select>
                </li>

                <li>
                  <TextField
                    label='Breed'
                    onChange={handleChange( 'petBreed' )}
                    defaultValue={values.petBreed}
                    variant="outlined"
                    fullWidth
                    size='small'
                    required
                  />
                </li>

                <li>
                  <TextField
                    label='Favorite Activity'
                    onChange={handleChange( 'favActivity' )}
                    defaultValue={values.favActivity}
                    variant="outlined"
                    fullWidth
                    size='small'
                    required
                  />
                </li>

                <li className='half'>
                  <label>Personality</label>
                  <Select
                    onChange={handleChange( 'personalityTraits' )}
                    defaultValue={values.personalityTraits}
                    variant="outlined"
                    required
                    style={font}
                    MenuProps={MenuProps}>
                    {personalityTraits.map( ( personalityTraits ) => (
                      <MenuItem
                        key={personalityTraits}
                        value={personalityTraits}
                        style={font}
                      >
                        {personalityTraits}
                      </MenuItem>
                    ) )}
                  </Select>
                </li>
              </ul>
              <div className='prevButton'>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
                </Button>
              </div>
              <div className='nextButton'>
                <Button onClick={Continue}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Done
                </Button>
                </div>
            </div>
          </FormControl>
        </div>
      </div>
    </>
  )
}

export default PetDetails