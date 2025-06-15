<template>
    <AdminTitreCo/>

    <div class="admin">
        <div class="container pt-5 pb-5 mb-5">
            <div class="row pb-5 mb-5">
                <form class="pb-5 mb-5" @submit.prevent="login">
                    <div class="form-group row align-items-center mt-5 mx-sm-5">
                        <div class="col-8">
                            <input type="password" class="form-control-plaintext" id="password" placeholder="Mot de passe" v-model="admin.password"/>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-success fw-bold mt-1 mb-1">Connexion</button>
                        </div>
                    </div>
                    <div class="form-group row align-items-center mb-4">
                        <div id="invalid" class="invalid-feedback pt-5 mt-4 pl-5 ml-5">
                            Mot de passe incorrect, veillez réessayer
                        </div>
                    </div>
                </form>
                <div class="pt-5 mt-5 pb-5 mb-5 text-center">
                    <router-link class="btn btn-primary fw-bold" to="/">Retour</router-link>
                </div>
            </div>
        </div>
    </div>

    <PublicFooter/>
</template>

<script>
import AdminTitreCo from '@/components/admin/AdminTitreCo.vue';
import PublicFooter from '@/components/Footer.vue';
import { accountService } from '@/_services';

export default {
    name: 'Login',

    components: {
        PublicFooter,
        AdminTitreCo,
    },

    data(){
        return {
            admin: {
                password: '',
            }
        }
    },

    methods: {
        login(){
            if(this.admin.password == ''){
                const access_token = Math.floor(Math.random() * 90000) + 10000000;
                accountService.saveToken(access_token);
                this.$router.push('/admin/GestionEvenement');
            } else {
                const invalidDiv = document.getElementById('invalid');
                invalidDiv.classList.add('d-block');
            }
        }
    },
}
</script>

<style scoped>
.admin {
	min-height: 89.05vh;
}
</style>