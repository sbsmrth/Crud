import '../assets/styles/home-view.css';
import PropTypes from 'prop-types';
import CrForm from './CrForm';

const HomeView = ({ onChange }) => {

  const submitEvent = (info) => {
    onChange(info, 'post');
  };

  return (
    <div className='home'>
      <CrForm classColor='form__txt--light' onChange={submitEvent}></CrForm>
    </div>
  );
};

HomeView.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default HomeView;
