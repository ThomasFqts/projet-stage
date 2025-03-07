import { useState } from 'react';
import axios from 'axios';

export default function AddHoraire({ onHoraireAdded }) {
    const [jour, setJour] = useState('');
    const [heureOuverture, setHeureOuverture] = useState('');
    const [heureFermeture, setHeureFermeture] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/horaire', {
                jour,
                horaire_ouverture: heureOuverture,
                horaire_fermeture: heureFermeture
            });
            alert('Horaire ajouté avec succès !');
            onHoraireAdded();  // Rafraîchir la liste après ajout
        } catch (err) {
            console.error("Erreur lors de l'ajout :", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Jour" value={jour} onChange={(e) => setJour(e.target.value)} />
            <input type="time" value={heureOuverture} onChange={(e) => setHeureOuverture(e.target.value)} />
            <input type="time" value={heureFermeture} onChange={(e) => setHeureFermeture(e.target.value)} />
            <button type="submit">Ajouter</button>
        </form>
    );
}
