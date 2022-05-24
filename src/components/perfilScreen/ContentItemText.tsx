import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "../../hooks/useForm";


// TODO: Agregar llamada a funcion para guardar datos
interface ItemProps {
    icon: any;
    boolean: boolean;
    contentValue: string;
    nameInput: string;

    setBoolean: (value: React.SetStateAction<boolean>) => void;
    setButtonsContainer: (value: React.SetStateAction<boolean>) => void;
}


export const ContentItemText = ({ icon, boolean, contentValue, nameInput, setBoolean, setButtonsContainer }: ItemProps) => {

    const { onChange } = useForm({});
    const [text, setText] = useState(contentValue);

    const handleClick = () => {
        setBoolean(false);
        setButtonsContainer(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        setText(e.target.value);
    }


    return (
        <div className='itemPerfil' style={styles.contentItemText}>
            <div className="itemPerfilDiv">
                <FontAwesomeIcon icon={icon} style={{ marginRight: '10px' }} />
                <span style={styles.contentItemTextMain}>{contentValue}:</span>
            </div>
            {
                (boolean)
                    ?
                    <div className="itemPerfilDiv">
                        <span
                            onDoubleClick={handleClick}
                            style={styles.contentItemTextInfo}
                        >
                            {contentValue}
                        </span>
                    </div>

                    :
                    <div className="itemPerfilDiv">
                        <input
                            id={nameInput}
                            style={styles.input}
                            autoFocus
                            value={text}
                            onChange={handleChange}
                            name={nameInput}
                            type='text'
                        />
                    </div>
            }
        </div>
    )
}



const styles = {
    contentItem: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap' as 'wrap',
        justifyContent: 'space-evenly' as 'space-evenly',
    },
    contentItemText: {
        width: '40%',
        minWidth: '370px',
        borderTop: '1px solid rgb(145, 14, 14)',
        borderBottom: '1px solid rgb(145, 14, 14)',
        marginBottom: '20px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center' as 'center'
    },
    contentItemTextMain: {
        fontSize: '18px',
        fontWeight: 'bold' as 'bold'
    },
    contentItemTextInfo: {
        fontSize: '18px',
        marginLeft: '10px'
    },
    input: {
        marginLeft: '10px',
        outline: 'none',
        border: '1px solid rgb(145, 14, 14)',
        padding: '5px',
        borderRadius: '5px',
    },
}