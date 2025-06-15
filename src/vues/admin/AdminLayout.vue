<template>
    <AdminTitreMenu />
    <router-view />
    <PublicFooter />
</template>

<script>
import AdminTitreMenu from '@/components/admin/AdminTitreMenu.vue';
import PublicFooter from '@/components/Footer.vue';

/* Gestion session expirée */
import { accountService } from '@/_services';

export default {
    name: 'AdminLayout',
    components: {
        AdminTitreMenu,
        PublicFooter,
    },
    /* Gestion session expirée */
    data() {
        return {
            countdown: 10,
            timer: null,
        }
    },
    mounted() {
        this.startTimer(); // Démarrer le timer à l'ouverture de la page
    },
    methods: {
        startTimer() {
            // Réinitialiser le timer au cas où il est déjà en cours
            if (this.timer) {
                clearTimeout(this.timer);
            }

            // Démarrer le compte à rebours en seconde
            this.countdown = 3600;
            this.timer = setInterval(() => {
                this.countdown--;
                if (this.countdown <= 0) {
                    this.logout();
                }
            }, 1000);
        },
        logout() {
            clearInterval(this.timer);
            accountService.logout();
            this.$router.push("/authentification/Login");
        },
    },

};
</script>