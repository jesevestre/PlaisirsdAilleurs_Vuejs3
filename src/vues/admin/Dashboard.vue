<template>
	<div class="admin">
		<div class="d-flex justify-content-center align-items-center text-center vh-100 pt-5 pb-5">
			<div v-if="loading2">Chargement en cours ...</div>
			<div v-if="error2" class="error">{{ error2 }}</div>
			<ul>
				Visiteurs depuis le <u>04 Mars 2025</u> : <b>{{ visiteurs[0]?.total }}</b>
			</ul>
		</div>

		<div>
			<p><u>Evenements en base de données :</u></p>
			<div v-if="loading">Chargement en cours ...</div>
			<div v-if="error" class="error">{{ error }}</div>
			<ul v-if="posts.length > 0">
				<li v-for="post in posts" :key="post.id">
					{{ post.nom }}
				</li>
			</ul>
			<div v-else-if="!loading && !error">Aucun article trouvé.</div>
			<p><u>Fin évenements en base de données :</u></p>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Dashboard',
	data() {
		return {
			posts: [],
			loading: false,
			error: null,

			visiteurs: [],
			loading2: false,
			error2: null,

		};
	},
	mounted() {
		this.fetchPosts();
		this.fetchPosts2();
	},
	methods: {
		async fetchPosts() {
			this.loading = true;
			this.error = null;

			try {
				const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
				const response = await axios.get(rootUrl + 'backend/vue/adminDashboard.php/posts');
				
				this.posts = response.data;
			} catch (error) {
				this.error = 'Adresse de récupération des données incorrecte.';
			} finally {
				this.loading = false;
			}
		},

		async fetchPosts2() {
			this.loading2 = true;
			this.error2 = null;

			try {
				const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
				const response = await axios.get(rootUrl + 'backend/vue/adminVisiteurs.php/posts');

				this.visiteurs = response.data;
			} catch (error2) {
				this.error2 = 'Adresse de récupération des données incorrecte.';
			} finally {
				this.loading2 = false;
			}
		},
	},
};
</script>

<style>
.error {
	color: red;
}
</style>