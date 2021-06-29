import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/sidebar/index';

import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';
import sass from '../assets/images/sass.svg'
import stylus from '../assets/images/stylus.svg'
import react from '../assets/images/react.svg'
import angular from '../assets/images/angular.svg'
import graphql from '../assets/images/graphql.svg'
import nuxt from '../assets/images/nuxt.svg'
import material from '../assets/images/material-ui.svg'
import gatsby from '../assets/images/gatsby.svg'
import element from '../assets/images/element.svg'

import pic9 from '../assets/images/edicionycolor.png'
import pic10 from '../assets/images/tecnifajas.png'
import pic11 from '../assets/images/steelser.png'
import pic12 from '../assets/images/ahsecoperu.png'
import pic13 from '../assets/images/tec-academy.png'
import pic14 from '../assets/images/barqueros.png'
import pic15 from '../assets/images/uneteabelcorp.png'
import pic16 from '../assets/images/somosbelcorp.png'
import pic17 from '../assets/images/agustinmerino.png'


const sections = [
	{ id: 'top', name: 'Intro', icon: 'fa-home' },
	{ id: 'portfolio', name: 'Proyectos', icon: 'fa-th' },
	{ id: 'about', name: 'Sobre Mi', icon: 'fa-user' },
	{ id: 'forma', name: 'Formación', icon: 'fa-graduation-cap' },
	{ id: 'skills', name: 'Experiencia', icon: 'fa-arrow-up' },
	{ id: 'contact', name: 'Contacto', icon: 'fa-envelope' }
];

