<template>
    <h1>
        <fa icon="fan" /> Plaisirs d'Ailleurs
    </h1>
</template>

<script>
export default {
    name: 'PublicTitre',
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

@media screen and (max-width: 575px) {
	h1 {
		font-size: 2.4rem;
		padding-bottom: 10px;
	}
}
</style>