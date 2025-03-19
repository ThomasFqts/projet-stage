import axios from 'axios';

// Récupération de l'URL de l'API à partir des variables d'environnement
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Définition des types
export interface Centre {
    numero_finess: number;
    nom: string;
    site_web?: string;
    numero_telephone: string;
    adresse_mail: string;
    coordonnee_geographique?: string;
    adresse: string;
    code_postal: number;
}

export interface Adresse {
    code_postal: number;
    ville: string;
}

export interface Horaire {
    id_horaire: number;
    jour: string;
    horaire_ouverture: string;
    horaire_fermeture: string;
}

export interface Modalite {
    id_modalite: number;
    nom_modalite: string;
}

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
export const fetchFormData = async (): Promise<{
    adresses: Adresse[];
    modalites: Modalite[];
    horaires: Horaire[];
}> => {
    const response = await axios.get(`${API_URL}/form-data`);
    return response.data;
};