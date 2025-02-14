<script setup lang="ts">
import NavBar from '../components/TransparentNavBar.vue'
</script>


<template>
    <div>
        <!-- Make background image be entire page -->
        <div class="parallax">
            <NavBar />
            <div class="parallax-content">
                <img src="@/assets/logo.png" style="width: 80vh; height: 29vh;"></img>
                <div class="slogan" v-for="(word, index) in words" :key="index" :style="getStyle(index)">
                    {{ word }}
                </div>
                <!-- <p class="parallax-subtitle">We are a non-profit organization that helps people in need</p> -->
            </div>
        </div>
    </div>

</template>



<style>
/* .parallax {
    background-image: url(@/assets/frontPage2.png);
    height: 100vh;
    width: 100vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.parallax-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
} */

.parallax-title {
    font-size: 3rem;
    font-weight: 700;
    /* Set the position to the top left of the page */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;

}

.parallax-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
}
</style>