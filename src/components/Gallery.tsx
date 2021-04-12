import Gal1 from '../sass/img/gal-1.jpeg'
import Gal2 from '../sass/img/gal-2.jpeg'
import Gal3 from '../sass/img/gal-3.jpeg'
import Gal4 from '../sass/img/gal-4.jpeg'
import Gal5 from '../sass/img/gal-5.jpeg'
import Gal6 from '../sass/img/gal-6.jpeg'
import Gal7 from '../sass/img/gal-7.jpeg'
import Gal8 from '../sass/img/gal-8.jpeg'
import Gal9 from '../sass/img/gal-9.jpeg'

const Gallery = () => {
    return (
        <section className="gallery">
        <figure className="gallery_item gallery__item--1">
            <img src={Gal1} alt="1" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--2">
            <img src="img/gal-2.jpeg" alt="2" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--3">
            <img src="img/gal-3.jpeg" alt="3" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--4">
            <img src="img/gal-4.jpeg" alt="4" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--5">
            <img src="img/gal-5.jpeg" alt="5" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--6">
            <img src="img/gal-6.jpeg" alt="6" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--7">
            <img src="img/gal-7.jpeg" alt="7" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--8">
            <img src="img/gal-8.jpeg" alt="8" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--9">
            <img src="img/gal-9.jpeg" alt="9" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--10">
            <img src="img/gal-10.jpeg" alt="10" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--11">
            <img src="img/gal-11.jpeg" alt="11" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--12">
            <img src="img/gal-12.jpeg" alt="12" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--13">
            <img src="img/gal-13.jpeg" alt="13" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--14">
            <img src="img/gal-14.jpeg" alt="14" className="gallery__img"/>
        </figure>
    </section>
    )
}

export default Gallery