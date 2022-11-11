
import { ItemCarousel } from './ItemCarousel';


export const Carousel = () => {

    let height = window.screen.height;

    const dimentionsToCarouselHeight = () => {
        return ((height / 4) * 3);
    }

    const url = window.location.host;

    const carousel1 = 'https://raw.githubusercontent.com/derek-perez/Pizzacode-Frontend/main/public/assets/carousel1.jpg';
    const carousel2 = 'https://raw.githubusercontent.com/derek-perez/Pizzacode-Frontend/main/public/assets/carousel2.jpg';
    const carousel3 = 'https://raw.githubusercontent.com/derek-perez/Pizzacode-Frontend/main/public/assets/carousel3.jpg';

    
    return (
        <div
            style={styles.carouselContainer}
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                <ItemCarousel imgCarousel={carousel1} active='active' />
                <ItemCarousel imgCarousel={carousel2} />
                <ItemCarousel imgCarousel={carousel3} />
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}


const styles = {
    carouselContainer: {
        width: '100%',
        backgroundColor: 'black',
        borderBottom: '15px solid rgb(145, 14, 14)',
        boxShadow: '0px 5px 5px rgba(0 0 0 / 50%)',
    }
}