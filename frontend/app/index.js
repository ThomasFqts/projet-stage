import { useState, useEffect } from 'react';
import AddCentreForm from '../components/AddCentreForm';
import { fetchCentres } from '../utils/api';

export default function Home() {
  const [centres, setCentres] = useState([]);

  const loadCentres = () => {
    fetchCentres().then(setCentres).catch(console.error);
  };

  useEffect(() => {
    loadCentres();
  }, []);

  return (
    <div>
      <h1 className='text-center'>Bienvenue sur le formulaire d'ajout de centres de dialyse.</h1>
      <AddCentreForm onCentreAdded={loadCentres} />
    </div>
  );
}
