import axios from 'axios';
import { useEffect, useState } from 'react';
import AddHoraire from '../components/AddHoraire';

export default function Home() {
  const [horaires, setHoraires] = useState([]);

  const fetchHoraires = () => {
    axios.get('http://127.0.0.1:8000/api/horaire')
      .then(response => {
        setHoraires(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des horaires :", error);
      });
  };

  useEffect(() => {
    fetchHoraires();
  }, []);

  return (
    <div>
      <h1>Horaires</h1>
      <AddHoraire onHoraireAdded={fetchHoraires} />
      <ul>
        {horaires.map(horaire => (
          <li key={horaire.id}>
            {horaire.jour} : {horaire.horaire_ouverture} - {horaire.horaire_fermeture}
          </li>
        ))}
      </ul>
    </div>
  );
}
