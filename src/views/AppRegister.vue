<template>
  <div class="body">
    <header>
      <div class="logo">
        <router-link to="/">
          <img id="hilora-logo" src="../assets/hilora-logo.png" alt="Hilora">
        </router-link>
      </div>
    </header>
    <form class="reg-professional">
        <div class="form-header">
          <h2>Create an Account</h2>
          <p>Register as a Professional</p>
        </div>
        <div class="select-user">
          <button @click="addProfessional" class="prof">Professional</button>
          <button @click="addEmployer" class="emp">Employer</button>
        </div>
        <div class="input">
            <label for="">Email</label>
            <input type="email" name="" id="">
        </div>
        <div class="input"> 
            <label for="">Password</label>
            <input type="password" name="" id="">
        </div>
        <div class="input">
            <router-link  to="/admin"> <input class="input-btn" type="submit" value="Register"></router-link>
        </div>
        <div class="other-text">
          <p class="p-switch">Already have an account?  <span class="login-switch">
            <router-link to="/login">Signin</router-link>
            </span></p>
        </div>
    </form>
    <form class="reg-employer">
        <div class="form-header">
          <h2>Create an Account</h2>
          <p>Register as an Employer</p>
        </div>
        <div class="select-user">
          <button @click="addProfessional" class="emp">Professional</button>
          <button @click="addEmployer" class="prof">Employer</button>
        </div>
        <div class="input">
            <label for="">Email</label>
            <input type="email" name="" id="">
        </div>
        <div class="input"> 
            <label for="">Password</label>
            <input type="password" name="" id="">
        </div>
        <div class="input">
            <router-link  to="/admin"> <input class="input-btn" type="submit" value="Register"></router-link>
        </div>
        <div class="other-text">
          <p class="p-switch">Already have an account?  <span class="login-switch">
            <router-link to="/login">Signin</router-link>
            </span></p>
        </div>
    </form>
  </div>

</template>

<script>

export default {
  name: 'AppRegister',
  methods: {
    addProfessional(e){
      e.preventDefault()

      const reg_professionals = document.querySelector('.reg-professional');
      const reg_employers = document.querySelector('.reg-employer');
      reg_professionals.style.display = 'flex';
      reg_employers.style.display = 'none';
    },
    addEmployer(e){
      e.preventDefault()

      const reg_professionals = document.querySelector('.reg-professional');
      const reg_employers = document.querySelector('.reg-employer');
      reg_employers.style.display = 'flex';
      reg_professionals.style.display = 'none';
      
    }
  }
}
</script>

<style scoped>
.logo{
  width: 10%;
}

#hilora-logo{
  width: 140px;
  height: 40px;
}

.body{
  background: var(--color-bg-light);
  height: 100vh;
}

header{
  padding: 0 60px 0 60px;
  height: 60px;
  align-content: center;
  border-bottom: 1px solid #8790a163;
}

form{
  display: flex;
  flex-direction: column;
  width: 35%;
  justify-self: center;
  margin-top: 80px;
  box-sizing: border-box;
  gap: 15px;
  padding: 30px;
  border: 1px solid #8790a163;
  border-radius: 5px;
}

.reg-employer{
  display: none;
}

.form-header{
  text-align: center;
}

.form-header h2{
  color: #151d2a;
}

.select-user{
  display: flex;
  width: 100%;
  gap: 10px
}

.prof{
  background: #ff5524;
  color: white;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
}

.emp{
  color: #151d2a;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #151d2a;
}

.input{
  display: flex;
  flex-direction: column;
}

input{
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #8790a163;
}

.input-btn{
  width: 100%;
  background: #151d2a;
  color: white;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.p-switch, label{
  font-size: 15px;
  color: #151d2a;
}

.login-switch{
  color: #ff5524;
  font-weight: 600;
}

</style>
