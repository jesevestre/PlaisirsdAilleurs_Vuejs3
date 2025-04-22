<template>
    <div class="public">
        <PublicTitreMenu/>
        <router-view/>
        <PublicFooter/>
    </div>
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