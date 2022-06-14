import { useState } from "react"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ModalAddNew } from "./ModalAddNew"


export const AddNewThing = ({ algo }: { algo: string }) => {

    const [opened, setOpened] = useState(false);

    return (
        <>
            <div
                onClick={() => setOpened(true)}
                style={styles.container}
            >
                <span>
                    <FontAwesomeIcon icon={faPlus} /> &nbsp;
                    Agregar {algo}
                </span>
            </div>
           
            {
                opened && (
                    <ModalAddNew whatIS={algo} opened={opened} setOpened={setOpened} />
                )
            }
        </>
    )
}


const styles = {
    container: {
        position: 'sticky' as 'sticky',
        bottom: '15px',
        backgroundColor: 'rgb(145, 14, 14)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '10px',
        boxShadow: '2px 2px 10px #111',
        cursor: 'pointer' as 'pointer'
    }
}