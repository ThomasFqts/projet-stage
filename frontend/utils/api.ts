import axios from 'axios';
import logger from './logger';
import { Centre } from '@/app/redux/types';
import { API_URL } from '@/api_url';

// Récupération de l'URL de l'API à partir des variables d'environnement


// Fonction asynchrone pour récupérer la liste des centres
export const fetchCentres = async (): Promise<Centre[]> => {
    const response = await axios.get(`${API_URL}/centres`);
    return response.data;
};

// Fonction asynchrone pour récupérer les informations d'un centre spécifique par son ID
export const fetchCentre = async (id: number): Promise<Centre> => {
    const response = await axios.get(`${API_URL}/centres/${id}`);
    return response.data;
};

// Fonction asynchrone pour récupérer les données du formulaire
export const fetchFormData = async () => {

    try {
        const [adressesRes, modalitesRes, horairesRes] = await Promise.all([
            axios.get(`${API_URL}/adresses`),
            axios.get(`${API_URL}/modalites`),
            axios.get(`${API_URL}/horaires`),
        ]);

        return {
            adresses: adressesRes.data,
            modalites: modalitesRes.data,
            horaires: horairesRes.data,
        };
    } catch (error) {
        logger.error('Erreur lors du chargement des données du formulaire', error);
        throw error;
    }
};