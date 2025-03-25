"use client"

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { fetchFormData } from '../utils/api';
import logger from '@/utils/logger';
import { TimeInput } from '@mantine/dates';
import { TextInput, Button, Checkbox, MultiSelect, Select } from '@mantine/core';

// Définition des interfaces pour les données du formulaire
interface FormData {
    numero_finess: string;
    nom: string;
    site_web: string;
    numero_telephone: string;
    adresse_mail: string;
    coordonnee_geographique: string;
    adresse: string;
    code_postal: string;
    ville: string;
    modalites: number[];
    horaires: number[];
}

interface Adresse {
    code_postal: number;
    ville: string;
}

interface Modalite {
    id_modalite: number;
    nom_modalite: string;
}

interface Horaire {
    id_horaire: number;
    jour: string;
    horaire_ouverture: string;
    horaire_fermeture: string;
}

// Interface des options pour les sélections
interface FormOptions {
    adresses: Adresse[];
    modalites: Modalite[];
    horaires: Horaire[];
}

// Composant principal pour ajouter un centre
export default function AddCentreForm({ }) {
    require('dotenv').config()

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // État pour les données du formulaire
    const [formData, setFormData] = useState<FormData>({
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
    const [formOptions, setFormOptions] = useState<FormOptions>({
        adresses: [],
        modalites: [],
        horaires: []
    });

    // État pour gérer l'ajout d'une nouvelle adresse
    const [nouvelleAdresse, setNouvelleAdresse] = useState<boolean>(false);

    // État pour gérer l'ajout d'un nouvel horaire
    const [nouvelHoraire, setNouvelHoraire] = useState<boolean>(false);

    // État pour les données du nouvel horaire
    const [newHoraire, setNewHoraire] = useState<{ jour: string; horaire_ouverture: string; horaire_fermeture: string }>({
        jour: '',
        horaire_ouverture: '',
        horaire_fermeture: ''
    });

    // Charge les options du formulaire au montage du composant
    useEffect(() => {
        fetchFormData()
            .then(setFormOptions)
            .catch((error) => {
                logger.error({ message: error.message, stack: error.stack })
            });
    }, []);

    // Gére les changements dans les champs du formulaire
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Gére les changements dans les sélections multiples
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, options } = e.target;
        const values = Array.from(options).filter(opt => opt.selected).map(opt => opt.value);
        setFormData({ ...formData, [name]: values });
    };

    // Gére les changements dans les champs du nouvel horaire
    const handleNewHoraireChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewHoraire({ ...newHoraire, [e.target.name]: e.target.value });
    };

    // Ajoute un nouvel horaire
    const addNewHoraire = async (e: FormEvent) => {
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
            logger.error('Erreur lors de l\'ajout d\'une nouvelle horaire', error)
            throw new Error('Erreur lors de l\'ajout d\'une nouvelle horaire')
        }
    };

    // Soumition du formulaire pour ajouter un centre
    const handleSubmit = async (e: FormEvent) => {
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
            window.location.reload();
        } catch (error) {
            logger.error('Erreur lors de l’ajout du centre:', error);
            throw new Error('Erreur lors de l\’ajout du centre. Vérifie que tous les champs sont valides.')
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
                            <TextInput
                                size="md"
                                radius="md"
                                label="Numéro FINESS :"
                                placeholder="Numéro FINESS"
                                name="numero_finess"
                                value={formData.numero_finess}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    }
                                }}
                            />
                        </div>

                        {/* Nom */}
                        <div className="form-control bg-secondary">
                            <TextInput
                                size="md"
                                radius="md"
                                label="Nom du centre :"
                                placeholder="Nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    }
                                }}
                            />
                        </div>

                        {/* Site Web */}
                        <div className="form-control bg-secondary">
                            <TextInput
                                size="md"
                                radius="md"
                                label="Site Web :"
                                placeholder="Site Web"
                                name="site_web"
                                value={formData.site_web}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    }
                                }}
                            />
                        </div>

                        {/* Téléphone */}
                        <div className="form-control bg-secondary">
                            <TextInput
                                size="md"
                                radius="md"
                                label="Téléphone :"
                                placeholder="Téléphone"
                                name="numero_telephone"
                                value={formData.numero_telephone}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    }
                                }}
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control bg-secondary">
                            <TextInput
                                size="md"
                                radius="md"
                                label="Email : "
                                placeholder="Email"
                                name="adresse_mail"
                                value={formData.adresse_mail}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    }
                                }}
                            />
                        </div>

                        {/* Coordonnées GPS */}
                        <div className="form-control bg-secondary">
                            <TextInput
                                size="md"
                                radius="md"
                                label="Coordonnées GPS : "
                                placeholder="Coordonnées GPS"
                                name="coordonnee_geographique"
                                value={formData.coordonnee_geographique}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    }
                                }}
                            />
                        </div>

                        {/* Adresse */}
                        <div className="form-control bg-secondary">
                            <TextInput
                                size="md"
                                radius="md"
                                label="Adresse : "
                                placeholder="Rue, bâtiment..."
                                name='adresse'
                                value={formData.adresse}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    }
                                }}
                            />
                        </div>

                        {/* Ville & Code Postal + Nouvelle ville*/}
                        <div className="form-control bg-secondary">
                            <Select
                                size="md"
                                label="Ville & Code Postal :"
                                placeholder="Sélectionner une ville"
                                data={[
                                    { value: "", label: "Sélectionner une ville" },
                                    ...formOptions.adresses.map((adresse) => ({
                                        value: adresse.code_postal.toString(),
                                        label: `${adresse.ville} (${adresse.code_postal})`
                                    }))
                                ]}
                                value={formData.code_postal.toString()}
                                onChange={(value) => {
                                    setFormData({
                                        ...formData,
                                        code_postal: value ? value : ""
                                    });
                                }}
                                disabled={nouvelleAdresse}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    },
                                }}
                            />

                            <br />

                            {/* Checkbox pour l'ajout d'une nouvelle ville et code postal */}
                            <div className="mb-3 form-check">
                                <Checkbox
                                    size="md"
                                    label="Ajouter une nouvelle ville"
                                    onChange={() => setNouvelleAdresse(!nouvelleAdresse)}
                                    styles={{
                                        label: {
                                            color: '#fff',
                                        }
                                    }}
                                />
                            </div>

                            {/* Nouvelle Ville & Code Postal */}
                            {nouvelleAdresse && (
                                <>
                                    <div className="mb-3">
                                        <TextInput
                                            size="md"
                                            radius="md"
                                            label="Ville"
                                            placeholder="Nouvelle ville"
                                            name='ville'
                                            onChange={handleChange}
                                            styles={{
                                                input: {
                                                    backgroundColor: '#6c757d',
                                                    color: '#fff',
                                                },
                                                label: {
                                                    color: '#fff',
                                                }
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <TextInput
                                            size="md"
                                            radius="md"
                                            label="Code postal"
                                            placeholder="Nouveau code postal"
                                            name='code_postal'
                                            onChange={handleChange}
                                            styles={{
                                                input: {
                                                    backgroundColor: '#6c757d',
                                                    color: '#fff',
                                                },
                                                label: {
                                                    color: '#fff',
                                                }
                                            }}
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Modalités */}
                        <div className="mb-3">
                            <MultiSelect
                                size="md"
                                label="Modalités :"
                                placeholder="Sélectionnez les modiltés"
                                data={formOptions.modalites.map((modalite) => ({
                                    value: modalite.id_modalite.toString(),
                                    label: `${modalite.nom_modalite}`
                                }))}
                                value={formData.modalites.map(id => id.toString())}
                                onChange={(values) => {
                                    setFormData({
                                        ...formData,
                                        modalites: values.map(value => parseInt(value))
                                    });
                                }}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    },
                                }}
                            />
                        </div>

                        {/* Liste Horaires  + Ajout nouvelle horaire */}
                        <div className="mb-3">
                            {/* Sélécteur d'horaire */}
                            <MultiSelect
                                size="md"
                                label="Horaires :"
                                placeholder="Sélectionnez les horaires"
                                data={formOptions.horaires.map((horaire) => ({
                                    value: horaire.id_horaire.toString(),
                                    label: `${horaire.jour} (${horaire.horaire_ouverture} - ${horaire.horaire_fermeture})`
                                }))}
                                value={formData.horaires.map(id => id.toString())}
                                onChange={(values) => {
                                    setFormData({
                                        ...formData,
                                        horaires: values.map(value => parseInt(value))
                                    });
                                }}
                                styles={{
                                    input: {
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                    },
                                    label: {
                                        color: '#fff',
                                    },
                                }}
                            />

                            <br />

                            {/* Checkbox pour l'ajout d'un nouvel horaire */}
                            <Checkbox
                                size="md"
                                label="Ajouter un nouvel horaire :"
                                onChange={() => setNouvelHoraire(!nouvelHoraire)}
                                styles={{
                                    label: {
                                        color: '#fff', // Texte en blanc
                                    },
                                }}
                            />

                            {/* Formulaire pour ajouter un nouvel horaire */}
                            {nouvelHoraire && (
                                <div className='mb-3 d-flex flex-column justify-content_center'>
                                    {/* Jour */}
                                    <TextInput
                                        size="md"
                                        radius="md"
                                        label="Jour"
                                        name="jour"
                                        placeholder="Jour"
                                        onChange={(event) => handleNewHoraireChange(event)}
                                        styles={{
                                            input: {
                                                backgroundColor: '#6c757d', // Couleur de fond
                                                color: '#fff', // Texte en blanc
                                            },
                                        }}
                                    />

                                    {/* Heure ouverture */}
                                    <TimeInput
                                        size="md"
                                        radius="md"
                                        name="horaire_ouverture"
                                        onChange={(event) => handleNewHoraireChange(event)}
                                        styles={{
                                            input: {
                                                backgroundColor: '#6c757d', // Couleur de fond
                                                color: '#fff', // Texte en blanc
                                            },
                                        }}
                                    />

                                    {/* Heure Fermeture */}
                                    <TimeInput
                                        size="md"
                                        radius="md"
                                        name="horaire_fermeture"
                                        onChange={(event) => handleNewHoraireChange(event)}
                                        styles={{
                                            input: {
                                                backgroundColor: '#6c757d', // Couleur de fond
                                                color: '#fff', // Texte en blanc
                                            },
                                        }}
                                    />

                                    {/* Bouton ajouter un horaire */}
                                    <Button
                                        size="md"
                                        variant="filled"
                                        color="#198754"
                                        radius="md"
                                        onClick={(event) => addNewHoraire(event)}>
                                        Ajouter Horaire
                                    </Button>
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