const IndexPage = () => (
	<Layout>
		<SideBar sections={sections} />

		<div id="main">
			<section id="top" className="one dark cover">
				<div className="container">
					<header>
						<h2 className="alt">
							Hola, Me llamo <strong>Paulo !</strong>
						</h2>
						<h3>Frontend Developer</h3>
						<h3> <strong> Freelancer </strong></h3>
						<p>He realizado muchos proyectos, descúbrelos.</p>
					</header>
					<div className ="container-button">
						<footer>
							<Scroll type="id" element={'portfolio'}>
								<a href="#portfolio" className="button">
									Ver más
								</a>
							</Scroll>
						</footer>
						<footer>
							<a href="https://smallpdf.com/es/file#s=c7169c16-8fb7-4e24-84c3-06d34718d74c" className="button">
								Descargar CV
							</a>
						</footer>
					</div>
				</div>
			</section>

			<section id="portfolio" className="two">
				<div className="container">
					<header>
						<h2>Proyectos</h2>
					</header>

					<p>
                        A lo largo de los años he formado parte de grandiosos equipos de desarrollo, con los cuales hemos creado soluciones para diferentes clientes. Aqui muestro algunos de nuestros trabajos.
					</p>

					<div className="row">
						<div className="col-4 col-12-mobile">
							<article className="item">
								<a href="https://www.britanico.edu.pe/"  target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/pobPPcE.png" alt="" />
								</a>
								<header>
									<h3>Britanico</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://uneteabelcorp.com/pe?vieneDe=Directo" target="_blank" className="image fit">
									<img src="https://i.ibb.co/Rb4jNYr/uneteabelcorp.png" alt="unete" />
								</a>
								<header>
									<h3>Unete a Belcorp</h3>
								</header>
							</article>
							<article className="item">
								<a href="http://www.uwiener.edu.pe/" target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/oMzeD4Z.png" alt="" />
								</a>
								<header>
									<h3>Universidad Wiener</h3>
								</header>
							</article>
                            <article className="item">
								<a href="http://www.edicionycolor.com.pe/" target="_blank" className="image fit">
									<img src="https://i.ibb.co/TRVWCT0/edicionycolor.png" alt="" />
								</a>
								<header>
									<h3>Edicion y Color</h3>
								</header>
							</article>
                            <article className="item">
								<a href="http://www.ahsecoperu.com.pe/" target="_blank" className="image fit">
									<img src="https://i.ibb.co/G3VYrB0/ahsecoperu.png" alt="" />
								</a>
								<header>
									<h3>Ahsecoperu</h3>
								</header>
							</article>
							
						</div>
						<div className="col-4 col-12-mobile">
							<article className="item">
								<a href="https://uneteabelcorp.com/pe?vieneDe=Directo" target="_blank" className="image fit">
									<img src="https://i.ibb.co/R366kx6/somosbelcorp.png" alt="belcorp" />
								</a>
								<header>
									<h3>Somos Belcorp</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://www.ladrillospiramide.com/" target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/dilgXin.png" alt="" />
								</a>
								<header>
									<h3>Ladrillos Piramide</h3>
								</header>
							</article>
							<article className="item">
								<a href="http://msinmobiliaria.pe/" target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/IyoAfTl.png" alt="" />
								</a>
								<header>
									<h3>MsInmobiliaria</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://www.tecnifajas.com/" target="_blank" className="image fit">
									<img src="https://i.ibb.co/3vk0N47/tecnifajas.png" alt="" />
								</a>
								<header>
									<h3>Tecnifajas</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://tec-academy.netlify.com/" target="_blank" className="image fit">
									<img src="https://i.ibb.co/VMXPM8Z/tec-academy.png" alt="" />
								</a>
								<header>
									<h3>Tec Academy</h3>
								</header>
							</article>
						</div>
						<div className="col-4 col-12-mobile">
							<article className="item">
								<a href="https://datathon-belcorp.netlify.com/" target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/PZUZodj.png" alt="" />
								</a>
								<header>
									<h3>Datathon Belcorp</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://finisterre.com.pe/" target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/2trdjzv.png" alt="" />
								</a>
								<header>
									<h3>Mapfre Finisterre</h3>
								</header>
							</article>
							
							<article className="item">
								<a href="https://www.steelser.com.pe/" target="_blank" className="image fit">
									<img src="https://i.ibb.co/F4hnqgm/steelser.png" alt="" />
								</a>
								<header>
									<h3>Steelser</h3>
								</header>
							</article>
                            <article className="item">
								<a href="http://www.barqueros.com/" target="_blank" className="image fit">
									<img src="https://i.ibb.co/hs1WCjW/barqueros.png" alt="barqueros" />
								</a>
								<header>
									<h3>Barqueros</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://agustinmerino.com.pe/" target="_blank" className="image fit">
									<img src="https://i.ibb.co/fn1vQ6G/agustinmerino.png" alt="merino" />
								</a>
								<header>
									<h3>Agustin Merino</h3>
								</header>
							</article>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="three">
				<div className="container">
					<header>
						<h2>Acerca de mí</h2>
					</header>
            <p>
              Descubrí mi  pasión por el desarrollo de software mientras cursaba la carrera de Ingeniería de Sistemas en la <strong> Universidad Inca Garcilazo de la Vega. </strong>
              <br />
              Las tecnologías con las que trabajo las aprendí llevando cursos online, leyendo artículos, retándome constantemente y practicando bastante. 
              Descubrí mi pasion por el desarrollo de Software mientras cursaba la carrera de Ingenieria de sistemas en la  
            </p>
				</div>
			</section>

			<section id="forma" className="four">
				<div className="container">
					<header>
						<h2>Formación</h2>
					</header>
            <div className="formation_list-container">
              <section>
                <span>
                  <h4> <a href="https://www.uigv.edu.pe/wp/" > Universidad Inca Garcilazo de la Vega </a> </h4>
                  <ul className="formation_list" >
                    <li>- Ingenieria de Sistemas</li>
                  </ul>
                </span>				
                <span>
                  <h4> <a href="https://platzi.com/" >Platzi </a></h4>
                  <ul className="formation_list">
                    <li>- Programación básica</li>
                    <li>- Git / Github</li>
                    <li>- Sass</li>
                    <li>- Flexbox</li>
                    <li>- Grid Layout</li>
                    <li>- Javascript</li>
                  </ul>
                </span>
                <span>
                  <h4> <a href="https://mead.io/" >Andrew Mead</a></h4>
                  <ul className="formation_list" >
                    <li>- Gatsby  (React + Graphql) </li>
                  </ul>
                </span>
                <span>
                  <h4> <a href="https://www.udemy.com/" > Udemy</a></h4>
                  <ul className="formation_list">
                    <li>- React + Graphql + Apollo + MongoDB</li>
                  </ul>
                </span>
              </section>
              <section>
                <span>
                  <h4> <a href="https://wesbos.com/" >WesBos</a></h4>
                  <ul className="formation_list" >
                    <li>- Javascript 30</li>
                    <li>- React Beginner</li>
                    <li>- Grid Layout</li>
                  </ul>
                </span>
                <span>
                  <h4> <a href="https://carlosazaustre.es/" >Carlos Azaustre</a></h4>
                  <ul className="formation_list" >
                    <li>- React</li>
                    <li>- Redux</li>
                    <li>- React Native</li>
                  </ul>
                </span>						
                <span>
                  <h4> <a href="https://vueschool.io/" >Vue School</a></h4>
                  <ul className="formation_list">
                    <li>- Vue Mastery Class</li>
                    <li>- Test whit Javascript</li>
                    <li>- Test whit Jest</li>
                  </ul>
                </span>							
              </section>
            </div>
				</div>
			</section>

      <section id="skills" className="five">
				<div className="container">
					<header>
						<h2>Experiencia</h2>
					</header>
          <p>Estos son algunos de los stacks que he utilizado en el transcurso de los años como developer</p>
          <article>
              <h4 className="title-agency" >StaffCreativa <span>(Ago - 2016 / Mar -  2018)</span> </h4>
              <p  className="subtitle-agency" >Agencia de marketing digital y desarrollo de software.</p>
              <div className="techrow" >
                  <img  src="http://tinyimg.io/i/98xjrS8.png" width="12%"  />
                  <span class="icon fa-plus"></span>
                  <img  src={stylus}  width="15%"  />
                  <span class="icon fa-plus"></span>
                  <img  src="http://tinyimg.io/i/QwOeoeu.png" width="30%" />
              </div>
          </article>
          <article>
              <h4 className="title-agency">Tismart <span>(May - 2018 / Dic -  2018)</span> </h4>
              <p  className="subtitle-agency" >Frontend Developer.</p>
              <div className="techrow" >
                  <h2>Pug</h2>
                  <span class="icon fa-plus"></span>
                  <img  src={sass}  width="12%"  />
                  <span class="icon fa-plus"></span>
                  <img  src="http://tinyimg.io/i/uhirUDt.png"  width="12%" />
                  <span class="icon fa-plus"></span>
                  <img  src={nuxt}  width="25%" />
              </div>
          </article>
          <article>
              <h4 className="title-agency">GFI Perú - Hundred SAC <span>(Feb - 2019 / Marzo - 2021)</span></h4>
              <p  className="subtitle-agency" >Frontend Developer.</p>
              <div className="techrow" >
                  <img  src={angular}  width="12%" />
                  <span class="icon fa-plus"></span>
                  <img  src={sass} width="12%"  />
                  <span class="icon fa-plus"></span>
                  <img  src="http://tinyimg.io/i/4GWKgrj.png"   width="30%"  />
              </div>
              <div className="techrow" >
                  <img  src={react}  width="12%"  />
                  <span class="icon fa-plus"></span>
                  <img  src={gatsby}  width="12%"  />
                  <span class="icon fa-plus"></span>
                  <img  src={material}  width="12%"  />
                  <span class="icon fa-plus"></span>
                  <img  src={graphql}  width="12%" />
              </div>
          </article>
          <article>
              <h4 className="title-agency">Otras tecnologias</h4>
              <div className="techrow" >
                  <img  src="http://tinyimg.io/i/s85Mght.png"  width="30%" />
                  <img  src="http://tinyimg.io/i/p28gP1z.png"  width="20%" />
                  <img  src="https://i.ibb.co/tC2fXPR/hasura.png"  width="25%" />
              </div>
              <div className="techrow" >
                  <img  src="https://i.ibb.co/GP0RbWW/auth0-logo-whitebg.png"  width="25%" />
              </div>
          </article>
				</div>
			</section>

			<section id="contact" className="six">
				<div className="container">
					<header>
						<h2>Contacto</h2>
					</header>

					<p>
						¿Tienes alguna idea para cambiar el mundo ?  <br /> Ponte en contacto conmigo , te responderé a la brevedad.
					</p>

					<form method="post" action="#">
						<div className="row">
							<div className="col-6 col-12-mobile">
								<input type="text" name="name" placeholder="Nombre" />
							</div>
							<div className="col-6 col-12-mobile">
								<input type="text" name="email" placeholder="Email" />
							</div>
							<div className="col-12">
								<textarea name="message" placeholder="Mensaje" />
							</div>
							<div className="col-12">
								<input type="submit" value="Enviar Mensaje" />
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>

		<PageFooter />
	</Layout>
);

export default IndexPage;
