<template>
	<div class="public">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<form @submit.prevent="ValiderCommande">
						<div>
							<u><b>Explication fonctionnelle :</b></u>
								<ul style="list-style-type: none;" >
									<li>
										Une barquette est généralement adaptée pour
										mettre jusqu'à <b>3 sortes de sushis</b>.
									</li>
									<li>Pour les autres sections, comptez <b>2 sortes
										par barquette</b> maximum.
									</li>
									<li>
										En fonction du nombre de sortes d'aliments selectionnés, ils seront répartis équitablement dans la barquette.
									</li>
									<br />
									<li>
										Barquettes de sushis, fruits de mer, poissons et viandes
										à <b>10€</b>
									</li>
									<li>
										Barquettes d'accompagnements et panier surpise à <b>5€</b>
									</li>
								</ul> 
							<p>Pour connaître la liste, <b>cliquez en dessous de l'image</b> :</p>
						</div>
						<div class="col-12 mb-5 pb-5">
							<div class="col-12">

								<img class="img-aemporter d-block" src="@/assets/photosEmporter/sushis.png"
									alt="image de présentation du buffet">
								<label for="showInputsSushis">Sushis :&nbsp;&nbsp;</label>
								<input type="checkbox" id="showInputsSushis" v-model="showInputsSushis" />

							</div>
							<div v-if="showInputsSushis" class="additional-inputs pb-5">
								<div class="form-group row align-items-center">
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput1">Sushis saumon :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput1" value="sushiInput1"
											v-model="sushiInput1" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput2">Makis saumon avocat :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput2" value="sushiInput2"
											v-model="sushiInput2" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput3">Makis saumon fromage :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput3" value="sushiInput3"
											v-model="sushiInput3" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput4">Makis avocat fromage :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput4" value="sushiInput4"
											v-model="sushiInput4" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput5">Makis fromage :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput5" value="sushiInput5"
											v-model="sushiInput5" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput6">Makis rouleau saumon :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput6" value="sushiInput6"
											v-model="sushiInput6" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput7">Makis rouleau thon :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput7" value="sushiInput7"
											v-model="sushiInput7" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput8">Makis avocat thon mayo :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput8" value="sushiInput8"
											v-model="sushiInput8" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput9">Sauce salée :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput9" value="sushiInput9"
											v-model="sushiInput9" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput10">Sauce sucrée :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput10" value="sushiInput10"
											v-model="sushiInput10" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput11">Gingembre :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput11" value="sushiInput11"
											v-model="sushiInput11" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="sushiInput12">Baguettes :&nbsp;&nbsp;</label>
										<input type="checkbox" id="sushiInput12" value="sushiInput12"
											v-model="sushiInput12" />
									</div>
								</div>
								<select :key="showInputsSushis" name="nbrBarquetteSushis" id="nbrBarquetteSushis"
									v-model="nbrBarquetteSushis" @change="updateEstimation" required>
									<option value="" selected disabled>Nombre de barquette</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

							<div class="col-12 mt-3">
								<img class="img-aemporter d-block" src="@/assets/photosEmporter/fruitsDeMer.png"
									alt="image de présentation du buffet">
								<label for="showInputsFruitsDeMer">Fruits de mer :&nbsp;&nbsp;</label>
								<input type="checkbox" id="showInputsFruitsDeMer" v-model="showInputsFruitsDeMer" />
							</div>
							<div v-if="showInputsFruitsDeMer" class="additional-inputs pb-5">
								<div class="form-group row align-items-center">
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="fruitDeMerInput1">Crevettes :&nbsp;&nbsp;</label>
										<input type="checkbox" id="fruitDeMerInput1" value="fruitDeMerInput1"
											v-model="fruitDeMerInput1" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="fruitDeMerInput2">Gambasses :&nbsp;&nbsp;</label>
										<input type="checkbox" id="fruitDeMerInput2" value="fruitDeMerInput2"
											v-model="fruitDeMerInput2" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="fruitDeMerInput3">Bulots :&nbsp;&nbsp;</label>
										<input type="checkbox" id="fruitDeMerInput3" value="fruitDeMerInput3"
											v-model="fruitDeMerInput3" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="fruitDeMerInput4">Palourdes :&nbsp;&nbsp;</label>
										<input type="checkbox" id="fruitDeMerInput4" value="fruitDeMerInput4"
											v-model="fruitDeMerInput4" />
									</div>
								</div>
								<select :key="showInputsFruitsDeMer" name="nbrBarquetteFruitsDeMer"
									id="nbrBarquetteFruitsDeMer" v-model="nbrBarquetteFruitsDeMer"
									@change="updateEstimation" required>
									<option value="" selected disabled>Nombre de barquette</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

							<div class="col-12 mt-3">
								<img class="img-aemporter d-block" src="@/assets/photosEmporter/poissons.png"
									alt="image de présentation du buffet">
								<label for="showInputsPoissons">Poissons :&nbsp;&nbsp;</label>
								<input type="checkbox" id="showInputsPoissons" v-model="showInputsPoissons" />
							</div>
							<div v-if="showInputsPoissons" class="additional-inputs pb-5">
								<div class="form-group row align-items-center">
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="poissonInput1">Saumon :&nbsp;&nbsp;</label>
										<input type="checkbox" id="poissonInput1" value="poissonInput1"
											v-model="poissonInput1" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="poissonInput2">Daurade :&nbsp;&nbsp;</label>
										<input type="checkbox" id="poissonInput2" value="poissonInput2"
											v-model="poissonInput2" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="poissonInput3">Filet de poisson :&nbsp;&nbsp;</label>
										<input type="checkbox" id="poissonInput3" value="poissonInput3"
											v-model="poissonInput3" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="poissonInput4">Filet de poisson frit :&nbsp;&nbsp;</label>
										<input type="checkbox" id="poissonInput4" value="poissonInput4"
											v-model="poissonInput4" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="poissonInput5">Calamars au beurre :&nbsp;&nbsp;</label>
										<input type="checkbox" id="poissonInput5" value="poissonInput5"
											v-model="poissonInput5" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="poissonInput6">Calamars frit :&nbsp;&nbsp;</label>
										<input type="checkbox" id="poissonInput6" value="poissonInput6"
											v-model="poissonInput6" />
									</div>
								</div>
								<select :key="showInputsPoissons" name="nbrBarquettePoissons" id="nbrBarquettePoissons"
									v-model="nbrBarquettePoissons" @change="updateEstimation" required>
									<option value="" selected disabled>Nombre de barquette</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

							<div class="col-12 mt-3">
								<img class="img-aemporter d-block" src="@/assets/photosEmporter/viandes.png"
									alt="image de présentation du buffet">
								<label for="showInputsViandes">Viandes :&nbsp;&nbsp;</label>
								<input type="checkbox" id="showInputsViandes" v-model="showInputsViandes" />
							</div>
							<div v-if="showInputsViandes" class="additional-inputs pb-5">
								<div class="form-group row align-items-center">
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="viandeInput1">Entrecote :&nbsp;&nbsp;</label>
										<input type="checkbox" id="viandeInput1" value="viandeInput1"
											v-model="viandeInput1" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="viandeInput2">Agneau :&nbsp;&nbsp;</label>
										<input type="checkbox" id="viandeInput2" value="viandeInput2"
											v-model="viandeInput2" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="viandeInput3">Boulette de boeuf :&nbsp;&nbsp;</label>
										<input type="checkbox" id="viandeInput3" value="viandeInput3"
											v-model="viandeInput3" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="viandeInput4">Boulette de poulet :&nbsp;&nbsp;</label>
										<input type="checkbox" id="viandeInput4" value="viandeInput4"
											v-model="viandeInput4" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="viandeInput5">Poulet confit :&nbsp;&nbsp;</label>
										<input type="checkbox" id="viandeInput5" value="viandeInput5"
											v-model="viandeInput5" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="viandeInput6">Porc confit :&nbsp;&nbsp;</label>
										<input type="checkbox" id="viandeInput6" value="viandeInput6"
											v-model="viandeInput6" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="viandeInput7">Nams poulet :&nbsp;&nbsp;</label>
										<input type="checkbox" id="viandeInput7" value="viandeInput7"
											v-model="viandeInput7" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="viandeInput8">Nams port :&nbsp;&nbsp;</label>
										<input type="checkbox" id="viandeInput8" value="viandeInput8"
											v-model="viandeInput8" />
									</div>
								</div>
								<select :key="showInputsViandes" name="nbrBarquetteViandes" id="nbrBarquetteViandes"
									v-model="nbrBarquetteViandes" @change="updateEstimation" required>
									<option value="" selected disabled>Nombre de barquette</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

							<div class="col-12 mt-3 pb-3">
								<img class="img-aemporter d-block" src="@/assets/photosEmporter/accompagnements.png"
									alt="image de présentation du buffet">
								<label for="showInputsAccompagnements">Accompagnements :&nbsp;&nbsp;</label>
								<input type="checkbox" id="showInputsAccompagnements"
									v-model="showInputsAccompagnements" />
							</div>
							<div v-if="showInputsAccompagnements" class="additional-inputs pb-5">
								<div class="form-group row align-items-center">
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="accompagnementInput1">Légumes :&nbsp;&nbsp;</label>
										<input type="checkbox" id="accompagnementInput1" value="accompagnementInput1"
											v-model="accompagnementInput1" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="accompagnementInput2">Riz cantonet :&nbsp;&nbsp;</label>
										<input type="checkbox" id="accompagnementInput2" value="accompagnementInput2"
											v-model="accompagnementInput2" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="accompagnementInput3">Nouille chinoise :&nbsp;&nbsp;</label>
										<input type="checkbox" id="accompagnementInput3" value="accompagnementInput3"
											v-model="accompagnementInput3" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="accompagnementInput4">Patates cuisinées :&nbsp;&nbsp;</label>
										<input type="checkbox" id="accompagnementInput4" value="accompagnementInput4"
											v-model="accompagnementInput4" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="accompagnementInput5">Frites :&nbsp;&nbsp;</label>
										<input type="checkbox" id="accompagnementInput5" value="accompagnementInput5"
											v-model="accompagnementInput5" />
									</div>
									<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
										<label for="accompagnementInput6">Frites patate douce :&nbsp;&nbsp;</label>
										<input type="checkbox" id="accompagnementInput6" value="accompagnementInput6"
											v-model="accompagnementInput6" />
									</div>
								</div>
								<select :key="showInputsAccompagnements" name="nbrBarquetteAccompagnements"
									id="nbrBarquetteAccompagnements" v-model="nbrBarquetteAccompagnements"
									@change="updateEstimation" required>
									<option value="" selected disabled>Nombre de barquette</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

							<select :key="showInputsPaniersSurprise" name="nbrBarquettePaniersSurprise"
								id="nbrBarquettePaniersSurprise" v-model="nbrBarquettePaniersSurprise"
								@change="updateEstimation" class="mt-1 mb-3">
								<option value="" selected disabled>Nombre de panier surprise</option>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>

							<hr />

							<div
								class="form-group row d-flex flex-column justify-content-center align-items-center text-center pt-3">
								<div class="col-12" v-if="isSubmitted1">
									<div class="alert alert-warning" role="alert">
										Vous devez sélectionner au moins 1 barquette :
									</div>
								</div>
								<label for="jack"><b>Estimation facture</b><br /> A régler au moment de la réception de
									la commande :</label>
								<div class="col-3">
									<input type="text" class="form-control-plaintext bg-light" id="estimationFacture"
										:value="`${estimationTotal}€`" readonly="readonly" />
								</div>
							</div>

							<hr />

							<div
								class="form-group row d-flex flex-column justify-content-center align-items-center text-center pt-3">
								<div class="col-12" v-if="isSubmitted2">
									<div class="alert alert-warning" role="alert">
										Les champs email et téléphone sont obligatoires :
									</div>
								</div>
								<label for="jack">Pour vous contacter et <b>valider votre commande</b> :</label>
								<div class="col-12 col-sm-7 col-md-6 col-lg-4 pb-1">
									<input type="text" class="form-control-plaintext bg-white" id="user_email"
										v-model="user_email" placeholder="Votre adresse email" />
								</div>
								<div class="col-12 col-sm-7 col-md-6 col-lg-4">
									<input type="text" class="form-control-plaintext bg-white" id="user_telephone"
										v-model="user_telephone" placeholder="Votre numéro de téléphone" />
								</div>
							</div>

							<div class="col-12 row pt-3">
								<div class="col-0 col-lg-3 pt-3">

								</div>
								<div class="col-12 pt-3" v-if="!isSubmitted3">
									<button type="submit"
										class="btn btn-primary font-weight-bold pl-5 pr-5">Envoyer</button>
								</div>
								<div class="col-12" v-else>
									<div class="alert alert-success" role="alert">
										<b>Commande envoyée avec succès !</b><br /> Vous venez de recevoir un email de confirmation, veuillez y accéder pour valider votre commande.
									</div>
								</div>
								<div class="col-12 pt-3" v-if="isSubmitted4">
									<div class="alert alert-danger" role="alert">
										Une erreur critique est apparue, veuillez ouvrir la console pour en savoir plus.
									</div>
								</div>
								<div class="col-12 pt-3">
									<router-link to="./"><button
											class="btn btn-warning font-weight-bold text-white pl-5 pr-5">&nbsp;Retour&nbsp;</button></router-link>
								</div>
								<div class="col-0 col-lg-3 pt-3">

								</div>
							</div>

						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'AEmporter',
	data() {
		return {
			user_email: '',
			user_telephone: '',

			showInputsPaniersSurprise: false,
			nbrBarquettePaniersSurprise: '',

			isSubmitted1: false,
			isSubmitted2: false,
			isSubmitted3: false,
			isSubmitted4: false,

			showInputsSushis: false,
			nbrBarquetteSushis: '',
			Sushis: {
				input1: '',
				input2: '',
				input3: '',
				input4: '',
				input5: '',
				input6: '',
				input7: '',
				input8: '',
				input9: '',
				input10: '',
				input11: '',
				input12: '',
			},
			showInputsFruitsDeMer: false,
			nbrBarquetteFruitsDeMer: '',
			FruitsDeMer: {
				input1: '',
				input2: '',
				input3: '',
				input4: '',
			},
			showInputsPoissons: false,
			nbrBarquettePoissons: '',
			Poissons: {
				input1: '',
				input2: '',
				input3: '',
				input4: '',
				input5: '',
				input6: '',
			},
			showInputsViandes: false,
			nbrBarquetteViandes: '',
			Viandes: {
				input1: '',
				input2: '',
				input3: '',
				input4: '',
				input5: '',
				input6: '',
				input7: '',
				input8: '',
			},
			showInputsAccompagnements: false,
			nbrBarquetteAccompagnements: '',
			Accompagnements: {
				input1: '',
				input2: '',
				input3: '',
				input4: '',
				input5: '',
				input6: '',
			},
		};
	},
	computed: {
		estimationTotal() {
			let nbrBarquetteSushis = Number(this.nbrBarquetteSushis) || 0;
			let prixBarquetteSushis = nbrBarquetteSushis * 10;
			let nbrBarquetteFruitsDeMer = Number(this.nbrBarquetteFruitsDeMer) || 0;
			let prixBarquetteFruitsDeMer = nbrBarquetteFruitsDeMer * 10;
			let nbrBarquettePoissons = Number(this.nbrBarquettePoissons) || 0;
			let prixBarquettePoissons = nbrBarquettePoissons * 10;
			let nbrBarquetteViandes = Number(this.nbrBarquetteViandes) || 0;
			let prixBarquetteViandes = nbrBarquetteViandes * 10;
			let nbrBarquetteAccompagnements = Number(this.nbrBarquetteAccompagnements) || 0;
			let prixBarquetteAccompagnements = nbrBarquetteAccompagnements * 5;
			let nbrBarquettePaniersSurprise = Number(this.nbrBarquettePaniersSurprise) || 0;
			let prixBarquettePaniersSurprise = nbrBarquettePaniersSurprise * 5;

			return prixBarquetteSushis + prixBarquetteFruitsDeMer + prixBarquettePoissons + prixBarquetteViandes + prixBarquetteAccompagnements + prixBarquettePaniersSurprise;
		},
	},
	watch: {
		showInputsSushis(newValue) {
			if (!newValue) {
				this.sushiInput1 = '';
				this.sushiInput2 = '';
				this.sushiInput3 = '';
				this.sushiInput4 = '';
				this.sushiInput5 = '';
				this.sushiInput6 = '';
				this.sushiInput7 = '';
				this.sushiInput8 = '';
				this.sushiInput9 = '';
				this.sushiInput10 = '';
				this.sushiInput11 = '';
				this.sushiInput12 = '';
				this.nbrBarquetteSushis = '';
			}
		},
		showInputsFruitsDeMer(newValue) {
			if (!newValue) {
				this.fruitDeMerInput1 = '';
				this.fruitDeMerInput2 = '';
				this.fruitDeMerInput3 = '';
				this.fruitDeMerInput4 = '';
				this.nbrBarquetteFruitsDeMer = '';
			}
		},
		showInputsPoissons(newValue) {
			if (!newValue) {
				this.poissonInput1 = '';
				this.poissonInput2 = '';
				this.poissonInput3 = '';
				this.poissonInput4 = '';
				this.poissonInput5 = '';
				this.poissonInput6 = '';
				this.nbrBarquettePoissons = '';
			}
		},
		showInputsViandes(newValue) {
			if (!newValue) {
				this.viandeInput1 = '';
				this.viandeInput2 = '';
				this.viandeInput3 = '';
				this.viandeInput4 = '';
				this.viandeInput5 = '';
				this.viandeInput6 = '';
				this.viandeInput7 = '';
				this.viandeInput8 = '';
				this.nbrBarquetteViandes = '';
			}
		},
		showInputsAccompagnements(newValue) {
			if (!newValue) {
				this.accompagnementInput1 = '';
				this.accompagnementInput2 = '';
				this.accompagnementInput3 = '';
				this.accompagnementInput4 = '';
				this.accompagnementInput5 = '';
				this.accompagnementInput6 = '';
				this.nbrBarquetteAccompagnements = '';
			}
		},
	},
	methods: {
		updateEstimation(event) {
			const id = event.target.id;
			const value = parseInt(event.target.value) || 0;

			if (id === 'nbrBarquetteSushis') {
				this.nbrBarquetteSushis = value;
			} else if (id === 'nbrBarquetteFruitsDeMer') {
				this.nbrBarquetteFruitsDeMer = value;
			} else if (id === 'nbrBarquettePoissons') {
				this.nbrBarquettePoissons = value;
			} else if (id === 'nbrBarquetteViandes') {
				this.nbrBarquetteViandes = value;
			} else if (id === 'nbrBarquetteAccompagnements') {
				this.nbrBarquetteAccompagnements = value;
			}
		},
		ValiderCommande() {

			if (this.estimationTotal == 0) {
				this.isSubmitted1 = true;
			} else {
				this.isSubmitted1 = false;

				if (!this.user_email || !this.user_telephone) {
					this.isSubmitted2 = true;
				} else {
					this.isSubmitted2 = false;

					const envoyerCommande = async (commande) => {
						try {
							const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
							const response = await axios.get(rootUrl + 'backend/controller/controller_addCommande.php/posts', commande,
								{
									headers: {
										'Content-Type': 'application/json',
									},
								}
							);

						this.isSubmitted3 = true; // Afficher le message de succès
						} catch (error) {
							this.isSubmitted4 = true;
							console.error('Erreur de sortie : ', error);
						}
					};

					let prixBarquetteSushis = (this.nbrBarquetteSushis || 0) * 10;
					let prixBarquetteFruitsDeMer = (this.nbrBarquetteFruitsDeMer || 0) * 10;
					let prixBarquettePoissons = (this.nbrBarquettePoissons || 0) * 10;
					let prixBarquetteViandes = (this.nbrBarquetteViandes || 0) * 10;
					let prixBarquetteAccompagnements = (this.nbrBarquetteAccompagnements || 0) * 5;
					let prixBarquettePaniersSurprise = (this.nbrBarquettePaniersSurprise || 0) * 5;

					const maCommande = {
						nbrBarquetteSushis: this.nbrBarquetteSushis,
						prixBarquetteSushis: prixBarquetteSushis,
						sushiInput1: this.sushiInput1,
						sushiInput2: this.sushiInput2,
						sushiInput3: this.sushiInput3,
						sushiInput4: this.sushiInput4,
						sushiInput5: this.sushiInput5,
						sushiInput6: this.sushiInput6,
						sushiInput7: this.sushiInput7,
						sushiInput8: this.sushiInput8,
						sushiInput9: this.sushiInput9,
						sushiInput10: this.sushiInput10,
						sushiInput11: this.sushiInput11,
						sushiInput12: this.sushiInput12,

						nbrBarquetteFruitsDeMer: this.nbrBarquetteFruitsDeMer,
						prixBarquetteFruitsDeMer: prixBarquetteFruitsDeMer,
						fruitDeMerInput1: this.fruitDeMerInput1,
						fruitDeMerInput2: this.fruitDeMerInput2,
						fruitDeMerInput3: this.fruitDeMerInput3,
						fruitDeMerInput4: this.fruitDeMerInput4,

						nbrBarquettePoissons: this.nbrBarquettePoissons,
						prixBarquettePoissons: prixBarquettePoissons,
						poissonInput1: this.poissonInput1,
						poissonInput2: this.poissonInput2,
						poissonInput3: this.poissonInput3,
						poissonInput4: this.poissonInput4,
						poissonInput5: this.poissonInput5,
						poissonInput6: this.poissonInput6,

						nbrBarquetteViandes: this.nbrBarquetteViandes,
						prixBarquetteViandes: prixBarquetteViandes,
						viandeInput1: this.viandeInput1,
						viandeInput2: this.viandeInput2,
						viandeInput3: this.viandeInput3,
						viandeInput4: this.viandeInput4,
						viandeInput5: this.viandeInput5,
						viandeInput6: this.viandeInput6,
						viandeInput7: this.viandeInput7,
						viandeInput8: this.viandeInput8,

						nbrBarquetteAccompagnements: this.nbrBarquetteAccompagnements,
						prixBarquetteAccompagnements: prixBarquetteAccompagnements,
						accompagnementInput1: this.accompagnementInput1,
						accompagnementInput2: this.accompagnementInput2,
						accompagnementInput3: this.accompagnementInput3,
						accompagnementInput4: this.accompagnementInput4,
						accompagnementInput5: this.accompagnementInput5,
						accompagnementInput6: this.accompagnementInput6,

						nbrBarquettePaniersSurprise: this.nbrBarquettePaniersSurprise,
						prixBarquettePaniersSurprise: prixBarquettePaniersSurprise,

						user_email: this.user_email,
						user_telephone: this.user_telephone,
						prixTotalBarquettes: prixBarquetteSushis + prixBarquettePoissons + prixBarquetteFruitsDeMer + prixBarquetteViandes + prixBarquetteAccompagnements + prixBarquettePaniersSurprise
					};

					envoyerCommande(maCommande);
				}
			}
		},
	},
}
</script>

<style>
.img-aemporter {
	display: block;
	margin-left: auto;
	margin-right: auto;

	width: 250px;
}

.border-red {
	border: 1px solid red;
	border-radius: 5px;
	box-sizing: border-box;
}
</style>