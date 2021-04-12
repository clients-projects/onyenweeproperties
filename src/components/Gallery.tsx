import Gal1 from '../sass/img/gal-1.jpeg'
import Gal2 from '../sass/img/gal-2.jpeg'
import Gal3 from '../sass/img/gal-3.jpeg'
import Gal4 from '../sass/img/gal-4.jpeg'
import Gal5 from '../sass/img/gal-5.jpeg'
import Gal6 from '../sass/img/gal-6.jpeg'
import Gal7 from '../sass/img/gal-7.jpeg'
import Gal8 from '../sass/img/gal-8.jpeg'
import Gal9 from '../sass/img/gal-9.jpeg'
import Gal10 from '../sass/img/gal-10.jpeg'
import Gal11 from '../sass/img/gal-11.jpeg'
import Gal12 from '../sass/img/gal-12.jpeg'
import Gal13 from '../sass/img/gal-13.jpeg'
import Gal14 from '../sass/img/gal-14.jpeg'

const Gallery = () => {
    return (
        <section className="gallery">
        <figure className="gallery_item gallery__item--1">
            <img src={Gal1} alt="1" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--2">
            <img src={Gal2} alt="2" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--3">
            <img src={Gal3} alt="3" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--4">
            <img src={Gal4} alt="4" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--5">
            <img src={Gal5} alt="5" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--6">
            <img src={Gal6} alt="6" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--7">
            <img src={Gal7} alt="7" className="gallery__img"/>
        </figure>
        <figure className="gallery_item gallery__item--8">
            <img src={Gal8} alt="8" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--9">
            <img src={Gal9} alt="9" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--10">
            <img src={Gal10} alt="10" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--11">
            <img src={Gal11} alt="11" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--12">
            <img src={Gal12} alt="12" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--13">
            <img src={Gal13} alt="13" className="gallery__img"/>
        </figure>

        <figure className="gallery_item gallery__item--14">
            <img src={Gal14} alt="14" className="gallery__img"/>
        </figure>
    </section>
    )
}

export default Gallery