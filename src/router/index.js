import { createRouter, createWebHistory } from 'vue-router';

import PublicLayout from '@/vues/public/PublicLayout.vue';
import Home from '@/vues/public/Home.vue';
import Reservation from '@/vues/public/Reservation.vue';
import AEmporter from '@/vues/public/AEmporter.vue';
import NotFound from '@/vues/public/NotFound.vue';

import AdminLayout from '@/vues/admin/AdminLayout.vue';
import StatsVisiteurs from '@/vues/admin/StatsVisiteurs.vue';
import GestionEvenement from '@/vues/admin/GestionEvenement.vue';

import Login from '@/vues/admin/authentification/Login.vue';
import { authGuard } from '@/_helpers/auth-guard.js';
import { authGuardLogin } from '@/_helpers/auth-guard.js';

const routes = [
	{
		path: '/public',
		name: 'public',
		component: PublicLayout,
		children: [
			{ path: '/', name: 'Home', component: Home },
			{ path: 'Reservation', name: 'Reservation', component: Reservation },
			{ path: 'AEmporter', name: 'AEmporter', component: AEmporter },
			{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
		]
	},
	{
		path: '/admin',
		name: 'admin',
		component: AdminLayout,
		children: [
			{ path: 'GestionEvenement', component: GestionEvenement },
			{ path: 'StatsVisiteurs', component: StatsVisiteurs },
			{ path: 'admin/:pathMatch(.*)*', component: GestionEvenement },
		]
	},
	{
		path: '/authentification/Login', name: 'Login', component: Login,
	},
	{
		path: '/:pathMatch(.*)*', redirect: '/'
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// Retourne toujours en haut de la page
		return { top: 0 };
	},
});

// Vérouillage de la partie admin (token)
router.beforeEach((to, form, next) => {
	if(to.matched[0].name == 'admin'){
		authGuard();
	}
	next();
})

// Redirection si token valide, on saute la connexion
router.beforeEach((to, form, next) => {
	if(to.matched[0].name == 'Login' && authGuardLogin() == true){
		router.push('/admin/GestionEvenement');
	}
	next();
})

export default router;