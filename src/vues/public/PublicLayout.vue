<template>
    <PublicTitreMenu/>
    <router-view/>
    <PublicFooter/>
</template>

<script>
import PublicTitreMenu from '@/components/public/PublicTitre.vue';
import PublicFooter from '@/components/Footer.vue';

export default {
    name: 'PublicLayout',
    components: {
        PublicTitreMenu,
        PublicFooter,
    },
}
</script>