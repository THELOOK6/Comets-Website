<script setup>
// Documentation for vue3-carousel: https://vue3-carousel.ismail9k.com/getting-started.html

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import compEspagne from '../assets/imageHaley/espagne/compEspagne.jpg'
import halleySide from '../assets/imageHaley/espagne/HalleySide.jpg'
import varsitySunset from '../assets/imageHaley/varsity/sunset-side.jpg'
import varsitySunset2 from '../assets/imageHaley/varsity/sunset-side-wide.jpg'
import gablook from '../assets/imageHaley/varsity/gab-look.jpg'
import topgun from '../assets/imageHaley/varsity/top-gun.jpg'
import halleyprep from '../assets/imageHaley/varsity/halley-prep.jpg'
import tresamigos from '../assets/imageHaley/varsity/tres-amigos.jpg'
import varsityTeam2024 from '../assets/imageHaley/varsity/varsity-team-2024.jpg'



let slides = [
    {
        id: 'slide-1',
        title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: halleySide,
    },
    {
        id: 'slide-2',
        title: 'Slide <b style="font-size: 1.3em;color: red">#2</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: compEspagne,
    },
    {
        id: 'slide-4',
        title: 'Slide <b style="font-size: 1.3em;color: red">#4</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: varsitySunset2,
    },
    {
        id: 'slide-5',
        title: 'Slide <b style="font-size: 1.3em;color: red">#4</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: topgun,
    },
    {
        id: 'slide-6',
        title: 'Slide <b style="font-size: 1.3em;color: red">#4</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: gablook,
    },
    {
        id: 'slide-7',
        title: 'Slide <b style="font-size: 1.3em;color: red">#4</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: halleyprep,
    },
    {
        id: 'slide-8',
        title: 'Slide <b style="font-size: 1.3em;color: red">#4</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: tresamigos,
    },
    {
        id: 'slide-8',
        title: 'Slide <b style="font-size: 1.3em;color: red">#4</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: varsityTeam2024,
    },
    // Other slides...
]

const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    autoplay: 2000,
    transition: 550,
    pauseAutoplayOnHover: true
}
</script>

<template>
    <Carousel v-bind="carouselConfig">
        <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
                <img :src="slide.image" :alt="slide.title" class="slideImage" />
            </div>
        </Slide>

        <template #addons>
            <!-- <Navigation /> -->
            <!-- <Pagination /> -->
        </template>
    </Carousel>
</template>

<style>

.carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
}

.slideImage {
    width: 80%;
    height: 100%;
    object-fit: contain;
}
</style>