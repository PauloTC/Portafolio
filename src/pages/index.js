import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/britanico.png';
import pic3 from '../assets/images/uwiener.png';
import pic4 from '../assets/images/piramide.png';
import pic5 from '../assets/images/msinmobiliaria.png';
import pic6 from '../assets/images/finisterre.png';
import pic7 from '../assets/images/datathon.png';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

import sass from '../assets/images/sass.svg'
import stylus from '../assets/images/stylus.svg'
import react from '../assets/images/react.svg'
import angular from '../assets/images/angular.svg'
import jquery from '../assets/images/jquery.png'
import vue from '../assets/images/vue.png'
import graphql from '../assets/images/graphql.svg'
import apollo from '../assets/images/apollo.png'
import html from '../assets/images/html.png'
import nuxt from '../assets/images/nuxt.svg'
import primeng from '../assets/images/primeng.png'
import material from '../assets/images/material-ui.svg'
import gatsby from '../assets/images/gatsby.svg'
import git from '../assets/images/git.png'
import element from '../assets/images/element.svg'
import okta from '../assets/images/okta.png'

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
							Hola! Me llamo <strong>Paulo !</strong>
							<br />
							Frontend Developer
						</h2>
						<p>He realizado muchos proyectos, descubrelos.</p>
					</header>

					<footer>
						<Scroll type="id" element={'portfolio'}>
							<a href="#portfolio" className="button">
								Show me
							</a>
						</Scroll>
					</footer>
				</div>
			</section>

			<section id="portfolio" className="two">
				<div className="container">
					<header>
						<h2>Portfolio</h2>
					</header>

					<p>
						Life will feel it is always a great need for eu valley, the valley CNN ridiculous smile at any
						time chat mainstream clinical homes. Mauris floor was very warm and we need it. One customer now
						nibh Bureau dark pools behavior.
					</p>

					<div className="row">
						<div className="col-4 col-12-mobile">
							<article className="item">
								<a href="https://www.britanico.edu.pe/"  target="_blank" className="image fit">
									<img src={pic2} alt="" />
								</a>
								<header>
									<h3>Britanico</h3>
								</header>
							</article>
							<article className="item">
								<a href="http://www.uwiener.edu.pe/" target="_blank" className="image fit">
									<img src={pic3} alt="" />
								</a>
								<header>
									<h3>Universidad Wiener</h3>
								</header>
							</article>
						</div>
						<div className="col-4 col-12-mobile">
							<article className="item">
								<a href="https://www.ladrillospiramide.com/" target="_blank" className="image fit">
									<img src={pic4} alt="" />
								</a>
								<header>
									<h3>Ladrillos Piramide</h3>
								</header>
							</article>
							<article className="item">
								<a href="http://msinmobiliaria.pe/" target="_blank" className="image fit">
									<img src={pic5} alt="" />
								</a>
								<header>
									<h3>MsInmobiliaria</h3>
								</header>
							</article>
						</div>
						<div className="col-4 col-12-mobile">
							<article className="item">
								<a href="https://finisterre.com.pe/" target="_blank" className="image fit">
									<img src={pic6} alt="" />
								</a>
								<header>
									<h3>Mapfre Finisterre</h3>
								</header>
							</article>
							<article className="item">
								<a href="https://datathon-belcorp.netlify.com/" target="_blank" className="image fit">
									<img src={pic7} alt="" />
								</a>
								<header>
									<h3>Datathon Belcorp</h3>
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

                    <a href="/#" className="image featured">
						<img src={pic8} alt="" />
					</a>

                    <p>
						Developers football competition in diameter big price to layer the pot. Chavez ultricies care
						who wants to CNN. Lobortis elementum aliquet eget a den of which they do not hold it in hatred
						developers nor the mountains of the deposit slip. The element of time, sem ante ullamcorper
						dolor nulla quam placerat viverra environment is not with our customers. Free makeup and skirt
						until the mouse or partners or to decorate each targeted.
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
                            <img  src={html} width="12%"  />
                            <span class="icon fa-plus"></span>
                            <img  src={stylus}  width="15%"  />
                            <span class="icon fa-plus"></span>
                            <img  src={jquery} width="30%" />
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
                            <img  src={vue}  width="12%" />
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
                            <img  src={primeng}   width="30%"  />
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
                        <h4 className="title-agency">Freelancer</h4>
                        <div className="techrow" >
                            <img  src={apollo}  width="30%" />
                            <img  src={git}  width="20%" />
                            <img  src={element}  width="20%" />
                            <img  src={okta}  width="15%" />
                        </div>
                    </article>
					
				</div>
			</section>

			<section id="contact" className="five">
				<div className="container">
					<header>
						<h2>Contact</h2>
					</header>

					<p>
						The element of time, sem ante ullamcorper dolor nulla quam placerat viverra environment is not
						with our customers. Free makeup and skirt until the mouse. Japan this innovative and ultricies
						carton salad clinical ridiculous now passes from enhanced. Mauris pot innovative care for my
						pain.
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
