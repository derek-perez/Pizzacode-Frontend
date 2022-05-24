import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../../hooks/useTheme';



interface Props {
    active?: boolean,
    name: string,
    icon: any
}

export const LittleMenuItem = ({ active, name, icon }: Props) => {

    const themeChange = localStorage.getItem('themeApp');
    const navigate = useNavigate();

    const changeItems = () => {
        if (active && themeChange === 'dark') {
            setTimeout(() => {
                let element = document.getElementById(`${name}Title`) as HTMLElement;
                if (!element) return null;

                element.classList.remove('clearModeLittleMenuItem');
                element.classList.remove('clearModeLittleMenuItemActive');
                
                element.classList.remove('darkModeLittleMenuItem');
                element.classList.add('darkModeLittleMenuItemActive');
                
            }, 100);

        } else if (!active && themeChange === 'dark') {
            setTimeout(() => {
                let element = document.getElementById(`${name}Title`) as HTMLElement;
                if (!element) return null;

                element.classList.remove('clearModeLittleMenuItem');
                element.classList.remove('clearModeLittleMenuItemActive');
                
                element.classList.remove('darkModeLittleMenuItemActive');
                element.classList.add('darkModeLittleMenuItem');

            }, 100);

        } else if (active && themeChange === 'clear') {
            setTimeout(() => {
                let element = document.getElementById(`${name}Title`) as HTMLElement;
                if (!element) return null;

                element.classList.remove('darkModeLittleMenuItemActive');
                element.classList.remove('darkModeLittleMenuItem');

                element.classList.remove('clearModeLittleMenuItem');
                element.classList.add('clearModeLittleMenuItemActive');

            }, 100);
        } else if (!active && themeChange === 'clear') {
            setTimeout(() => {
                let element = document.getElementById(`${name}Title`) as HTMLElement;
                if (!element) return null;

                element.classList.remove('darkModeLittleMenuItemActive');
                element.classList.remove('darkModeLittleMenuItem');

                element.classList.remove('clearModeLittleMenuItemActive');
                element.classList.add('clearModeLittleMenuItem');

            }, 100);
        }
    }

    useEffect(() => {
        changeItems();
    }, [])

    useEffect(() => {
        changeItems();
    }, [themeChange, active])


    const ifClick = () => {
        navigate('/cuenta/' + name.toLowerCase());
    }

    return (
        <div
            id={`${name}Title`}
            onClick={ifClick}
            style={styles.littleMenuItem}
        >
            <p id={`${name}P`} style={styles.littleMenuItemText}>
                <FontAwesomeIcon icon={icon} /> &nbsp;&nbsp;&nbsp; {name}
            </p>
            <span className='chevronMenuItemRight' style={{ paddingRight: '20px' }}>
                <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span className='chevronMenuItemDown' style={{ paddingRight: '20px', display: 'none' }}>
                <FontAwesomeIcon icon={faChevronDown} />
            </span>
        </div>
    )
}


const styles = {
    littleMenuItem: {
        display: 'flex',
        width: '100%',
        height: '4rem',
        paddingTop: '1rem',
        borderBottom: '1px solid rgb(145, 14, 14)',
        cursor: 'pointer',
        paddingLeft: '35px',
    },

    littleMenuItemText: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    }
}