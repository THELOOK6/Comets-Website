<!--
  THIS COMPONENT MUST BE REVIEWED TO DISPLAY HALLEY SPONSORS SLIDING IN HALLEY PAGE 
 
                                      DO NOT DELETE

-->


<template>
  <div class="rolling-slide">
    <div class="slide-track" ref="track">
      <div v-for="(image, index) in images" :key="index" class="slide">
        <img :src="image" :alt="'Slide ' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RollingSlide',
  data() {
    return {
      images: [
        '/src/assets/LOGOS_SPONSORS/76_png.png',
        '/src/assets/LOGOS_SPONSORS/Campagna_Crest(144x144)hd.png',
        '/src/assets/LOGOS_SPONSORS/BRP(144x144).png',
        '/src/assets/LOGOS_SPONSORS/ÉNA(84x183).png',
        '/src/assets/LOGOS_SPONSORS/aeets(80x193).png',
        '/src/assets/LOGOS_SPONSORS/Cerakote(36x90).png',
        '/src/assets/LOGOS_SPONSORS/drillmex.svg',
        '/src/assets/LOGOS_SPONSORS/fast(99x210).png',
        '/src/assets/LOGOS_SPONSORS/fortnine(49x65).png',
        '/src/assets/LOGOS_SPONSORS/furick.svg',
        '/src/assets/LOGOS_SPONSORS/hyperpro(31x103).png',
        '/src/assets/LOGOS_SPONSORS/IVI(84x184).png',
        '/src/assets/LOGOS_SPONSORS/Kimplex(25x125).png',
        '/src/assets/LOGOS_SPONSORS/LOGO_ETS.jpg',
        '/src/assets/LOGOS_SPONSORS/mms-laser(76,5x196,8).png',
      ],
      trackWidth: 0,
    };
  },
  mounted() {
    this.setTrackWidth();
    this.startInfiniteScroll();
  },
  methods: {
    setTrackWidth() {
      // Set width of the slide track dynamically based on the number of images
      this.trackWidth = this.$refs.track.scrollWidth;
    },
    startInfiniteScroll() {
      setInterval(() => {
        this.moveFirstImageToBack();
      }, 1000); // Adjust timing for smoothness and speed
    },
    moveFirstImageToBack() {
      const firstImage = this.images.shift();
      this.images.push(firstImage);
    },
  },
};
</script>

<style scoped>
.rolling-slide {
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-track {
  display: flex;
  animation: scrollLeft 30s linear infinite;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* Move the entire width */
  }
}

.slide {
  min-width: 10%;
  box-sizing: border-box;
  margin-right: 20px;
}

.slide img {
  width: auto;
  height: 7%;
  display: block;
}
</style>
