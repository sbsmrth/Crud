import { useEffect, useState } from 'react';
import HomeView from './HomeView';
import CrList from './CrList';
import  { url } from '../api/api';

const CrCrud = () => {

  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      const ans = await fetch(`${url}`);

      const data = await ans.json();

      localStorage.setItem('pets', JSON.stringify(data));

      setPets([...data]);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if(localStorage.getItem('pets')) {
      setPets(JSON.parse(localStorage.getItem('pets')));
    }
  }, []);

  const postPets = async (body) => {
    try {
      await fetch(`${url}`, {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      getPets();

    } catch (err) {
      console.error(err);
    }
  };

  const updatePets = async (info, id) => {
    try {
      await fetch(`${url}/${id}`, {
        method: 'PUT',  
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });
      
      getPets();

    } catch(err) {
      console.log(err);
    }
  };

  const deletePet = async (id) => {
    try {
      await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });

      getPets();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePost = (info) => {
    postPets(info);
  };

  const handlePut = (info, id) => {
    updatePets(info, id);
  };

  const handleDelete = (id) => {
    deletePet(id);
  };

  return (
    <>
      <main>
        <section>
          <HomeView onChange={handlePost}></HomeView>
        </section>
        <section>
          { pets.length != 0 && <CrList onChange={handlePut} onDelete={handleDelete} pets={pets}></CrList> }
        </section>
      </main>
    </>
  );
};

export default CrCrud;
