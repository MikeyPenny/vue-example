<template>
    <default-layout>
        <section slot="content">
            <!-- Default form register -->
            <form class="form-signin">
                <p class="h4 text-center mb-4">Regístrate</p>

                <!-- Default input name -->
                <label for="defaultFormRegisterNameEx" class="grey-text">Your name</label>
                <input type="text" id="defaultFormRegisterNameEx" class="form-control">
                
                <br>

                <!-- Default input email -->
                <label for="defaultFormRegisterEmailEx" class="grey-text">Your email</label>
                <input type="email" id="defaultFormRegisterEmailEx" class="form-control">
                
                <br>

                <!-- Default input email -->
                <label for="defaultFormRegisterConfirmEx" class="grey-text">Confirm your email</label>
                <input type="email" id="defaultFormRegisterConfirmEx" class="form-control">

                <br>

                <!-- Default input password -->
                <label for="defaultFormRegisterPasswordEx" class="grey-text">Your password</label>
                <input type="password" id="defaultFormRegisterPasswordEx" class="form-control">

                <div class="text-center mt-4">
                    <button class="btn btn-primary" type="submit">Registrarse</button>
                </div>
            </form>
            <!-- Default form register -->
                      
        </section>
    </default-layout>
</template>


<script>
import DefaultLayout from '@/layouts/DefaultLayout'
export default {
    name: 'Register',
    components: {
        DefaultLayout
    }
}
</script>

<style></style>
