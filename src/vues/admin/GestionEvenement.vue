<template>
	<div class="container mt-5 mb-5">
		<form @submit.prevent="majEvenement">

			<div class="row">
				<div class="mb-3 col-md-6">
					<label for="titre" class="form-label">Titre :</label>
					<input type="text" class="form-control" v-model="posts.titre" id="titre" required>
				</div>

				<div class="mb-3 col-md-6">
					<label for="sousTitre" class="form-label">Sous-titre :</label>
					<input type="text" class="form-control" v-model="posts.sousTitre" id="sousTitre" required>
				</div>

				<div class="mb-3 col-md-6">
					<label for="point1" class="form-label">Point 1 :</label>
					<input type="text" class="form-control" v-model="posts.point1" id="point1">
				</div>

				<div class="mb-3 col-md-6">
					<label for="point2" class="form-label">Point 2 :</label>
					<input type="text" class="form-control" v-model="posts.point2" id="point2">
				</div>

				<div class="mb-3 col-md-6">
					<label for="point3" class="form-label">Point 3 :</label>
					<input type="text" class="form-control" v-model="posts.point3" id="point3">
				</div>

				<div class="mb-3 col-md-6">
					<label for="point4" class="form-label">Point 4 :</label>
					<input type="text" class="form-control" v-model="posts.point4" id="point4">
				</div>

				<div class="mb-3 col-md-6">
					<label for="point5" class="form-label">Point 5 :</label>
					<input type="text" class="form-control" v-model="posts.point5" id="point5">
				</div>

				<div class="mb-3 col-md-6">
					<label for="date_debut" class="form-label">Date de début :</label>
					<input type="date" class="form-control" v-model="posts.date_debut" id="date_debut" required>
				</div>

				<div class="mb-3 col-md-6">
					<label for="date_fin" class="form-label">Date de fin :</label>
					<input type="date" class="form-control" v-model="posts.date_fin" id="date_fin" required>
				</div>

				<div class="mb-3 col-md-6">
					<label ref="dropContainer" for="imageEvent" class="drop-container form-label" id="dropcontainer">
						<span class="drop-title">Déposez l'image ici :</span>
						<input ref="fileInput" type="file" class="form-control" name="imageEvent" id="imageEvent"
							accept="image/*">
					</label>
				</div>
			</div>

			<div class="text-center mt-5 mb-5">
				<button type="submit" class="btn btn-primary mt-5 mb-5">Mettre à jour</button>
			</div>

		</form>

		<div class="col-12" v-if="success">
			<div class="alert alert-success" role="alert">
				Evenement mis à jour avec succès !
			</div>
		</div>

		<div class="col-12" v-if="error">
			<div class="alert alert-warning" role="alert">
				Les champs titre, sous-titre et les dates sont obligatoires.
			</div>
		</div>

		<div class="col-12" v-if="error2">
			<div class="alert alert-danger" role="alert">
				Erreur lors de l'envoi du formulaire, veuillez contacter l'administrateur.
			</div>
		</div>

	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'GestionEvenement',

	data() {
		return {
			loading: false,
			success: false,
			error: false,
			error2: false,

			posts: {
				titre: '',
				sousTitre: '',
				point1: '',
				point2: '',
				point3: '',
				point4: '',
				point5: '',
				imageEvent: '',
				date_debut: '',
				date_fin: ''
			},
		};
	},
	mounted() {
		this.fetchPosts();

		const dropContainer = this.$refs.dropContainer;
		const fileInput = this.$refs.fileInput;
		if (dropContainer && fileInput) {
			dropContainer.addEventListener("dragover", (e) => {
				e.preventDefault();
				dropContainer.classList.add("drop-active");
			});

			dropContainer.addEventListener("dragenter", () => {
				dropContainer.classList.add("drop-active");
			});

			dropContainer.addEventListener("dragleave", () => {
				dropContainer.classList.remove("drop-active");
			});

			dropContainer.addEventListener("drop", (e) => {
				e.preventDefault();
				dropContainer.classList.remove("drop-active");
				fileInput.files = e.dataTransfer.files;
			});
		}
	},

	methods: {
		async fetchPosts() {
			this.loading = true;

			try {
				const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.posts ? `:${window.location.posts}` : ''}/`;
				const response = await axios.get(rootUrl + 'backend/vue/adminEvenement.php/posts');
				this.posts = response.data;

			} catch (error) {
				this.error = 'Adresse de récupération des données incorrecte.';
			} finally {
				this.loading = false;
			}
		},

		async majEvenement() {
			if (!this.posts.titre || !this.posts.sousTitre || !this.posts.date_debut || !this.posts.date_fin) {
				this.success = false;
				this.error = true;
				this.error2 = false;
				return;
			}

			const formData = new FormData();
			formData.append('titre', this.posts.titre);
			formData.append('sousTitre', this.posts.sousTitre);
			formData.append('point1', this.posts.point1);
			formData.append('point2', this.posts.point2);
			formData.append('point3', this.posts.point3);
			formData.append('point4', this.posts.point4);
			formData.append('point5', this.posts.point5);
			formData.append('date_debut', this.posts.date_debut);
			formData.append('date_fin', this.posts.date_fin);

			// Ajoute le fichier s'il est sélectionné
			const file = this.$refs.fileInput.files[0];
			if (file) {
				formData.append('imageEvent', file);
			}

			try {
				const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
				await axios.post(rootUrl + 'backend/controlleur/controlleur_majEvenement.php/posts', formData);
				this.success = true;
				this.error = false;
				this.error2 = false;
			} catch (error) {
				this.success = false;
				this.error = false;
				this.error2 = true;
				console.error('Erreur de sortie : ', error);
				if (error.response) {
					console.log('Réponse serveur :', error.response.data);
				}
			}
		},
	},
}
</script>

<style>
.error {
	color: red;
}

.drop-container {
  border: 2px dashed #aaa;
  padding: 20px;
  text-align: center;
  transition: background-color 0.3s;
  cursor: pointer;
}
.drop-container.drop-active {
  background-color: #e9ecef;
}
</style>