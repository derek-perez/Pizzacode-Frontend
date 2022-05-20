import { ChangeEvent, useState } from "react"


interface UseFormProps {
    nameInput?: string;
    random?: string;
    searchInput?: string;
    nombres?: string;
    correoElectronico?: string;
    estado?: string;
    telefono?: string;
    direccion?: string;
    apellidos?: string;
    codigoPostal?: string;
    ciudadMunicipio?: string;
}

export const useForm = (initialState: UseFormProps) => {

    const [formData, setFormData] = useState(initialState);

    const onChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setFormData( prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    return {
        ...formData,
        formData,
        
        onChange
    };

}
