<template>
	<div class="menu-div">
		<a href="#menu" class="bouton-menu">La&nbsp;carte</a>&nbsp;|
		<a href="#emporter" class="bouton-menu">À&nbsp;emporter</a>&nbsp;|
		<a href="#horaires" class="bouton-menu">Horaires</a>&nbsp;|
		<a href="#localisation" class="bouton-menu">Localisation</a>&nbsp;|
		<a href="#evenements" class="bouton-menu">Événements</a>
	</div>
</template>

<script>
export default {
    name: 'PublicMenu',
}
</script>

<style>
.menu-div {
	text-align: center;
}
.bouton-menu {
	text-align: center;
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
	text-decoration: none !important;
}
</style>