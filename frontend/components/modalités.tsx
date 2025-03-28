import { dispatch } from "@/app/dispatchHelper";
import { setFormData } from "@/app/store/formDataSlice";
import { RootState } from "@/app/store/store";
import { MultiSelect } from "@mantine/core";
import { useSelector } from "react-redux";

export const Modalites = () => {
    const formData = useSelector((state: RootState) => state.formData);
    const formOptions = useSelector((state: RootState) => state.formOptions);
    return (
        /* Modalités */
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
                    dispatch(setFormData({
                        ...formData,
                        modalites: values.map(value => parseInt(value))
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
        </div>
    )
}