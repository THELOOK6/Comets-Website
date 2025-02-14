<!-- 
      THIS MAP COMPONENT IS USED IF WE WANT TO REPLACE THE GOOGLE MAPS API WITH LEAFLET MAPS API

      DO NOT DELETE
-->


<!-- 
<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import leaflet from 'leaflet'
import { onMounted } from "vue";

let map: leaflet.Map

// To Use this custom Map, just input coordinates of your location and title to use 

onMounted(() => {
  map = leaflet
    .map("map", {
      preferCanvas: true
    })
    .setView([45.49354549759658, -73.56256964230813], 17); // Change Coordinates and Zoom Level


  leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);


  var marker = leaflet.marker([45.49354549759658, -73.56256964230813], // Change Coordinates for the marker on the map
    {
      title: "ComETS Moto Electrique",
      alt: "ComETS Moto Electrique",
      draggable: false,
    }
  ).addTo(map);
  marker.bindPopup("ComETS Moto Electrique").openPopup(); // Change the title of the marker
});

</script>

<style scoped>
#map {
  padding-top: 10%;
  padding-bottom: 10%;
  width: 100%;
  height: 50%;
}

/* .Map {
  width: 100%;
  height: 100%;
} */
</style> -->