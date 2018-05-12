<template>
    <div class="default-layout">
        <!-- header-->
        <header-partials></header-partials>
        <!-- end header-->
    
        <!-- main-->
        <main class="main-section mb-5">
            <div class="container">
                <slot name="content"></slot>
            </div>
        </main>
        <!-- end main-->

        <!-- footer-->
        <footer-partials></footer-partials>
        <!-- end footer-->

    </div>
</template>

<script>
import HeaderPartials from '@/partials/HeaderPartials'
import FooterPartials from '@/partials/FooterPartials'
export default {
    name: 'DefaultLayout',
    components: {
        HeaderPartials,
        FooterPartials
    }
}
</script>
