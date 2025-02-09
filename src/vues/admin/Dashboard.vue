<template>
	<div class="admin">
		<div>
			<div v-if="loading">Chargement en cours ...</div>
			<div v-if="error" class="error">{{ error }}</div>
			<ul v-if="posts.length > 0">
				<li v-for="post in posts" :key="post.id">
					{{ post.nom }}
				</li>
			</ul>
			<div v-else-if="!loading && !error">Aucun article trouvé.</div>
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
		};
	},
	mounted() {
		this.fetchPosts();
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
	},
};
</script>

<style>
.error {
	color: red;
}
</style>