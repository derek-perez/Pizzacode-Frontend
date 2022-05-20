import { useEffect } from "react";

interface Props {
    element: String[];
    name: String[];
    staticElement?: boolean;
}

export const useAnimation = ({ element, name, staticElement }: Props) => {

    const animateStaticFunction = () => {
        element.forEach(e => {
            let elementToAnimate = document.getElementById(`${e}`);

            if (!elementToAnimate) return;

            elementToAnimate.classList.add('animate__animated')

            name.forEach(n => {
                elementToAnimate!.classList.add(`${n}`);
            })

            elementToAnimate.style.opacity = '1';
        })
    };

    const animateFunction = () => {
        element.forEach((e) => {
            let elementToAnimate = document.getElementById(`${e}`);
            
            name.forEach(n => {
                if (!elementToAnimate) return;

                let posicionObj = elementToAnimate.getBoundingClientRect().top;
                let tamañoDePantalla = window.innerHeight / 2;
    
                if (posicionObj < tamañoDePantalla) {
                    elementToAnimate.classList.add('animate__animated');
                    elementToAnimate.classList.add(`${n}`);
                    
                    elementToAnimate.style.opacity = '1';
                }

            });
        })
    }

    useEffect(() => {
        if (staticElement) {
            animateStaticFunction();
        } else {
            window.addEventListener('scroll', animateFunction)
        }
    }, [])

}