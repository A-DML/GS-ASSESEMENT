<template>
<div>
    <form @submit.prevent="handleSubmit" class=" pt-16">
        <div class="font-bold text-2xl-200">
            Welcome back
        </div>
        <div class="tracking-normal pt-6">
            To get started, please provide the information needed below.
        </div>
        <label class="text-base bg-gra">Email Address:</label>
        <input type="email" class="bg-gray-200" v-model="email" required>

        <label class="text-base"> Enter Password :</label>  
        <input type="password" class="bg-gray-200" v-model="password" required>            
        <div v-if="passwordError" class="error">{{ passwordError }} </div>

        <!-- <label>Role :</label>
        <select v-model="role">
            <option value="designer">Web Designer</option> 
            <option value="developer">Web Developer</option> 
        </select> --> 
  
        <div>
            <label class="underline text-sm">Forgot password?</label>
        </div>

        <router-link
            :to="{ name: 'Home' }" class=" " >
           <div class="button text-center border-3px bg-blue-600 rounded-md">
            <button class="submit text-white py-6" type="submit">Continue with email</button>
        </div>
          </router-link>

        <!-- <div class="button text-center border-3px bg-blue-600 rounded-md">
            <button class="submit text-white py-6" type="submit">Continue with email</button>
        </div> -->
        
        <div class="py-7 text-center">or</div>

        <div class="button text-center border border-gray rounded-md ">
            <button class="submit py-6" type="submit">Continue with Google</button>
        </div>
        <div class="pt-8 text-xs text-center">Don't have an account? Sign up now.</div>
    </form>

</div>

</template>
<script>
export default{

    data() {
        return {
            email: '',
            password: '',
            role: 'designer',
            education: [],
            terms: false,
            passwordError: ''
        }
    },
    methods: {
   
        handleSubmit() {
            //Validate password field length
            this.passwordError = this.password.length > 6 ? 
            '' : 'Password should be more than 6 characters long!';

            if(!this.passwordError) {
                console.log(this.email);
                console.log(this.password);
                console.log(this.role);
                console.log(this.education);
                console.log(this.terms);

            }
        }
    }
    
}
</script>


<style scoped> 

form {
    /* max-width: 600px; */
    margin: 100px auto;
    /* background: #fff; */
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display:inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: bordre-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

/* input[type="checkbox"] {
    display: inline-block;
    width:16px;
    margin: 0 10px 0;
    position: relative;
    top: 2px;
} */

.pill {
    display: inline-block;
    margin: 20px 10px 0 0 ;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    background: #eee;
}

/* button {
    background: rgb(7, 24, 7);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
} */

.submit {
    text-align: center;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>
