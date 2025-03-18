import axios from 'axios';

// Récupération de l'URL de l'API à partir des variables d'environnement
const API_URL = process.env.NEXT_PUBLIC_API_URL; 

// Fonction asynchrone pour récupérer la liste des centres
export const fetchCentres = async () => {
    const response = await axios.get(`${API_URL}/centres`);
    return response.data;
};

// Fonction asynchrone pour récupérer les informations d'un centre spécifique par son ID
export const fetchCentre = async (id) => {
    const response = await axios.get(`${API_URL}/centres/${id}`);
    return response.data;
};

// Fonction asynchrone pour récupérer les données du formulaire
export const fetchFormData = async () => {
    const response = await axios.get(`${API_URL}/form-data`);
    return response.data;
};