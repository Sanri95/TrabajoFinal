import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
export const Container = () => {
  return (
    <>
    <section className="container">
    <div className="content__container">
      <h1>
        SAYE<br />
        <span className="heading__1">Lo mejor en implementos </span><br />
        <span className="heading__2">para viajar</span>
      </h1>
      <p>
        En SAYE nos esforzamos para entregarte las mejores opciones a la hora de elegir tus implementos y herramientas para que puedas viajar sin limites, con la seguridad de que llevas los mejor de lo mejor al alcance de tu mano.
      </p>

      <form>
        <input type="text" placeholder="¿Que quieres adquirir?" />
        <button type="submit">¡Vamos alla!</button>
      </form>
    </div>
      
    <div className="image__container">
      <img id="img" src="https://www.shutterstock.com/image-photo/asian-woman-travel-camping-alone-600nw-2122867583.jpg" alt="header" />
      <img id="img2" src="https://rumbonaturaleza.com/wp-content/uploads/2023/08/Acampar_en_el_bosque_rabbit75_ist.jpg" alt="header" />
      <div className="image__content">
        <ul>
          <li>Obten 30% de descuento en tu primer compra</li>
          <li>viaja sin preocupaciones</li>
        </ul>
      </div>
    </div>
  </section>
  <div className="titu">
      <h1 className='hijo'>Implementos</h1>
  </div>
  <br />
  <br/>
  </>
  )
}
