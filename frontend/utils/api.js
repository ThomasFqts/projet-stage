import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCentres = async () => {
    const response = await axios.get(`${API_URL}/centres`);
    return response.data;
};

export const fetchCentre = async (id) => {
    const response = await axios.get(`${API_URL}/centres/${id}`);
    return response.data;
};

export const fetchFormData = async () => {
    const response = await axios.get(`${API_URL}/form-data`);
    return response.data;
};