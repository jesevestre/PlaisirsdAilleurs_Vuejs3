import { createRouter, createWebHistory } from 'vue-router';

import PublicLayout from '@/vues/public/PublicLayout.vue';
import Home from '@/vues/public/Home.vue';
import Reservation from '@/vues/public/Reservation.vue';
import AEmporter from '@/vues/public/AEmporter.vue';
import NotFound from '@/vues/public/NotFound.vue';

import AdminLayout from '@/vues/admin/AdminLayout.vue';
import Dashboard from '@/vues/admin/Dashboard.vue'; 
import UserIndex from '@/vues/admin/users/UserIndex.vue';
import UserEdit from '@/vues/admin/users/UserEdit.vue';
import UserAdd from '@/vues/admin/users/UserAdd.vue';

import Login from '@/vues/admin/auth/Login.vue';
import { authGuard } from '@/_helpers/auth-guard.js';
import { authGuardLogin } from '@/_helpers/auth-guard.js';

const routes = [
	{
		path: '/',
		name: 'public',
		component: PublicLayout,
		children: [
			{ path: '/', name: 'Home', component: Home },
			{ path: '/Reservation', name: 'Reservation', component: Reservation },
			{ path: '/AEmporter', name: 'AEmporter', component: AEmporter },
			{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
		]
	},
	{
		path: '/admin',
		name: 'admin',
		component: AdminLayout,
		children: [
			{ path: 'Dashboard', name: 'Dashboard', component: Dashboard },
			{ path: 'users/UserIndex', component: UserIndex },
			{ path: 'users/UserEdit/:id(\\d+)', component: UserEdit, props: true },
			{ path: 'users/UserAdd', component: UserAdd },
			{ path: 'admin/:pathMatch(.*)*', component: Dashboard },
		]
	},
	{
		path: '/auth/Login', name: 'Login', component: Login,
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
		router.push('/admin/dashboard');
	}
	next();
})

export default router;