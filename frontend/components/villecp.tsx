import { useFormHandlers } from "@/app/store/fonctions";
import { setFormData } from "@/app/store/formDataSlice";
import { setNouvelleAdresse } from "@/app/store/nouvelleAdresseSlice";
import { RootState } from "@/app/store/store";
import { Select, Checkbox, TextInput } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

export const VilleCP = () => {
    const formData = useSelector((state: RootState) => state.formData);
    const formOptions = useSelector((state: RootState) => state.formOptions);
    const nouvelleAdresse = useSelector((state: RootState) => state.nouvelleAdresse);
    const dispatch = useDispatch();
    const handleChange = useFormHandlers().handleChange;
    return (
        // Ville & Code Postal + Nouvelle ville & code postal
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
                    dispatch(setFormData({
                        ...formData,
                        code_postal: value ? value : ""
                    }));
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
                    onChange={() => dispatch(setNouvelleAdresse(!nouvelleAdresse))}
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
    );
}