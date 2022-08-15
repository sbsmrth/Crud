import '../assets/styles/cr-card.css';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CrModal from './CrModal';

const CrCard = ({ pet, onChange, onDelete }) => {

  const handleSubmit = (info) => {
    onChange(info, pet._id);
  };

  const handleDelete = () => {
    onDelete(pet._id);
  };

  return (
    <Card className='card'>
      <Card.Header className='card__header'>
        <div>
        { pet.name.toUpperCase() }
        </div>
        <div>
          <CrModal onChange={handleSubmit}></CrModal>
        </div>
      </Card.Header>
      <Card.Body className='card__body'>
        <Card.Text>
          { pet.age !=1 ? `${pet.age} years` : `${pet.age} year` } 
        </Card.Text>
        <Card.Text>
          Species { pet.species }
        </Card.Text>
        <button className='card__delete' onClick={handleDelete}>
          Delete
        </button>
      </Card.Body>
    </Card>
  );
};

CrCard.propTypes = {
  pet: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CrCard;
