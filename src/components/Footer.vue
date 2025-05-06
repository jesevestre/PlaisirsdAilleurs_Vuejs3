<template>
    <footer class="text-center footer">
		<span>
			<router-link style="color: white" to="/authentification/Login">Accès admin</router-link>&nbsp;-&nbsp;
		</span>
		<span>
			<a style="color: white" href="tel:+33625926100">
				<fa :icon="['fas', 'phone']" />06 25 92 61 00
			</a>
		</span>
	</footer>
</template>

<script>
export default {
    name: 'PublicFooter',
}
</script>

<style>
.footer {
	position: relative;
	width: 100%;

	vertical-align: middle;
	left: 0px;
	right: 0px;
	bottom: 0;

	text-align: center;
	background-color: #444;
	color: white;
}
</style>