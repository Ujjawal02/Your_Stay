// Initialize Map
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [77.2090, 28.6139], // default center
  zoom: 5
});

// Geocode the injected address (from EJS)
if (typeof listingAddress !== "undefined") {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(listingAddress)}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);

        // Center map on geocoded location
        map.setCenter([lon, lat]);
        map.setZoom(5);

        // Add marker
        new maplibregl.Marker({ color: 'blue' })
          .setLngLat([lon, lat])
          .setPopup(new maplibregl.Popup().setText(listingAddress))
          .addTo(map);
      } else {
        console.warn("Address not found in geocoding API");
      }
    })
    .catch(err => console.error("Geocoding error:", err));
}

