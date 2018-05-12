<template>
    <default-layout>
        <section slot="content">
            
            <form class="form-signin">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa email">
                    <small id="emailHelp" class="form-text text-muted">Nunca compratiremos tu dirección con nadie más.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Recuérdame</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    </default-layout>
</template>


<script>
import DefaultLayout from '@/layouts/DefaultLayout'
export default {
    name: 'Login',
    components: {
        DefaultLayout
    }
}
</script>

<style></style>