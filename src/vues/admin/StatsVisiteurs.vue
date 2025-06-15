<template>
    <div class="private">
        <div class="container mt-5 mb-5">
            <table class="table table-bordered text-center">
                <thead class="table-light">
                    <tr>
                        <th>Mois</th>
                        <th>2025</th>
                        <th>2026</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="table-primary">Janvier</td>
                        <td :class="{ 'table-success': janv2025 > janv2026 }">{{ janv2025 }}</td>
                        <td :class="{ 'table-success': janv2025 < janv2026 }">{{ janv2026 }}</td>
                        <td :class="{ 
                            'text-success': (janv2026 - janv2025 > 0 && janv2025 != 0 && janv2026 != 0),
                            'text-danger': (janv2026 - janv2025 < 0 && janv2025 != 0 && janv2026 != 0)
                            }">
                            {{ 
                                (janv2025 === 0 || janv2026 === 0) 
                                ? (janv2026 - janv2025) 
                                : '+' + ((janv2025 < janv2026) 
                                    ? ((janv2026 * 100) / janv2025) + '%' 
                                    : (((janv2026 - janv2025) / janv2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-secondary">Février</td>
                        <td :class="{ 'table-success': fevr2025 > fevr2026 }">{{ fevr2025 }}</td>
                        <td :class="{ 'table-success': fevr2025 < fevr2026 }">{{ fevr2026 }}</td>
                        <td :class="{ 
                            'text-success': (fevr2026 - fevr2025 > 0 && fevr2025 != 0 && fevr2026 != 0),
                            'text-danger': (fevr2026 - fevr2025 < 0 && fevr2025 != 0 && fevr2026 != 0)
                            }">
                            {{ 
                                (fevr2025 === 0 || fevr2026 === 0) 
                                ? (fevr2026 - fevr2025) 
                                : ((fevr2025 < fevr2026) 
                                    ? ('+' + (fevr2026 * 100) / fevr2025) + '%' 
                                    : (((fevr2026 - fevr2025) / fevr2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-primary">Mars</td>
                        <td :class="{ 'table-success': mars2025 > mars2026 }">{{ mars2025 }}</td>
                        <td :class="{ 'table-success': mars2025 < mars2026 }">{{ mars2026 }}</td>
                        <td :class="{ 
                            'text-success': (mars2026 - mars2025 > 0 && mars2025 != 0 && mars2026 != 0),
                            'text-danger': (mars2026 - mars2025 < 0 && mars2025 != 0 && mars2026 != 0)
                            }">
                            {{ 
                                (mars2025 === 0 || mars2026 === 0)
                                ? (mars2026 - mars2025) 
                                : ((mars2025 < mars2026) 
                                    ? ('+' + (mars2026 * 100) / mars2025) + '%' 
                                    : (((mars2026 - mars2025) / mars2026) * 100).toFixed(0) + '%') 
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-secondary">Avril</td>
                        <td :class="{ 'table-success': avri2025 > avri2026 }">{{ avri2025 }}</td>
                        <td :class="{ 'table-success': avri2025 < avri2026 }">{{ avri2026 }}</td>
                        <td :class="{ 
                            'text-success': (avri2026 - avri2025 > 0 && avri2025 != 0 && avri2026 != 0),
                            'text-danger': (avri2026 - avri2025 < 0 && avri2025 != 0 && avri2026 != 0)
                            }">
                            {{ 
                                (avri2025 === 0 || avri2026 === 0) 
                                ? (avri2026 - avri2025) 
                                : ((avri2025 < avri2026) 
                                    ? ('+' + (avri2026 * 100) / avri2025) + '%' 
                                    : (((avri2026 - avri2025) / avri2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-primary">Mai</td>
                        <td :class="{ 'table-success': mai2025 > mai2026 }">{{ mai2025 }}</td>
                        <td :class="{ 'table-success': mai2025 < mai2026 }">{{ mai2026 }}</td>
                        <td :class="{ 
                            'text-success': (mai2026 - mai2025 > 0 && mai2025 != 0 && mai2026 != 0),
                            'text-danger': (mai2026 - mai2025 < 0 && mai2025 != 0 && mai2026 != 0)
                            }">
                            {{ 
                                (mai2025 === 0 || mai2026 === 0) 
                                ? (mai2026 - mai2025) 
                                : ((mai2025 < mai2026) 
                                    ? ('+' + (mai2026 * 100) / mai2025) + '%' 
                                    : (((mai2026 - mai2025) / mai2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-secondary">Juin</td>
                        <td :class="{ 'table-success': juin2025 > juin2026 }">{{ juin2025 }}</td>
                        <td :class="{ 'table-success': juin2025 < juin2026 }">{{ juin2026 }}</td>
                        <td :class="{ 
                            'text-success': (juin2026 - juin2025 > 0 && juin2025 != 0 && juin2026 != 0),
                            'text-danger': (juin2026 - juin2025 < 0 && juin2025 != 0 && juin2026 != 0)
                            }">
                            {{ 
                                (juin2025 === 0 || juin2026 === 0) 
                                ? (juin2026 - juin2025) 
                                : ((juin2025 < juin2026) 
                                    ? ('+' + (juin2026 * 100) / juin2025) + '%' 
                                    : (((juin2026 - juin2025) / juin2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-primary">Juillet</td>
                        <td :class="{ 'table-success': juil2025 > juil2026 }">{{ juil2025 }}</td>
                        <td :class="{ 'table-success': juil2025 < juil2026 }">{{ juil2026 }}</td>
                        <td :class="{ 
                            'text-success': (juil2026 - juil2025 > 0 && juil2025 != 0 && juil2026 != 0),
                            'text-danger': (juil2026 - juil2025 < 0 && juil2025 != 0 && juil2026 != 0)
                            }">
                            {{ 
                                (juil2025 === 0 || juil2026 === 0) 
                                ? (juil2026 - juil2025) 
                                : ((juil2025 < juil2026) 
                                    ? ('+' + (juil2026 * 100) / juil2025) + '%' 
                                    : (((juil2026 - juil2025) / juil2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-secondary">Août</td>
                        <td :class="{ 'table-success': aout2025 > aout2026 }">{{ aout2025 }}</td>
                        <td :class="{ 'table-success': aout2025 < aout2026 }">{{ aout2026 }}</td>
                        <td :class="{ 
                            'text-success': (aout2026 - aout2025 > 0 && aout2025 != 0 && aout2026 != 0),
                            'text-danger': (aout2026 - aout2025 < 0 && aout2025 != 0 && aout2026 != 0)
                            }">
                            {{ 
                                (aout2025 === 0 || aout2026 === 0) 
                                ? (aout2026 - aout2025) 
                                : ((aout2025 < aout2026) 
                                    ? ('+' + (aout2026 * 100) / aout2025) + '%' 
                                    : (((aout2026 - aout2025) / aout2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-primary">Septembre</td>
                        <td :class="{ 'table-success': sept2025 > sept2026 }">{{ sept2025 }}</td>
                        <td :class="{ 'table-success': sept2025 < sept2026 }">{{ sept2026 }}</td>
                        <td :class="{ 
                            'text-success': (sept2026 - sept2025 > 0 && sept2025 != 0 && sept2026 != 0),
                            'text-danger': (sept2026 - sept2025 < 0 && sept2025 != 0 && sept2026 != 0)
                            }">
                            {{ 
                                (sept2025 === 0 || sept2026 === 0) 
                                ? (sept2026 - sept2025) 
                                : ((sept2025 < sept2026) 
                                    ? ('+' + (sept2026 * 100) / sept2025) + '%' 
                                    : (((sept2026 - sept2025) / sept2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-secondary">Octobre</td>
                        <td :class="{ 'table-success': octo2025 > octo2026 }">{{ octo2025 }}</td>
                        <td :class="{ 'table-success': octo2025 < octo2026 }">{{ octo2026 }}</td>
                        <td :class="{ 
                            'text-success': (octo2026 - octo2025 > 0 && octo2025 != 0 && octo2026 != 0),
                            'text-danger': (octo2026 - octo2025 < 0 && octo2025 != 0 && octo2026 != 0)
                            }">
                            {{ 
                                (octo2025 === 0 || octo2026 === 0) 
                                ? (octo2026 - octo2025) 
                                : ((octo2025 < octo2026) 
                                    ? ('+' + (octo2026 * 100) / octo2025) + '%' 
                                    : (((octo2026 - octo2025) / octo2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-primary">Novembre</td>
                        <td :class="{ 'table-success': nove2025 > nove2026 }">{{ nove2025 }}</td>
                        <td :class="{ 'table-success': nove2025 < nove2026 }">{{ nove2026 }}</td>
                        <td :class="{ 
                            'text-success': (nove2026 - nove2025 > 0 && nove2025 != 0 && nove2026 != 0),
                            'text-danger': (nove2026 - nove2025 < 0 && nove2025 != 0 && nove2026 != 0)
                            }">
                            {{ 
                                (nove2025 === 0 || nove2026 === 0) 
                                ? (nove2026 - nove2025) 
                                : ((nove2025 < nove2026) 
                                    ? ('+' + (nove2026 * 100) / nove2025) + '%' 
                                    : (((nove2026 - nove2025) / nove2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td class="table-secondary">Décembre</td>
                        <td :class="{ 'table-success': dece2025 > dece2026 }">{{ dece2025 }}</td>
                        <td :class="{ 'table-success': dece2025 < dece2026 }">{{ dece2026 }}</td>
                        <td :class="{ 
                            'text-success': (dece2026 - dece2025 > 0 && dece2025 != 0 && dece2026 != 0),
                            'text-danger': (dece2026 - dece2025 < 0 && dece2025 != 0 && dece2026 != 0)
                            }">
                            {{ 
                                (dece2025 === 0 || dece2026 === 0) 
                                ? (dece2026 - dece2025) 
                                : ((dece2025 < dece2026) 
                                    ? ('+' + (dece2026 * 100) / dece2025) + '%' 
                                    : (((dece2026 - dece2025) / dece2026) * 100).toFixed(0) + '%')
                            }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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
    computed: {
        janv2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-01')?.total || 0;
        },
        fevr2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-02')?.total || 0;
        },
        mars2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-03')?.total || 0;
        },
        avri2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-04')?.total || 0;
        },
        mai2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-05')?.total || 0;
        },
        juin2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-06')?.total || 0;
        },
        juil2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-07')?.total || 0;
        },
        aout2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-08')?.total || 0;
        },
        sept2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-09')?.total || 0;
        },
        octo2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-10')?.total || 0;
        },
        nove2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-11')?.total || 0;
        },
        dece2025() {
            return this.visiteurs.find(item => item.annee_mois === '2025-12')?.total || 0;
        },
        janv2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-01')?.total || 0;
        },
        fevr2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-02')?.total || 0;
        },
        mars2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-03')?.total || 0;
        },
        avri2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-04')?.total || 0;
        },
        mai2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-05')?.total || 0;
        },
        juin2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-06')?.total || 0;
        },
        juil2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-07')?.total || 0;
        },
        aout2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-08')?.total || 0;
        },
        sept2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-09')?.total || 0;
        },
        octo2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-10')?.total || 0;
        },
        nove2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-11')?.total || 0;
        },
        dece2026() {
            return this.visiteurs.find(item => item.annee_mois === '2026-12')?.total || 0;
        },
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