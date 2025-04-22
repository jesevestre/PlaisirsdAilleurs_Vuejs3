<template>

	<PublicMenu />

	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
		</ol>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/2.jpg"
					alt="image de présentation du buffet">
			</div>
			<div class="carousel-item">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/3.jpg"
					alt="image de présentation du buffet">
			</div>
			<div class="carousel-item">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/4.jpg" alt="image de présentation du buffet">
			</div>
			<div class="carousel-item">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/5.jpg" alt="Image de présentation du buffet">
			</div>
			<div class="carousel-item">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/6.jpg" alt="Image de présentation du buffet">
			</div>
			<div class="carousel-item">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/7.jpg" alt="Image de présentation du buffet">
			</div>
			<div class="carousel-item">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/9.jpg" alt="Image de présentation du buffet">
			</div>
			<div class="carousel-item">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/10.jpeg" alt="Image de présentation du buffet">
			</div>
			<div class="carousel-item">
				<img class="img-redimensionnement d-block w-100" src="@/assets/photosCaroussel/11.jpg" alt="Image de présentation du buffet">
			</div>
		</div>
		<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>

	<!-- Temporaire -->
	<div v-if="afficher" class="container d-flex flex-row pt-4 pb-4 mt-4 mb-4 ml-sm-3" id="">
		<div class="row">
			<div class="little-card card col-11 col-10 col-sm-6" style="width: 18rem;">
				<div class="card-body">
					<div class="d-flex align-items-center pb-3">
						<fa :icon="['fas', 'bars']" class="mr-2" />
						<h5 class="card-title mb-1">{{ titre }}</h5>
					</div>
					<h6 class="card-subtitle mb-2 text-muted">{{ sousTitre }}</h6>
					<ul>
						<li>
							{{ point1 }}
						</li>
						<li>
							{{ point2 }}
						</li>
						<li>
							{{ point3 }}
						</li>
						<li>
							{{ point4 }}
						</li>
						<li>
							{{ point5 }}
						</li>
					</ul>
					<div class="row h-0 justify-content-center align-items-center pt-2">
						<router-link to="/public/Reservation" class="slogan-button boutonVert">Réserver en cliquant ici</router-link>
					</div>
				</div>
			</div>
			<div class="col-sm-6">
				<img class="d-block w-100" src="@/assets/photosEvenements/Saint-Valentin.jpg" alt="Image de présentation du buffet">
			</div>
		</div>
	</div>
	<!-- Temporaire -->

	<div class="container d-flex flex-row pt-4 pb-4 mt-4 mb-4 mr-sm-3" id="menu">
		<div class="row">
			<div class="col-sm-6 order-2 order-sm-1">
				<img class="d-block w-100" src="@/assets/photosCaroussel/2.jpg" alt="Image de présentation du buffet">
			</div>
			<div class="little-card card col-11 col-sm-6 order-1 order-sm-2" style="width: 18rem;">
				<div class="card-body">
					<div class="d-flex align-items-center pb-3">
						<fa :icon="['fas', 'bars']" class="mr-2" />
						<h5 class="card-title mb-1">La carte</h5>
					</div>
					<h6 class="card-subtitle mb-2 text-muted">Repas du midi 14,90€</h6>
					<h6 class="card-subtitle mb-2 text-muted">Soirs, weekends et jours feriés 23,90€</h6>
					<h6 class="card-subtitle mb-2 text-muted">Label certifié <i>Frais Equilibre Santé</i></h6>
					<ul>
						<li>
							Cuisine asiatique et européenne
						</li>
						<li>
							Wok
						</li>
						<li>
							Sushi
						</li>
						<li>
							Grillade
						</li>
						<li>
							Plancha
						</li>
					</ul>
					<img class="icone" src="@/assets/images/phoneModif.png" alt="Logo téléphone">&nbsp;<a href="tel:+33625926100" class="card-link">06 25 92 61 00</a>
				</div>
			</div>
		</div>
	</div>

	<div class="container d-flex flex-row pt-4 pb-4 mt-4 mb-4 ml-sm-3" id="emporter">
		<div class="row">
			<div class="little-card card col-11 col-10 col-sm-6" style="width: 18rem;">
				<div class="card-body">
					<div class="d-flex align-items-center pb-3">
						<fa :icon="['fas', 'cart-shopping']" class="mr-2" />
						<h5 class="card-title mb-1">Commande à emporter</h5>
					</div>
					<h6 class="card-subtitle mb-2 text-muted">Le midi entre 11h30 et 14h30</h6>
					<ul>
						<li>
							10€ le panier de :
								<ul>
									<li>Sushis</li>
									<li>Fruits de mer</li>
									<li>Poisson</li>
									<li>Viande</li>
								</ul>
						</li>
						<li>
							5€ le panier de :
								<ul>
									<li>Accompagnement</li>
									<li>Surpise</li>
								</ul>
						</li>
					</ul>
					<!-- <div class="row h-0 justify-content-center align-items-center pt-2">
						<router-link to="/public/AEmporter" class="slogan-button boutonVert">Commander en cliquant ici</router-link>
					</div> -->
					<div class="row h-0 justify-content-center align-items-center pt-2">
						<router-link to="/public/Reservation" class="slogan-button boutonVert">Commander en cliquant ici</router-link>
					</div>
				</div>
			</div>
			<div class="col-sm-6">
				<img class="d-block w-100" src="@/assets/photosCaroussel/3.jpg" alt="Image de présentation du buffet">
			</div>
		</div>
	</div>

	<div class="container d-flex flex-row pt-4 pb-4 mt-4 mb-4 mr-sm-3" id="horaires">
		<div class="row">
			<div class="col-sm-6 order-2 order-sm-1">
				<img class="d-block w-100" src="@/assets/photosCaroussel/1.jpg" alt="Image de présentation du buffet">
			</div>
			<div class="little-card card col-11 col-sm-6 order-1 order-sm-2" style="width: 18rem;">
				<div class="card-body">
					<div class="d-flex align-items-center pb-3">
						<fa :icon="['fas', 'clock']" class="mr-2" />
						<h5 class="card-title mb-1">Horaires</h5>
					</div>
					<div class="row">
						<div v-if="jourDeLaSemaine == 'lundi'" class="col-6 pb-3">
							<h6 class="card-subtitle mb-2 text-muted font-weight-bold">Lundi</h6>
							<p class="card-text font-weight-bold">11h30 - 14h30</p>
						</div>
						<div v-else class="col-6 pb-3">
							<h6  class="card-subtitle mb-2 text-muted">Lundi</h6>
							<p class="card-text">11h30 - 14h30</p>
						</div>

						<div v-if="jourDeLaSemaine == 'mardi'" class="col-6 pb-3">
							<h6 class="card-subtitle mb-2 text-muted font-weight-bold">Mardi</h6>
							<p class="card-text font-weight-bold">11h30 - 14h30</p>
						</div>
						<div v-else class="col-6 pb-3">
							<h6  class="card-subtitle mb-2 text-muted">Mardi</h6>
							<p class="card-text">11h30 - 14h30</p>
						</div>

						<div v-if="jourDeLaSemaine == 'mercredi'" class="col-6 pb-3">
							<h6 class="card-subtitle mb-2 text-muted"><b>Mercredi</b></h6>
							<p class="card-text"><b>11h30 - 14h30</b></p>
						</div>
						<div v-else class="col-6 pb-3">
							<h6  class="card-subtitle mb-2 text-muted">Mercredi</h6>
							<p class="card-text">11h30 - 14h30</p>
						</div>

						<div v-if="jourDeLaSemaine == 'jeudi'" class="col-6 pb-3">
							<h6 class="card-subtitle mb-2 text-muted font-weight-bold">Jeudi</h6>
							<p class="card-text font-weight-bold">11h30 - 14h30</p>
						</div>
						<div v-else class="col-6 pb-3">
							<h6  class="card-subtitle mb-2 text-muted">Jeudi</h6>
							<p class="card-text">11h30 - 14h30</p>
						</div>

						<div v-if="jourDeLaSemaine == 'vendredi'" class="col-6 pb-3">
							<h6 class="card-subtitle mb-2 text-muted font-weight-bold">Vendredi</h6>
							<p class="card-text font-weight-bold">11h30 - 14h30 / 19h - 22h</p>
						</div>
						<div v-else class="col-6 pb-3">
							<h6  class="card-subtitle mb-2 text-muted">Vendredi</h6>
							<p class="card-text">11h30 - 14h30 / 19h - 22h</p>
						</div>

						<div v-if="jourDeLaSemaine == 'samedi'" class="col-6 pb-3">
							<h6 class="card-subtitle mb-2 text-muted font-weight-bold">Samedi</h6>
							<p class="card-text font-weight-bold">11h30 - 14h30</p>
						</div>
						<div v-else class="col-6 pb-3">
							<h6  class="card-subtitle mb-2 text-muted">Samedi</h6>
							<p class="card-text">19h - 22h</p>
						</div>

						<div v-if="jourDeLaSemaine == 'dimanche'" class="col-6 pb-3">
							<h6 class="card-subtitle mb-2 text-muted font-weight-bold">Dimanche</h6>
							<p class="card-text font-weight-bold">Fermé</p>
						</div>
						<div v-else class="col-6 pb-3">
							<h6  class="card-subtitle mb-2 text-muted">Dimanche</h6>
							<p class="card-text">Fermé</p>
						</div>

					</div>
					<img class="icone" src="@/assets/images/phoneModif.png" alt="Logo téléphone">&nbsp;<a
						href="tel:+33625926100" class="card-link">06 25 92 61 00</a>
				</div>
			</div>
		</div>
	</div>

	<div class="container d-flex flex-row pt-4 pb-4 mt-4 mb-4 ml-sm-3 localisation" id="localisation">
		<div class="row">
			<div class="little-card card col-11 col-sm-7" style="width: 18rem;">
				<div class="card-body">
					<div class="d-flex align-items-center pb-3">
						<fa :icon="['fas', 'location-dot']" class="mr-2" />
						<h5 class="card-title mb-1">Localisation</h5>
					</div>
					<h6 class="card-subtitle mb-2 text-muted mb-4">91140 Villebon-sur-Yvette,<br /> 4 Avenue de la
						Baltique</h6>
					<ul>
						<li>
							Parking gratuit et sécurisé de 200 places
						</li>
						<li>
							Accessible en bus numéro 02, 23, 22, 17
						</li>
						<li>
							Accessible pour les personnes à mobilité réduite (PMR)
						</li>
					</ul>
					<a href="https://maps.app.goo.gl/yGJehcPyTSjADKdf9" class="card-link" target="_blank">Ouvrir Google Maps</a>
				</div>
			</div>
			<div class="col-sm-5">
				<iframe class="card-map-iframe"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4355.731786422988!2d2.2042835776347385!3d48.68603327130949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5d7005f165f6b%3A0x719f7b1af10f72ad!2sPLAISIRS%20D&#39;AILLEURS!5e1!3m2!1sfr!2sfr!4v1731681092567!5m2!1sfr!2sfr"
					style="border:0;" allowfullscreen="" loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	</div>

	<div class="container d-flex flex-row pt-4 pb-4 mt-4 mb-4 mr-sm-3" id="evenements">
		<div class="row">
			<div class="col-sm-6 order-2 order-sm-1">
				<img class="d-block w-100" src="@/assets/photosCaroussel/7.jpg" alt="Image de présentation du buffet">
			</div>
			<div class="little-card card col-11 col-sm-6 order-1 order-sm-2" style="width: 18rem;">
				<div class="card-body">
					<div class="d-flex align-items-center pb-3">
						<fa :icon="['fas', 'champagne-glasses']" class="mr-2" />
						<h5 class="card-title mb-1">Événements</h5>
					</div>
					<h6 class="card-subtitle mb-2 text-muted">Réservation pour des événements</h6>
					<ul>
						<li>
							Restaurant avec ambiance conviviale et musicale avec piano de scène
						</li>
						<li>
							Grande salle de 260 places climatisée
						</li>
						<li>
							Salle privatisable de 20 places
						</li>
						<li>
							Seminaires, repas d'affaires
						</li>
						<li>
							Anniversaire, mariage
						</li>
						<li>
							Terrasse de 60 places
						</li>
					</ul>
					<div class="row h-0 justify-content-center align-items-center pt-2">
						<router-link to="/public/Reservation" class="slogan-button boutonVert">Réserver en cliquant ici</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>


