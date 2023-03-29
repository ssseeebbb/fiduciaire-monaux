<template>
  <!-- <div id="map"></div> -->
  <div class="gmap">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17123.651269608865!2d4.424962322842509!3d50.35823777493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c226a7d7523d5f%3A0xa6155e8769a5c8e!2s4%C3%A8me%20Avenue%202%2C%206001%20Charleroi!5e0!3m2!1sen!2sbe!4v1680081267691!5m2!1sen!2sbe"
      width="100%"
      height="100%"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
function initMap() {
  // The location of Fiduciaire
  const monaux = { lat: 50.357139, lng: 4.433039 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: monaux,
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "all",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            weight: "0.40",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on",
          },
          {
            saturation: "-40",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#333366",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.stroke",
        stylers: [
          {
            hue: "#ff0000",
          },
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "all",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape.natural",
        elementType: "all",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
          // {
          //     "weight": "1.25"
          // },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#D5E0EC",
          },
        ],
      },
    ],
  });
  // The marker, positioned at monaux
  const marker = new google.maps.Marker({
    position: monaux,
    icon: "/files/marker.png",
    map: map,
  });
}

window.initMap = initMap;
</script>

<style lang="scss">
.gmap {
    filter:grayscale(100%);
    height: 350px;
}
</style>
