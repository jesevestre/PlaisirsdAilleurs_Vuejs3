<template>
    <div class="container mt-5">
        <table class="table table-bordered text-center">
            <thead class="table-light">
                <tr>
                    <th>Mois</th>
                    <th>2025</th>
                    <th>2026</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="table-primary">Janvier</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-01')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-01')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-01')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-01')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-01')?.total || 0 }}</td>
                </tr>
                <tr>
                    <td class="table-secondary">Février</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-02')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-02')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-02')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-02')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-02')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-primary">Mars</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-03')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-03')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-03')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-03')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-03')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-secondary">Avril</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-04')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-04')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-04')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-04')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-04')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-primary">Mai</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-05')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-05')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-05')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-05')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-05')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-secondary">Juin</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-06')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-06')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-06')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-06')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-06')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-primary">Juillet</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-07')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-07')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-07')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-07')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-07')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-secondary">Août</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-08')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-08')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-08')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-08')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-08')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-primary">Septembre</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-09')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-09')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-09')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-09')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-09')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-secondary">Octobre</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-10')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-10')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-10')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-10')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-10')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-primary">Novembre</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-11')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-11')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-11')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-11')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-11')?.total || 0 }}</td>
                </tr>
                <tr><td class="table-secondary">Décembre</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2025-12')?.total || 0) > 0}">{{ visiteurs.find(item => item.annee_mois === '2025-12')?.total || 0 }}</td>
                    <td :class="{'table-success': (visiteurs.find(item => item.annee_mois === '2026-12')?.total || 0 > (visiteurs.find(item => item.annee_mois === '2025-12')?.total || 0) > 0) }">{{ visiteurs.find(item => item.annee_mois === '2026-12')?.total || 0 }}</td>
                </tr>
            </tbody>
        </table>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'StatsVisiteurs',
    data() {
		return {
            visiteurs: [],
		};
    },
    mounted() {
		this.fetchStatsVisiteurs();
    },
    methods: {
        async fetchStatsVisiteurs() {
			try {
				const rootUrl = `${window.location.protocol}//${window.location.hostname}${window.location.posts ? `:${window.location.posts}` : ''}/`;
				const response = await axios.get(rootUrl + 'backend/vue/adminVisiteurs.php/posts');

				this.visiteurs = response.data;
			} catch {
				console.log('Adresse de récupération des données incorrecte.');
            }
        }
    },
}
</script>