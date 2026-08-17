<template>
    <div class="side-bar-menu">
        <router-link to="/admin">
            <div @click="activeMenu('overview')" class="overview">
                <img src="../../assets/home.svg" alt="">
                <h4 class="dash-menu">Overview</h4>
            </div>
        </router-link>
        <router-link to="/admin/verification">
            <div @click="activeMenu('verification')" class="verification">
                <img src="../../assets/verified.svg" alt="">
                <h4 class="dash-menu">Verification</h4>
            </div>
        </router-link>
        <router-link to="/admin/professionals">
            <div @click="activeMenu('professionals')" class="professionals">
                <img src="../../assets/professional.svg" alt="">
                <h4 class="dash-menu">Professionals</h4>
            </div>
        </router-link>
        <router-link to="/admin/companies">
            <div @click="activeMenu('companies')" class="companies">
                <img src="../../assets/company.svg" alt="">
                <h4 class="dash-menu">Companies</h4>
            </div>
        </router-link>
        <router-link to="/admin/job-openings">
            <div @click="activeMenu('job-openings')" class="job-openings">
                <img src="../../assets/jobs.svg" alt="">
                <h4 class="dash-menu">Job Openings</h4>
            </div>
        </router-link>
    </div>
    
</template>

<script>
export default {
    name: 'AppSidebar',
    methods: {

        activeMenu(menu){

            if(menu === 'overview'){
                const overview = document.querySelector('.overview');
                const verification = document.querySelector('.verification');
                const professionals = document.querySelector('.professionals');
                const companies = document.querySelector('.companies');
                const job_openings = document.querySelector('.job-openings');
                overview.classList.add('active-menu');
                verification.classList.remove('active-menu');
                professionals.classList.remove('active-menu');
                companies.classList.remove('active-menu');
                job_openings.classList.remove('active-menu');
                localStorage.setItem('userString', menu);
            }
            else if(menu === 'verification'){
                const overview = document.querySelector('.overview');
                const verification = document.querySelector('.verification');
                const professionals = document.querySelector('.professionals');
                const companies = document.querySelector('.companies');
                const job_openings = document.querySelector('.job-openings');
                verification.classList.add('active-menu');
                overview.classList.remove('active-menu');
                professionals.classList.remove('active-menu');
                companies.classList.remove('active-menu');
                job_openings.classList.remove('active-menu');
                localStorage.setItem('userString', menu);
            }
            else if(menu === 'professionals'){
                const overview = document.querySelector('.overview');
                const verification = document.querySelector('.verification');
                const professionals = document.querySelector('.professionals');
                const companies = document.querySelector('.companies');
                const job_openings = document.querySelector('.job-openings');
                professionals.classList.add('active-menu');
                overview.classList.remove('active-menu');
                verification.classList.remove('active-menu');
                companies.classList.remove('active-menu');
                job_openings.classList.remove('active-menu');
                localStorage.setItem('userString', menu);
            }
            else if(menu === 'companies'){
                const overview = document.querySelector('.overview');
                const verification = document.querySelector('.verification');
                const professionals = document.querySelector('.professionals');
                const companies = document.querySelector('.companies');
                const job_openings = document.querySelector('.job-openings');
                companies.classList.add('active-menu');
                overview.classList.remove('active-menu');
                verification.classList.remove('active-menu');
                professionals.classList.remove('active-menu');
                job_openings.classList.remove('active-menu');
                localStorage.setItem('userString', menu);
            }
            else if(menu === 'job-openings'){
                const overview = document.querySelector('.overview');
                const verification = document.querySelector('.verification');
                const professionals = document.querySelector('.professionals');
                const companies = document.querySelector('.companies');
                const job_openings = document.querySelector('.job-openings');
                job_openings.classList.add('active-menu');
                overview.classList.remove('active-menu');
                verification.classList.remove('active-menu');
                professionals.classList.remove('active-menu');
                companies.classList.remove('active-menu');
                localStorage.setItem('userString', menu);
            }
        }
    },
    mounted() {
        const overview = document.querySelector('.overview');
        const verification = document.querySelector('.verification');
        const professionals = document.querySelector('.professionals');
        const companies = document.querySelector('.companies');
        const job_openings = document.querySelector('.job-openings');
        const savedValue = localStorage.getItem('userString');
        if(savedValue === ''){
            overview.classList.add('active-menu');
        }
        else if(savedValue === 'overview'){
            overview.classList.add('active-menu');
        }
        else if(savedValue === 'verification'){
            verification.classList.add('active-menu');
        }
        else if(savedValue === 'professionals'){
            professionals.classList.add('active-menu');
        }
        else if(savedValue === 'companies'){
            companies.classList.add('active-menu');
        }
        else if(savedValue === 'job-openings'){
            job_openings.classList.add('active-menu');
        }
        localStorage.setItem('userString', '');
    }
}

</script>

<style scoped>
.side-bar-menu{
    display: flex;
    flex-direction: column;
    gap: 15px;
    
}

.overview, .verification, .professionals, .companies, .job-openings{
    display: flex;
    gap: 10px;
    padding: 8px;
    cursor: pointer;
    color: #6b7280;
    border-radius: 5px;
}

.dash-menu{
    font-size: 13.5px;
}

.active-menu{
    background: #151d2a;
    color: white;
}
    
</style>