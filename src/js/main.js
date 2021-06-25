// Mapbox
mapboxgl.accessToken =
  'pk.eyJ1IjoidGhhcmlxYXVkYWgiLCJhIjoiY2tweXB5dWkxMTVidjJ2cDJzM2tuem5rdyJ9.lIbwLumA1usrqnIkhlLiKQ';
const map = new mapboxgl.Map({
  container: 'map',
  center: [106.806136, -6.224293],
  zoom: 18,
  style: 'mapbox://styles/mapbox/streets-v11',
});

// Light gallery
lightGallery(document.querySelector('#light-portfolio'), {
  selector: '.item',
});
