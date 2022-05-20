import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


interface Props {
    id: string[];
    is: string;
}

export const ChangeTheme = ({ id, is }: Props) => {

    const { themeChange } = useContext(ThemeContext);
    let theme = localStorage.getItem('themeApp');

    useEffect(() => {
        if (!id) return;

        setTimeout(() => {
            const modify = (idToModify: string) => {
                let element = document.getElementById(idToModify) as HTMLElement;

                if (!element) return;

                if (theme === 'dark') {
                    if (is === 'title') {
                        element.classList.add('darkModeTitle');
                    } else if (is === 'div') {
                        element.classList.remove('clearMode');
                        element.classList.add('darkMode');
                    } else if (is === 'card') {
                        element.classList.remove('clearMode');
                        element.classList.add('darkModeCard');
                    } else if (is === 'input') {
                        element.classList.remove('clearMode');
                        element.classList.add('darkModeInput');
                    } else if(is === 'littleMenuItem') {
                        element.classList.remove('clearMode');
                        element.classList.add('darkModeLittleMenuItem');
                    } else if(is === 'littleMenuItemActive') {
                        element.classList.remove('clearMode');
                        element.classList.remove('darkModeLittleMenuItem');
                        element.classList.add('darkModeLittleMenuItemActive');
                    }

                } else if (theme === 'clear') {
                    element.classList.remove('darkMode');
                    element.classList.remove('darkModeTitle');
                    element.classList.remove('darkModeCard');
                }
            }

            id.forEach((idToModify: string) => modify(idToModify));

        }, 100);
    }, [themeChange])

}