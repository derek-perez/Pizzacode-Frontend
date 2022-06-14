import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


export interface PropsUseState {
    e: any;
    justNow?: boolean;
    checkbox?: boolean;
}


export const useTheme = () => {

    const [props, setProps] = useState({} as PropsUseState);
    const { themeChange, setThemeChange } = useContext(ThemeContext);

    const themePredetermined = document.getElementById('themePredetermined') as HTMLInputElement;
    const themeClear = document.getElementById('themeClear') as HTMLInputElement;
    const themeDark = document.getElementById('themeDark') as HTMLInputElement;

    useEffect(() => {



        if (!localStorage.getItem('theme')) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localStorage.setItem('theme', 'predetermined');
                localStorage.setItem('themeApp', 'dark');
                setThemeChange('dark');

            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                localStorage.setItem('theme', 'predetermined');
                localStorage.setItem('themeApp', 'clear');
                setThemeChange('clear');

            } else if (!window.matchMedia || !window.matchMedia('(prefers-color-scheme: dark)').matches && !window.matchMedia('(prefers-color-scheme: light)').matches) {
                localStorage.setItem('themeApp', 'light');
            }
        }

        if (props.e && props.checkbox) {

            const checkbox = props.e.target as HTMLInputElement;

            if (checkbox.id === 'themeDark') {
                themePredetermined.checked = false;
                themeClear.checked = false;

                checkbox.checked = true;
                localStorage.setItem('theme', 'dark');
                localStorage.setItem('themeApp', 'dark');
                setThemeChange('dark');

            } else if (checkbox.id === 'themeClear') {
                themeDark.checked = false;
                themePredetermined.checked = false;

                checkbox.checked = true;
                localStorage.setItem('theme', 'clear');
                localStorage.setItem('themeApp', 'clear');
                setThemeChange('clear');

            } else if (checkbox.id === 'themePredetermined') {
                themeDark.checked = false;
                themeClear.checked = false;

                checkbox.checked = true;
                localStorage.setItem('theme', 'predetermined');

                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                    localStorage.setItem('themeApp', 'clear');
                    setThemeChange('clear');
                } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.setItem('themeApp', 'dark');
                    setThemeChange('dark');
                }
            }

        } else if (props.e && props.justNow) {
            let themeStorage = localStorage.getItem('theme');
            let themeAppStorage = localStorage.getItem('themeApp');

            // Si el tema predeterminado está activado
            if (themeStorage === 'dark') {
                themeClear.checked = false;
                themePredetermined.checked = false;

                themeDark.checked = true;
                setThemeChange('dark');

            } else if (themeStorage === 'clear') {
                themeDark.checked = false;
                themePredetermined.checked = false;

                themeClear.checked = true;
                setThemeChange('clear');

            } else if (themeStorage === 'predetermined') {
                themeDark.checked = false;
                themeClear.checked = false;

                themePredetermined.checked = true;

                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                    localStorage.setItem('themeApp', 'clear');
                    setThemeChange('clear');
                } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.setItem('themeApp', 'dark');
                    setThemeChange('dark');
                }

                // Si el dispositivo del usuario no soporta el tema predeterminado
            } else if (themeAppStorage !== 'clear' || 'dark') {
                if (themeStorage === 'dark') {
                    themeClear.checked = false;
                    themeDark.checked = true;
                    setThemeChange('dark');

                } else if (themeStorage === 'clear') {
                    themeDark.checked = false;
                    themeClear.checked = true;
                    setThemeChange('clear');
                }
            }
        }
    }, [themeChange, props])


    return {
        themeChange,
        setProps
    }
}