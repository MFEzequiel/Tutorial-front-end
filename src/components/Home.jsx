import { Card } from './Card'
import { Carousel } from './Carousel'

export function Home () {

  return (
    <>
      <Carousel />
      <section className="container-home">
        <div className="home-inicio">
          <p className='filterable-title pos-relative'>
            <span className='filterable-title-text title'>Trabajos</span>
          </p> 
          <p>Bienvenidos a nuestra galería, un espacio visual donde se encuentran algunas de nuestras fotografías más queridas.</p>
          <p>Desde retratos íntimos hasta tomas de eventos importantes y proyectos comerciales, cada imagen refleja el estilo único y la creatividad de nuestro equipo.</p>
          <p>Nos enfocamos en capturar momentos sinceros, retratos que hablan por sí mismos, y escenas que transmiten las emociones de cada historia.</p>
          <p>Creemos que una buena fotografía es aquella que te hace revivir el momento una y otra vez.</p>
          <p>Explora nuestras secciones para descubrir nuestro estilo y conocer las imágenes que han dejado huella en nuestros clientes.</p>
          <div className="container-work">
              <img src="../../public/img/foto-1.jpg" alt="" className="work-image" />
              <img src="../../public/img/foto-2.jpg" alt="" className="work-image" />
              <img src="../../public/img/foto-3.jpg" alt="" className="work-image" />
              <img src="../../public/img/foto-4.jpg" alt="" className="work-image" />
              <img src="../../public/img/foto-6.jpg" alt="" className="work-image" />
              <img src="../../public/img/foto-7.jpg" alt="" className="work-image" />
              <img src="../../public/img/foto-8.jpg" alt="" className="work-image" />
              <img src="../../public/img/foto-9.jpg" alt="" className="work-image" />
              <img src="../../public/img/foto-10.jpg" alt="" className="work-image" />
          </div>
        </div>
        <div className="home-service">
          <p className='filterable-title pos-relative'>
            <span className='filterable-title-text title'>Servicios</span>
          </p> 
          <img src="../../public/img/carousel-1.jpg" alt="" className="services-image" />
          <p className="paragraph">Nos especializamos en una variedad de servicios pensados para cumplir con las expectativas de nuestros clientes.</p>
          <p className="paragraph">Cada sesión es cuidadosamente planeada y adaptada para capturar exactamente lo que imaginas.</p>
          <p className="title">Algunos de nuestros servicios incluyen:</p>
          <ul className="services-menu">
            <li className="services-item">
              <p className="paragraph">Sesiones de retrato: Para quienes buscan capturar la esencia de su personalidad, ya sea de forma individual, en pareja o en grupo. <br /> Nos enfocamos en resaltar la esencia de cada persona y lograr imágenes llenas de vida.</p>
            </li>
            <li className="services-item">
              <p className="paragraph">Fotografía de eventos: Cubrimos eventos importantes como bodas, cumpleaños, aniversarios y otros momentos especiales. Nuestro objetivo es ser discretos pero efectivos, capturando los momentos más importantes sin interrumpir el flujo del evento.</p>
            </li>
            <li className="services-item">
              <p className="paragraph">Fotografía comercial: Ya sea para productos, branding o moda, entendemos la importancia de una imagen que hable por tu negocio. Creamos fotografías que destacan los detalles, reflejan la calidad y transmiten la esencia de tu marca.</p>
            </li>
            <li className="services-item">
              <p className="paragraph">Fotografía artística: Diseñamos sesiones fotográficas únicas y temáticas, perfectas para quienes buscan un enfoque más creativo y expresivo. Ya sea que quieras explorar un concepto, realizar una sesión personalizada o experimentar con el arte de la fotografía, podemos ayudarte a hacer realidad esa visión.</p>
            </li>
          </ul>
        </div>
        <div className="home-cliente">
          <p className='filterable-title pos-relative'>
            <span className='filterable-title-text title'>Clientes</span>
          </p>
          <div className="client-image">
            <Card image={'/public/img/foto-6.jpg'} name={'Ana y Jorge'} text={'Trabajar con el equipo fue una experiencia increíble. No solo capturaron los mejores momentos de nuestra boda, sino que lo hicieron con tanto cariño y profesionalismo que superaron todas nuestras expectativas.'} />
            <Card image={'/public/client/María.jpg'} name={'María P.'} text={'No puedo agradecer lo suficiente por las fotos. Como alguien que no está acostumbrado a posar, su equipo hizo que me sintiera tan cómodo y en confianza. Las fotos quedaron espectaculares.'} />
            <Card image={'/public/client/Carlos.jpg'} name={'Carlos L.'} text={'Ellos no solo capturaron nuestras fotos, capturaron nuestras emociones. Recomendaría al equipo a cualquiera que quiera fotos sinceras y artísticas.'} />
          </div>
        </div>
      </section>
    </>
  )
}
