<template>
	<div class="container mt-5 mb-5">
		<form @submit.prevent="majEvenement">

			<div class="row">
				<div class="mb-3 col-md-6">
					<label for="titre" class="form-label">Titre :</label>
					<input type="text" class="form-control" v-model="posts.titre" id="titre">
				</div>

				<div class="mb-3 col-md-6">
					<label for="sousTitre" class="form-label">Sous-titre :</label>
					<input type="text" class="form-control" v-model="posts.sousTitre" id="sousTitre">
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
					<input type="date" class="form-control" v-model="posts.date_debut" id="date_debut">
				</div>

				<div class="mb-3 col-md-6">
					<label for="date_fin" class="form-label">Date de fin :</label>
					<input type="date" class="form-control" v-model="posts.date_fin" id="date_fin">
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
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'GestionEvenement',

	data() {
		return {
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
			loading: false,
			error: null,
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
			this.error = null;

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
			try {
				console.log("test");
				const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
				await axios.put(rootUrl + 'backend/vue/controller..../posts/1', this.posts);
				alert("Événement mis à jour avec succès !");
			} catch (error) {
				this.error = "Échec de la mise à jour.";
			}
		}
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