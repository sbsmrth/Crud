import '../assets/styles/cr-form.css';
import { useState } from 'react';
import PropTypes from 'prop-types';


const CrForm = ({ classColor, onChange }) => {

  const initValues = { age: '', name: '', species: ''};

  const [info, setInfo] = useState(initValues);

  const manageData = (event) => {
    setInfo({
      ...info,
      [event.target.name] : event.target.value,
    });
  };

  const manageSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    onChange(info);
  };
  
  return (
    <form className='form' onSubmit={manageSubmit}>
      <label htmlFor='name' className='form__label'>
        <b className={classColor}>Enter your pet's name</b>
      </label>
      <input
        type='text'
        id='name'
        className='form__input'
        name='name'
        required
        autoComplete='off'
        onChange={manageData}
      />

      <label htmlFor='age' className='form__label'>
        <b className={classColor}>Enter your pet's age (years)</b>
      </label>
      <input
        type='text'
        maxLength={2}
        id='age'
        className='form__input'
        name='age'
        required
        autoComplete='off'
        onChange={manageData}
      />

      <label htmlFor='species' className='form__label'>
        <b className={classColor}>Enter your pet's species</b>
      </label>
      <input
        type='text'
        id='species'
        className='form__input'
        required
        name='species'
        autoComplete='off'
        onChange={manageData}
      />

      <input type='submit' className='form__submit' value='Submit'></input>
    </form>
  );
};

CrForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  classColor: PropTypes.string.isRequired,
};

export default CrForm;
