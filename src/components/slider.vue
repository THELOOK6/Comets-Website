<template>
  <vueper-slides class="ex--center-mode" :arrows="false" ref="myVueperSlides" autoplay :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false" @autoplay-resume="internalAutoPlaying = true">
    <vueper-slide class="custom-slide" v-for="(slide) in slides" :key="slide.id" :image="slide.image" />
    <template #pause>
      <i class="icon pause_circle_outline"></i>
    </template>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// Import your images here
import compEspagne from '../assets/imageHaley/espagne/compEspagne.jpg'
import halleySide from '../assets/imageHaley/espagne/HalleySide.jpg'
import varsitySunset from '../assets/imageHaley/varsity/sunset-side.jpg'
import varsitySunset2 from '../assets/imageHaley/varsity/sunset-side-wide.jpg'

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
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
          id: 'slide-3',
          title: 'Slide <b style="font-size: 1.3em;color: red">#3</b>',
          content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
          image: varsitySunset,
        },
        {
          id: 'slide-4',
          title: 'Slide <b style="font-size: 1.3em;color: red">#4</b>',
          content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
          image: varsitySunset2,
        },
        // Other slides...
      ]
    };
  },
}
</script>

<style scoped>
 .ex--center-mode {
  width: 80%;
  max-width: 100%;
  margin: auto; 
}
/*
.ex--center-mode .vueper-slide{
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto; 
}



.vueper-slide {
  width: 100%;
  height: 400px; /* Adjust height as needed 
}

.custom-slide img { /* Use 'contain' if you want to ensure the entire image fits without cropping 
}*/

vueper-slides {
  width: 100%;
  height: 500px; 
  position: relative;
  object-fit: contain;
}

vueper-slide.custom-slide {
  width: 100%;
  height: auto !important;
  object-fit: cover; 
}


</style>