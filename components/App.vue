<template>
  <div style="height: 100%">

    <div class="tabs">
      <ul>
        <li><a @click="goTo">Go to school</a></li>
        <li><a @click="flyTo">Fly to school</a></li>
        <li><a>item3</a></li>
      </ul>
    </div>

    <div id="map"></div>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
export default {
  name: "App",
  mounted(){
    const loader = new Loader({
      apiKey: "AIzaSyCPyCP_3Ti6mrCGlctc3CKr5ezm0pGSQMQ",
      version: "weekly"
    });
    loader.load().then(() => {
        this.map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
        console.log(this.map);
    });
  },
  data(){
    return {
      map: null
    }
  },
  methods: {
    goTo(){
      this.map.setCenter({lat: 59.426657, lng: 24.743568});
      this.map.setZoom(19);
    },
    flyTo(){
      this.map.panTo({lat: 59.426357, lng: 24.743668})
    }
  }
}
</script>

<style scoped>

</style>