import logger from "@/utils/logger";
import axios from "axios";
import { ChangeEvent, FormEvent } from "react";
import { setFormData, resetFormData } from "./formDataSlice";
import { setFormOptions } from "./formOptionsSlice";
import { setNewHoraire, resetNewHoraire } from "./newHoraireSlice";
import { setNouvelHoraire } from "./nouvelHoraireSlice";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { dispatch } from "../dispatchHelper";
import { API_URL } from "@/api_url";

// Hook personnalisé pour gérer les changements dans les champs du formulaire
export const useFormHandlers = () => {
    const formData = useSelector((state: RootState) => state.formData);
    const formOptions = useSelector((state: RootState) => state.formOptions);
    const newHoraire = useSelector((state: RootState) => state.newHoraire);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        dispatch(setFormData({ [e.target.name]: e.target.value }));
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, options } = e.target;
        const values = Array.from(options).filter(opt => opt.selected).map(opt => opt.value);
        dispatch(setFormData({ [name]: values }));
    };

    const handleNewHoraireChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNewHoraire({ [e.target.name]: e.target.value }));
    };

    const addNewHoraire = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/horaires`, newHoraire);
            dispatch(setFormOptions({
                ...formOptions,
                horaires: [...formOptions.horaires, res.data]
            }));
            dispatch(setFormData({
                ...formData,
                horaires: [...formData.horaires, res.data.id_horaire]
            }));
            dispatch(setNouvelHoraire(false));
            dispatch(resetNewHoraire());
        } catch (error) {
            logger.error('Erreur lors de l\'ajout d\'une nouvelle horaire', error);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/centres`, formData);
            alert('Centre ajouté avec succès !');
            dispatch(resetFormData());
            window.location.reload();
        } catch (error) {
            logger.error('Erreur lors de l’ajout du centre:', error);
        }
    };

    return {
        handleChange,
        handleSelectChange,
        handleNewHoraireChange,
        addNewHoraire,
        handleSubmit,
    };
};