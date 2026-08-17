<template>
    <AdminNav />
    <div class="admin">
        <div class="left-side">
            <AdminSidebar />
        </div>
        <div class="right-side">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminNav from '../components/admin/AdminNav'

export default {
    name: 'AppAdmin',
    components: {
        AdminNav,
        AdminSidebar,
    }
}
</script>

<style scoped>
    .admin{
        display: flex;
    }

    .left-side{
        padding: 100px 50px 100px 50px;
        width: 20%;
        min-height: 100vh;
        display: flex;
        flex-direction: column; 
        overflow: hidden;
        box-sizing: border-box;
        border-right: 1px solid #8d95a563;
    }
    
    .right-side{
        padding: 100px 40px 100px 40px;
        background: #F8FAFC;
        width: 80%;
        min-height: 100vh;
        display: flex;
        flex-direction: column; 
        overflow: hidden;
        box-sizing: border-box;
    }
</style>