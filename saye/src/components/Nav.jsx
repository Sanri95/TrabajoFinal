import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export const Nav = () => {
  return (
    <nav>
			<div className="nav__logo"><a href="#">SAYE</a></div>
			<ul className="nav__links">
				<li className="link"><a href="#">Home</a></li>
				<li className="link"><a href="#">¿Quienes somos?</a></li>
				<li className="link"><a href="#">Paquetes de viaje</a></li>
				<li className="link"><a href="#">Implementos</a></li>
				<li className="link"><a href="#">Afiliados</a></li>
				<li className="link"><a href="#" className="nav__btn">Resgistrate</a></li>    
				<li className="link"><a href="#" className="btn">Button</a></li>
			</ul>
			</nav>
  )
}
