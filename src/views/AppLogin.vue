<template>
  <div class="body">
    <header>
      <div class="logo">
        <router-link to="/">
          <img id="hilora-logo" src="../assets/hilora-logo.png" alt="Hilora">
        </router-link>
      </div>
    </header>
    <form>
        <div class="form-header">
          <h2>Login to your Account</h2>
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
            <router-link  to="/admin"> <input class="input-btn" type="submit" value="Login"></router-link>
        </div>
        <div class="other-text">
          <p class="p-switch">Don't have an account? <span class="login-switch">
            <router-link to="/register">Register</router-link>
            </span></p>
        </div>
    </form>
  </div>

</template>

<script>

export default {
  name: 'AppLogin',
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

.form-header{
  text-align: center;
}

.form-header h2{
  color: #151d2a
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
