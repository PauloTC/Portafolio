import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

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

const sections = [
	{ id: 'top', name: 'Intro', icon: 'fa-home' },
	{ id: 'portfolio', name: 'Proyectos', icon: 'fa-th' },
	{ id: 'about', name: 'Sobre Mi', icon: 'fa-user' },
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
							<br />
							Soy Frontend Developer
						</h2>
						<p>He realizado muchos proyectos, descubrelos.</p>
					</header>

					<footer>
						<Scroll type="id" element={'portfolio'}>
							<a href="#portfolio" className="button">
								Ver más
							</a>
						</Scroll>
					</footer>
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
								<a href="http://www.uwiener.edu.pe/" target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/oMzeD4Z.png" alt="" />
								</a>
								<header>
									<h3>Universidad Wiener</h3>
								</header>
							</article>
                            <article className="item">
								<a href="http://www.edicionycolor.com.pe/" target="_blank" className="image fit">
									<img src={pic9} alt="" />
								</a>
								<header>
									<h3>Edicion y Color</h3>
								</header>
							</article>
                            <article className="item">
								<a href="http://www.ahsecoperu.com.pe/" target="_blank" className="image fit">
									<img src={pic12} alt="" />
								</a>
								<header>
									<h3>Ahsecoperu</h3>
								</header>
							</article>
						</div>
						<div className="col-4 col-12-mobile">
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
									<img src={pic10} alt="" />
								</a>
								<header>
									<h3>Tecnifajas</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://tec-academy.netlify.com/" target="_blank" className="image fit">
									<img src={pic13} alt="" />
								</a>
								<header>
									<h3>Tec Academy</h3>
								</header>
							</article>
						</div>
						<div className="col-4 col-12-mobile">
							<article className="item">
								<a href="https://finisterre.com.pe/" target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/2trdjzv.png" alt="" />
								</a>
								<header>
									<h3>Mapfre Finisterre</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://datathon-belcorp.netlify.com/" target="_blank" className="image fit">
									<img src="http://tinyimg.io/i/PZUZodj.png" alt="" />
								</a>
								<header>
									<h3>Datathon Belcorp</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://www.steelser.com.pe/" target="_blank" className="image fit">
									<img src={ pic11 } alt="" />
								</a>
								<header>
									<h3>Steelser</h3>
								</header>
							</article>
                            <article className="item">
								<a href="http://www.barqueros.com/" target="_blank" className="image fit">
									<img src={pic14} alt="" />
								</a>
								<header>
									<h3>Barqueros</h3>
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
                            Descubrí mi pasion por el desarollo de Software en el año 2015, mientras cursaba la carrera de Ingenieria de sistemas en la  
                            <strong> Universidad Inca Garcilazo de la Vega.</strong>
                            <br />
                            Las tecnologias con las que trabajo las aprendí llevando cursos online , leyendo articulos , retandome constantemente y practicando bastante. 

                            Me mantengo en constante aprendizaje porque considero que constantemente surgen equipos con nuevas ideas y mejores formas de poder resolver los retos que nos plantean los diferentes proyectos. 
                    </p>


				</div>
			</section>

            <section id="skills" className="four">
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
                        <p  className="subtitle-agency" >Equipo de desarollo de software.</p>
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
                        <h4 className="title-agency">GFI Perú - Hundred SAC <span>(Feb - 2019 / Actualidad)</span></h4>
                        <p  className="subtitle-agency" >Equipo de desarollo de software.</p>
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
                            <img  src={element}  width="20%" />
                            <img  src="http://tinyimg.io/i/0tyfXQv.png"  width="15%" />
                        </div>
                    </article>
					
				</div>
			</section>

			<section id="contact" className="five">
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
								<input type="text" name="name" placeholder="Name" />
							</div>
							<div className="col-6 col-12-mobile">
								<input type="text" name="email" placeholder="Email" />
							</div>
							<div className="col-12">
								<textarea name="message" placeholder="Message" />
							</div>
							<div className="col-12">
								<input type="submit" value="Send Message" />
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