<script>
import PublicMenu from '@/components/public/PublicMenu.vue';
import { onMounted } from 'vue';

/* Partie bdd */
import axios from 'axios';

export default {
	name: 'Home',
	components: {
        PublicMenu,
    },
	setup() {
		onMounted(() => {
			const carouselElement = document.getElementById('carouselExampleIndicators');
			const carousel = new bootstrap.Carousel(carouselElement, {
				interval: 6000,
				ride: 'carousel'
			});

		});
	},
	/* Partie bdd */
	data() {
		return {
			posts: [],
			loading: false,
			error: null,
			afficher: false,
		};
	},
	mounted() {
		this.enregistrerVisiteur();
		this.fetchPosts();
	},
	methods: {
		async enregistrerVisiteur() {
			try {
				const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
				await axios.get(rootUrl + 'backend/controlleur/controlleur_addVisiteur.php/posts',
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
			} catch (error) {
				console.error('Erreur lors de l’enregistrement du visiteur :', error);
			};
		},

		async fetchPosts() {
			this.loading = true;
			this.error = null;

			try {
				const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
				const response = await axios.get(rootUrl + 'backend/vue/accueil.php/posts');
				this.posts = response.data;

				this.posts.forEach(post => {
					const date_debut = post.date_debut !== '0000-00-00' ? new Date(post.date_debut.replace(' ', 'T')) : null;
					const date_fin = post.date_fin !== '0000-00-00' ? new Date(post.date_fin.replace(' ', 'T')) : null;
					const dateToday = new Date();

					if(date_debut && date_fin) {
						if((date_debut <= dateToday && dateToday <= date_fin)) {
							this.titre = post.titre;
							this.sousTitre = post.sousTitre;
							this.point1 = post.point1;
							this.point2 = post.point2;
							this.point3 = post.point3;
							this.point4 = post.point4;
							this.point5 = post.point5;
							this.afficher = true;
						}
					}
				});
			} catch (error) {
				this.error = 'Adresse de récupération des données incorrecte.';
			} finally {
				this.loading = false;
			}
		},
	},

	computed: {
		jourDeLaSemaine() {
			const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
			const aujourdHui = new Date();
			return jours[aujourdHui.getDay()];
		},
	},
}
</script>


<style>
.carousel-inner .carousel-item {
	transition: transform 0.6s ease-in;
}

.carousel-control-prev,
.carousel-control-next {
	opacity: 1;
}

.img-redimensionnement {
	max-height: 75vh;
	width: 100%;
	object-fit: cover;
	object-position: center;
}

.card {
	border: none;
	background-color: #FFF;
}

.card-map-iframe {
	width: 200%;
	height: 300px;
}

.icone {
	width: 15px;
	margin-top: -2px !important;
}

.slogan-button {
	border: 1px solid;
	border-color: #7985B1;
	padding: 1.5% 2.8rem;
	background-color: #888;
	color: #FFF !important;

	text-decoration: none;
	font-size: 115%;
	font-weight: 600;
	cursor: pointer;
}

.slogan-button:hover {
	background-color: #777;
	text-decoration: none;
}

.boutonVert {
	background-color: #006600;
}
.boutonVert:hover {
	background-color: #2b2f52;
}

.boutonJaune {
	background-color: #DAA520;
	border-color: white;
}

@media screen and (max-width: 865px) {
	.card-map-iframe {
		width: 150%;
	}

	.slogan-button {
		padding: 1.5% 0.5rem;
		font-size: 100%;
	}
}

@media screen and (max-width: 665px) {
	.card-map-iframe {
		width: 100%;
	}
}

@media screen and (max-width: 575px) {
	.little-card {
		display: block;
		margin-left: auto;
		margin-right: auto;

		margin-top: 10px;
		margin-bottom: 10px;
	}

	.localisation {
		margin-bottom: 100px !important;
	}

	.card-map-iframe {
		width: 100%;
		height: 150%;
	}

	.slogan-button {
		padding: 1.5% 1.5rem;
	}
}
</style>