"use client"

import { useEffect } from 'react';
import { fetchFormData } from '../utils/api';
import logger from '@/utils/logger';
import { TextInput } from '@mantine/core';
import { setFormOptions } from '@/app/store/formOptionsSlice';
import { RootState } from '@/app/store/store';
import { useSelector } from 'react-redux';
import { useFormHandlers } from '@/app/store/fonctions';
import { VilleCP } from './villecp';
import { Modalites } from './modalités';
import { Horaires } from './horaires';
import { dispatch } from '@/app/dispatchHelper';

// Composant principal pour ajouter un centre
export default function AddCentreForm({ }) {
    require('dotenv').config()

    const {
        handleChange,
        handleSubmit,
    } = useFormHandlers();
    const formData = useSelector((state: RootState) => state.formData);
    
    // Charge les options du formulaire au montage du composant
    useEffect(() => {
        fetchFormData()
            .then((data) => {
                dispatch(setFormOptions(data));
            })
            .catch((error) => {
                logger.error({ message: error.message, stack: error.stack })
            });
    }, []);

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

                        <VilleCP />

                        <Modalites />

                        <Horaires />

                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
