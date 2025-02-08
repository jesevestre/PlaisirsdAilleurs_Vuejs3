<template>
    <AdminTitreCo/>

    <div class="container pb-5 mb-5">
        <form class="pb-5 mb-5" @submit.prevent="login">
            <div class="form-group row align-items-center mt-5 mx-sm-5">
                <label for="text" class="col-4 col-form-label">Mot de passe: </label>
                <div class="col-6">
                    <input type="password" class="form-control-plaintext bg-white" id="password" placeholder="Mot de passe" v-model="admin.password"/>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary mt-1 mb-1">Connexion</button>
                </div>
            </div>
            <div class="form-group row align-items-center mb-4">
                <div id="invalid" class="invalid-feedback pt-5 mt-4 pl-5 ml-5">
                    Mot de passe incorrect, veillez réessayer
                </div>
            </div>
        </form>
    </div>

    <div class="public pb-5 mb-5">
		<div class="container pb-5 mb-5">
			<div class="row pb-5 mb-5">
				<div class="col-12 pb-5 mb-5 text-center">
                    <div class="mt-5 pb-5 mb-5">
                        <router-link class="btn btn-warning mb-5 pt-2 pb-2 pl-5 pr-5 text-white font-weight-bold boutonJaune" to="/">Retour</router-link>
                    </div>
                </div>
			</div>
		</div>
	</div>

    <PublicFooter/>
</template>

<script>
import AdminTitreCo from '@/components/AdminTitreCo.vue';
import PublicFooter from '@/components/Footer.vue';
import { accountService } from '@/_services';

export default {
    name: 'Login',
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
                this.$router.push('/admin/Dashboard');
            } else {
                const invalidDiv = document.getElementById('invalid');
                invalidDiv.classList.add('d-block');
            }
        }
    },
    components: {
        PublicFooter,
        AdminTitreCo,
    }
}
</script>