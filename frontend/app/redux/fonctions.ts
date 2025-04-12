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

/**
 * Hook personnalisé fournissant des gestionnaires pour gérer les interactions avec le formulaire et les mises à jour de l'état.
 *
 * @returns Un objet contenant les gestionnaires suivants :
 * - `handleChange` : Met à jour l'état global lorsqu'un champ de formulaire change.
 * - `handleSelectChange` : Gère les changements dans les éléments `<select>`, en mettant à jour l'état avec les valeurs sélectionnées.
 * - `handleNewHoraireChange` : Gère les changements dans les champs de saisie liés aux nouveaux horaires.
 * - `addNewHoraire` : Envoie une requête POST pour ajouter un nouvel horaire et met à jour l'état global en conséquence.
 * - `handleSubmit` : Gère la soumission du formulaire pour ajouter un nouveau centre, en envoyant les données au serveur et en mettant à jour l'interface utilisateur.
 *
 * @remarks
 * Ce hook est conçu pour simplifier la gestion des formulaires dans une application basée sur Redux en fournissant des gestionnaires réutilisables
 * pour les tâches courantes liées aux formulaires, telles que la mise à jour de l'état, la soumission des données et la gestion des interactions avec l'API.
 */
export const useFormHandlers = () => {
    const formData = useSelector((state: RootState) => state.formData);
    const formOptions = useSelector((state: RootState) => state.formOptions);
    const newHoraire = useSelector((state: RootState) => state.newHoraire);

    /**
     * Gère les changements dans les champs de formulaire et met à jour l'état global avec les nouvelles données.
     *
     * @param e - L'événement de changement provenant d'un élément HTML, tel qu'un champ de saisie ou une liste déroulante.
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        dispatch(setFormData({ [e.target.name]: e.target.value }));
    };

    /**
     * Gère l'événement de changement pour un élément `<select>`, extrait les valeurs sélectionnées
     * et met à jour les données du formulaire dans l'état de l'application.
     *
     * @param e - L'événement de changement déclenché par l'élément `<select>`.
     * @remarks
     * Cette fonction récupère l'attribut `name` et les options sélectionnées à partir de la cible de l'événement.
     * Elle construit ensuite un tableau des valeurs sélectionnées et déclenche une action pour mettre à jour
     * les données du formulaire dans l'état avec ces valeurs sélectionnées.
     *
     * @example
     * ```typescript
     * <select name="couleurs" multiple onChange={handleSelectChange}>
     *   <option value="rouge">Rouge</option>
     *   <option value="bleu">Bleu</option>
     *   <option value="vert">Vert</option>
     * </select>
     * ```
     * Lorsque l'utilisateur sélectionne "Rouge" et "Bleu", les données du formulaire dans l'état seront mises à jour comme suit :
     * `{ couleurs: ["rouge", "bleu"] }`.
     */
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, options } = e.target;
        const values = Array.from(options).filter(opt => opt.selected).map(opt => opt.value);
        dispatch(setFormData({ [name]: values }));
    };

    /**
     * Gère les changements dans les champs de saisie liés aux nouveaux horaires.
     * Cette fonction est appelée lorsqu'un événement de changement (ChangeEvent) 
     * est déclenché sur un élément HTML de type input. Elle met à jour l'état global 
     * en utilisant une action Redux pour définir une nouvelle valeur d'horaire.
     *
     * @param e - L'événement de changement contenant les informations sur l'élément HTML 
     *            qui a déclenché l'événement, y compris son nom et sa valeur.
     */
    const handleNewHoraireChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNewHoraire({ [e.target.name]: e.target.value }));
    };

    /**
     * Ajoute un nouvel horaire en envoyant une requête POST à l'API et met à jour l'état global de l'application.
     * 
     * @param e - L'événement de soumission du formulaire (FormEvent).
     * 
     * @remarks
     * Cette fonction effectue les actions suivantes :
     * - Empêche le comportement par défaut de l'événement de soumission.
     * - Envoie une requête POST à l'API pour créer un nouvel horaire.
     * - Met à jour les options du formulaire avec le nouvel horaire ajouté.
     * - Met à jour les données du formulaire avec l'identifiant du nouvel horaire.
     * - Réinitialise l'état lié à la création d'un nouvel horaire.
     * - Gère les erreurs en cas d'échec de la requête.
     * 
     * @throws Une erreur est enregistrée dans le logger si la requête échoue.
     */
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

    /**
     * Gère la soumission du formulaire pour ajouter un nouveau centre.
     * Empêche le comportement par défaut de la soumission du formulaire, 
     * envoie les données du formulaire au serveur via une requête POST 
     * et gère les mises à jour de l'interface utilisateur en conséquence.
     *
     * @param e - L'événement de formulaire déclenché par la soumission.
     * @returns Une promesse qui se résout lorsque le processus de soumission est terminé.
     *
     * @remarks
     * - En cas de succès, une alerte est affichée, les données du formulaire sont réinitialisées,
     *   et la page est rechargée pour refléter les changements.
     * - En cas d'erreur, l'erreur est enregistrée à l'aide de l'utilitaire logger.
     *
     * @throws Enregistre une erreur si la requête POST échoue.
     */
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