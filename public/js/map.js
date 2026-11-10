document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("map");

  if (!mapContainer) {
    console.error("Map container not found");
    return;
  }

  const listingAddress = mapContainer.dataset.address;

  // Initialize Map
  const map = new maplibregl.Map({
    container: "map",
    style: "https://demotiles.maplibre.org/style.json",
    center: [77.209, 28.6139],
    zoom: 5,
  });

  // Navigation controls
  map.addControl(new maplibregl.NavigationControl(), "top-right");

  map.on("load", async () => {
    console.log("Map loaded successfully");

    if (!listingAddress) {
      console.warn("Listing address not found");
      return;
    }

    try {
      // Geocoding API
      const url = new URL("https://nominatim.openstreetmap.org/search");

      url.searchParams.set("format", "jsonv2");
      url.searchParams.set("q", listingAddress);
      url.searchParams.set("limit", "1");

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Geocoding API failed");
      }

      const data = await response.json();

      if (!data.length) {
        console.warn("Address not found");
        return;
      }

      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      // Move map to exact coordinates returned by geocoder
      map.flyTo({
        center: [lon, lat],
        zoom: 15,
        speed: 1.2,
        curve: 1.4,
        essential: true,
      });

      // Add marker at exact location
      const marker = new maplibregl.Marker({
        color: "#2563eb",
        scale: 1.3,
      })
        .setLngLat([lon, lat])
        .setPopup(
          new maplibregl.Popup({
            offset: 25,
          }).setHTML(`<strong>${escapeHTML(listingAddress)}</strong>`),
        )
        .addTo(map);

      // Open popup automatically
      marker.togglePopup();

      console.log("Marker added:", lat, lon);
    } catch (error) {
      console.error("Map error:", error);
    }
  });

  map.on("error", (event) => {
    console.error("MapLibre error:", event.error);
  });
});

// Prevent HTML injection in popup
function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
}
