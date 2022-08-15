import PropTypes from 'prop-types';
import CrCard from './CrCard';

const CrList = ({ pets, onChange, onDelete }) => {

  const handleSubmit = (info, id) => {
    onChange(info, id);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };
  
  return (
    pets.map((pet, i) => <CrCard  onDelete={handleDelete} onChange={handleSubmit} key={i} pet={pet}></CrCard>)
  );
};

CrList.propTypes = {
  pets: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CrList;
