<template>
	<div class="public">
		<div class="container pt-5 pb-5 mb-5">
			<div class="row pb-5 mb-5">
				<div class="col-12 pb-5 mb-5 text-center">
					<div class="pt-5">
						<h4>Pour connaître les modalités et procéder à votre réservation,<br /> veuillez contacter ce numéro en cliquant ici :</h4>
					</div>
					<div class="pt-5 mt-4 pb-5 mb-5">
						<a href="tel:+33625926100" class="btn btn-success fw-bold text-white"><fa :icon="['fas', 'phone']" class="me-2" /> 06 25 92 61 00</a>
					</div>
					<div class="pt-5 mt-5 pb-5 mb-5">
						<router-link class="btn btn-primary fw-bold" to="/">Retour</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Reservation',
}
</script>

<style scoped>
.public {
	min-height: 89.05vh;
}
</style>