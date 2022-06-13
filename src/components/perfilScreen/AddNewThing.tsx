import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const AddNewThing = ({ algo }: { algo: string }) => {
    
    const handleClick = () => {
        console.log('Deste')
    }

    return (
        <div onClick={handleClick} style={styles.container}>
            <span>
                <FontAwesomeIcon icon={faPlus} /> &nbsp;
                Agregar {algo}
            </span>
        </div>
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