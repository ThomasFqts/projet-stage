import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchFormData } from '../utils/api';

// Composant principal pour ajouter un centre
export default function AddCentreForm({ }) {
    require('dotenv').config()
    
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // État pour les données du formulaire
    const [formData, setFormData] = useState({
        numero_finess: '',
        nom: '',
        site_web: '',
        numero_telephone: '',
        adresse_mail: '',
        coordonnee_geographique: '',
        adresse: '', // Adresse complète
        code_postal: '',
        ville: '', // Ville si nouvelle adresse
        modalites: [],
        horaires: [],
    });

    // État pour les options du formulaire (adresses, modalités, horaires)
    const [formOptions, setFormOptions] = useState({
        adresses: [],
        modalites: [],
        horaires: []
    });

    // État pour gérer l'ajout d'une nouvelle adresse
    const [nouvelleAdresse, setNouvelleAdresse] = useState(false);

    // État pour gérer l'ajout d'un nouvel horaire
    const [nouvelHoraire, setNouvelHoraire] = useState(false);

    // État pour les données du nouvel horaire
    const [newHoraire, setNewHoraire] = useState({ jour: '', horaire_ouverture: '', horaire_fermeture: '' });

    // Charge les options du formulaire au montage du composant
    useEffect(() => {
        fetchFormData().then(setFormOptions).catch(console.error);
    }, []);

    // Gére les changements dans les champs du formulaire
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Gére les changements dans les sélections multiples
    const handleSelectChange = (e) => {
        const { name, options } = e.target;
        const values = Array.from(options).filter(opt => opt.selected).map(opt => opt.value);
        setFormData({ ...formData, [name]: values });
    };

    // Gére les changements dans les champs du nouvel horaire
    const handleNewHoraireChange = (e) => {
        setNewHoraire({ ...newHoraire, [e.target.name]: e.target.value });
    };

    // Ajoute un nouvel horaire
    const addNewHoraire = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/horaires`, newHoraire);
            setFormOptions(prev => ({
                ...prev,
                horaires: [...prev.horaires, res.data]
            }));
            setFormData(prev => ({
                ...prev,
                horaires: [...prev.horaires, res.data.id_horaire]
            }));
            setNouvelHoraire(false);
            setNewHoraire({ jour: '', horaire_ouverture: '', horaire_fermeture: '' });
        } catch (error) {
            console.error(error);
            alert('Erreur lors de l’ajout du nouvel horaire.');
        }
    };

    // Soumition du formulaire pour ajouter un centre
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/centres`, formData);
            alert('Centre ajouté avec succès !');
            setFormData({
                numero_finess: '',
                nom: '',
                site_web: '',
                numero_telephone: '',
                adresse_mail: '',
                coordonnee_geographique: '',
                adresse: '',
                code_postal: '',
                ville: '',
                modalites: [],
                horaires: [],
            });
        } catch (error) {
            console.error('Erreur lors de l’ajout du centre:', error);
            alert('Erreur : Vérifie que tous les champs sont valides.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit} className="card p-4 bg-secondary">
                        <h2 className="mb-4 text-center text-white">Ajouter un Centre</h2>

                        {/* Numéro finess */}
                        <div className="form-control bg-secondary">
                            <label className="form-label text-white">Numéro FINESS :</label>
                            <input type="number" className="form-control bg-secondary text-white" name="numero_finess" placeholder="Numéro FINESS" value={formData.numero_finess} onChange={handleChange} required />
                        </div>

                        {/* Nom */}
                        <div className="form-control bg-secondary">
                            <label className="form-label text-white">Nom du Centre :</label>
                            <input type="text" className="form-control bg-secondary text-white" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
                        </div>

                        {/* Site Web */}
                        <div className="form-control bg-secondary">
                            <label className="form-label text-white">Site Web :</label>
                            <input type="url" className="form-control bg-secondary text-white" name="site_web" placeholder="Site Web" value={formData.site_web} onChange={handleChange} />
                        </div>

                        {/* Téléphone */}
                        <div className="form-control bg-secondary">
                            <label className="form-label text-white">Téléphone :</label>
                            <input type="text" className="form-control bg-secondary text-white" name="numero_telephone" placeholder="Téléphone" value={formData.numero_telephone} onChange={handleChange} required />
                        </div>

                        {/* Email */}
                        <div className="form-control bg-secondary">
                            <label className="form-label text-white">Email :</label>
                            <input type="email" className="form-control bg-secondary text-white" name="adresse_mail" placeholder="Email" value={formData.adresse_mail} onChange={handleChange} required />
                        </div>

                        {/* Coordonnées GPS */}
                        <div className="form-control bg-secondary">
                            <label className="form-label text-white">Coordonnées GPS :</label>
                            <input type="text" className="form-control bg-secondary text-white" name="coordonnee_geographique" placeholder="Coordonnées GPS" value={formData.coordonnee_geographique} onChange={handleChange} />
                        </div>

                        {/* Adresse */}
                        <div className="form-control bg-secondary">
                            <label className="form-label text-white">Adresse Complète :</label>
                            <input type="text" className="form-control bg-secondary text-white" name="adresse" placeholder="Rue, bâtiment..." value={formData.adresse} onChange={handleChange} required />
                        </div>

                        {/* Ville & Code Postal */}
                        <div className="form-control bg-secondary">
                            <label className="form-label text-white">Ville & Code Postal :</label>
                            <select className="form-select bg-secondary text-white" name="code_postal" onChange={handleChange} disabled={nouvelleAdresse}>
                                <option value="">Sélectionner une ville</option>
                                {formOptions.adresses.map((adresse) => (
                                    <option key={adresse.code_postal} value={adresse.code_postal}>
                                        {adresse.ville} ({adresse.code_postal})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Checkbox pour l'ajout d'une nouvelle ville et code postal */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" onChange={() => setNouvelleAdresse(!nouvelleAdresse)} />
                            <label className="form-check-label text-white">Ajouter une nouvelle ville</label>
                        </div>

                        {/* Nouvelle Ville & Code Postal */}
                        {nouvelleAdresse && (
                            <>
                                <div className="mb-3">
                                    <input type="text" className="form-control bg-secondary text-white" name="ville" placeholder="Nouvelle Ville" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control bg-secondary text-white" name="code_postal" placeholder="Code Postal" onChange={handleChange} required />
                                </div>
                            </>
                        )}

                        {/* Modalités */}
                        <div className="mb-3">
                            <label className="form-label text-white">Modalités :</label>
                            <select className="form-select bg-secondary text-white" name="modalites" multiple onChange={handleSelectChange}>
                                {formOptions.modalites.map((modalite) => (
                                    <option key={modalite.id_modalite} value={modalite.id_modalite}>
                                        {modalite.nom_modalite}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Liste Horaires */}
                        <div className="mb-3">
                            <label className="form-label text-white">Horaires :</label>
                            <select className="form-select bg-secondary text-white" name="horaires" multiple onChange={handleSelectChange}>
                                {formOptions.horaires.map((horaire) => (
                                    <option key={horaire.id_horaire} value={horaire.id_horaire}>
                                        {horaire.jour} ({horaire.horaire_ouverture} - {horaire.horaire_fermeture})
                                    </option>
                                ))}
                            </select>

                            {/* Checkbox pour l'ajout d'un nouvel horaire */}
                            <label className="form-check-label text-white">Ajouter un nouvel horaire :</label>
                            <input type="checkbox" onChange={() => setNouvelHoraire(!nouvelHoraire)} />

                            {/* Formulaire pour ajouter un nouvel horaire */}
                            {nouvelHoraire && (
                                <div className='mb-3'>
                                    <input className='form-control bg-secondary text-white' type="text" name="jour" placeholder="Jour" onChange={handleNewHoraireChange} />
                                    <input className='form-control bg-secondary text-white' type="time" name="horaire_ouverture" onChange={handleNewHoraireChange} />
                                    <input className='form-control bg-secondary text-white' type="time" name="horaire_fermeture" onChange={handleNewHoraireChange} />
                                    <button className='btn btn-success' onClick={addNewHoraire}>Ajouter Horaire</button>
                                </div>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
