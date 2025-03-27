import { useFormHandlers } from "@/app/store/fonctions";
import { setFormData } from "@/app/store/formDataSlice";
import { setNouvelHoraire } from "@/app/store/nouvelHoraireSlice";
import { RootState } from "@/app/store/store";
import { MultiSelect, Checkbox, TextInput, Button } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";

export const Horaires = () => {
    const formData = useSelector((state: RootState) => state.formData);
    const formOptions = useSelector((state: RootState) => state.formOptions);
    const nouvelHoraire = useSelector((state: RootState) => state.nouvelHoraire);
    const { handleNewHoraireChange, addNewHoraire } = useFormHandlers();
    const dispatch = useDispatch();
    return (
        /* Liste Horaires  + Ajout nouvelle horaire */
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
                    dispatch(setFormData({
                        ...formData,
                        horaires: values.map(value => parseInt(value))
                    }));
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
                onChange={() => dispatch(setNouvelHoraire(!nouvelHoraire))}
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
    )
}