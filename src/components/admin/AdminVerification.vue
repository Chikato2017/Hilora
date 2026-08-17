<template>
    <div class="verification-component">
        <div class="top-badge-container">
            <div class="left">
                <p class="text-badge">Vet Agencies & Professionals</p>
                <h1 class="left-h1">Verification Queue</h1>
                <p class="left-p">
                    Audit registered talent credentials and corporate tax filings. Approved 
                    profiles become immediately visible to the matching algorithm and corporate partners.
                </p>
            </div>
            <div class="right">
                <p>PENDING REVIEWS</p>
                <h4>5</h4>
            </div>
        </div>
        <div class="all-profiles">
            <div class="professional-profiles">
                <div class="profile-heading">
                    <img src="../../assets/professional.svg" alt="">
                    <p>Professionals Awaiting Identity & Skill Approval  (3)</p>
                </div>
                <div class="profiles">
                    <div class="img">
                        <img class="profile-img" src="../../assets/Chan.png" alt="">
                    </div>
                    <div class="details">
                        <h4 class="name">Chan Ming</h4>
                        <p class="title">
                            Product Manager - Fintech & Payments • 6 yrs exp
                        </p>
                        <div class="core-skills">
                            <p>.Data Analysis</p>
                            <p>.AI Prompt</p>
                            <p>.CAD</p>
                        </div>
                    </div>
                    <div class="profile-btns">
                        <button class="inspect">Inspect Dosier</button>
                        <button class="approve">Verify Professional</button>
                    </div>
                </div>
                <div class="profiles">
                    <div class="img">
                        <img class="profile-img" src="../../assets/Ayo.jpg" alt="">
                    </div>
                    <div class="details">
                        <h4 class="name">Ayo Jesse</h4>
                        <p class="title">
                            AI Manager - Fintech & Payments • 6 yrs exp
                        </p>
                        <div class="core-skills">
                            <p>.Data Analysis</p>
                            <p>.AI Prompt</p>
                            <p>.CAD</p>
                        </div>
                    </div>
                    <div class="profile-btns">
                        <button class="inspect">Inspect Dosier</button>
                        <button class="approve">Verify Professional</button>
                    </div>
                </div>
                <div class="profiles">
                    <div class="img">
                        <img class="profile-img" src="../../assets/Chan.png" alt="">
                    </div>
                    <div class="details">
                        <h4 class="name">Chan Ming</h4>
                        <p class="title">
                            Product Manager - Fintech & Payments • 6 yrs exp
                        </p>
                        <div class="core-skills">
                            <p>.Data Analysis</p>
                            <p>.AI Prompt</p>
                            <p>.CAD</p>
                        </div>
                    </div>
                    <div class="profile-btns">
                        <button class="inspect">Inspect Dosier</button>
                        <button class="approve">Verify Professional</button>
                    </div>
                </div>
            </div>
            <div class="company-profiles">
                <div class="profile-heading">
                    <img src="../../assets/company.svg" alt="">
                    <p>Companies Awaiting Identity & Skill Approval  (2)</p>
                </div>
                <div class="profiles">
                    <div class="img">
                        <img class="profile-img" src="../../assets/Florida.jpg" alt="">
                    </div>
                    <div class="details">
                        <h4 class="name">Skyloft Intelligence</h4>
                        <p class="title">
                            Software Engineering- Fintech & Payments • 10 yrs business
                        </p>
                        <div class="core-skills">
                            <p>.Data Analysis</p>
                            <p>.AI Prompt</p>
                            <p>.CAD</p>
                        </div>
                    </div>
                    <div class="profile-btns">
                        <button class="inspect">Inspect Dosier</button>
                        <button class="approve approve-cmp">Verify Company</button>
                    </div>
                </div>
                <div class="profiles">
                    <div class="img">
                        <img class="profile-img" src="../../assets/Florida.jpg" alt="">
                    </div>
                    <div class="details">
                        <h4 class="name">Roberts & Co Ltd</h4>
                        <p class="title">
                            Petroleum Processing- Fintech & Payments • 15 yrs business
                        </p>
                        <div class="core-skills">
                            <p>.Data Analysis</p>
                            <p>.AI Prompt</p>
                            <p>.CAD</p>
                        </div>
                    </div>
                    <div class="profile-btns">
                        <button class="inspect">Inspect Dosier</button>
                        <button class="approve approve-cmp">Verify Company</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminVerification',
}
</script>

<style scoped>
    .verification-component{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .top-badge-container{
        background: #151d2a;
        padding: 25px;
        color: white;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
    }

    .text-badge{
        background: #f59e0b;
        color: #151d2a;
        width: 25%;
        font-size: 12.5px;
        font-weight: 600;
        text-align: center;
        border-radius: 10px;
    }

    .left{
        width: 85%;
    }

    .right{
        width: 15%;
        align-content: center;
    }

    .left-h1{
        font-size: 25px;
    }

    .left-p{
        width: 60%;
        font-size: 13px;
    }

    .right h4{
        font-size: 40px;
    }

    .right p{
        font-size: 11.5px;
    }

    .all-profiles{
        display: flex;
        gap: 20px;
    }

    .professional-profiles, .company-profiles{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .profiles{
        background: white;
        border-radius: 10px;
        border: 1px solid #b7becad7;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: space-between;
    }

    .profile-heading{
        display: flex;
        gap: 15px;
    }

    .profile-heading p{
        font-size: 13px;
    }

    .profile-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .name{
        font-size: 14.5px;
    }

    .title{
        font-size: 13px;
        color:#6b7280;
    }

    .core-skills{
        display: flex;
        gap: 5px;
        color: #f59e0b;
        font-size: 11.5px;
    }

    .core-skills p{
        background: #f8d9a36b;
        padding: 3px;
        border-radius: 3px;
    }

    .profile-btns{
        display: flex;
        gap: 10px;
        align-items: center;
        
    }

    .inspect{
        background: white;
        padding: 10px;
        border: 1px solid #b7becad7;
        color: #6b7280;
        border-radius: 10px;
        width: 100%;
    }

    .approve{
        background: #2563eb;
        padding: 10px;
        border: 1px solid #b7becad7;
        color: white;
        border-radius: 10px;
        width: 100%;
    }

    .approve-cmp{
        background: #151d2a;
    }
</style>