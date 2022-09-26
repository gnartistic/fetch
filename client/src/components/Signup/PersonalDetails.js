import './index.scss';

const bg = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #25f497 0%,#12c9c3 50%, #059bf3 100%)'
}

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
       <>
        <div className='container signup-page' style={bg}>
        <div className='form-zone'></div>
        
      </div>
      </>
  )
}

export default PersonalDetails