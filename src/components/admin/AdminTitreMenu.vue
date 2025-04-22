<template>
    <h1>
        <img class="img_logo" src="/public/logo_plaisirsdailleurs.gif" alt="Logo PLaisirs d'Ailleurs"> Espace admin
    </h1>

    <div class="menu-div">
            <router-link class="bouton-menu" to="/admin/GestionEvenement">Évenement</router-link>&nbsp;|
            <router-link class="bouton-menu" to="/admin/StatsVisiteurs">Statistiques</router-link>&nbsp;|
            <button class="bouton-menu" @click="logout()">Déconnexion</button>
        </div>
</template>

<script>
import { accountService } from '@/_services';

export default {
    name: 'AdminTitreMenu',
    methods:{
        logout(){
            accountService.logout();
            this.$router.push('/');
        }
    }
}
</script>

<style>
h1 {
    font-family: "Sour Gummy", sans-serif;
    display: block;
    text-align: center;

    padding-top: 20px;
    padding-bottom: 20px;

    font-size: 3.5rem;
}

.menu-div {
	text-align: center;
}
.bouton-menu {
	text-align: center;
    background-color: #EEF;
	color: #444;
	border: none;
	margin: 4px 2px;
	outline: none;
	font-size: 18px;
	cursor: pointer;
	text-decoration: none;
}
.bouton-menu:hover {
	color: #777;
    text-decoration: underline;
}

@media screen and (max-width: 575px) {
	h1 {
		font-size: 2.5rem;
		padding-bottom: 10px;
	}
}
</style>