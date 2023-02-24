// import React, {useRef, useEffect, useState} from 'react';
// import mapboxgl from 'mapbox-gl';
// import "./Map.css";
// import markers from './testing2.json'


// // Mapbox key

// const MapboxToken = process.env.REACT_APP_TOKEN
// mapboxgl.accessToken=MapboxToken



// function MainMap() {

//     // const {flyThis} = useGlobalContext()
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [zoom, setZoom] = useState(5);
//     const [lng, setLng] = useState(-70.9);
//     const [lat, setLat] = useState(42.35);
    

//     useEffect(() => {
//             // from Mapbox.com
//         if (map.current) return;
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v12',
//             center: [lng, lat],
//             zoom: zoom,
//             });

//             // from Mapbox.com
//             markers.map((marker) => new mapboxgl.Marker()
//             .setLngLat(marker)
//             .setPopup(new mapboxgl.Popup({offset:50})
//             // looking to populate shelter name in line below
//             .setHTML(`<h1>Hey Tim</h1>`))
//             .addTo(map.current));
//         });
         
   
//         useEffect(() => {
//             if (!map.current) return; // wait for map to initialize
//             map.current.on('move', () => {
//             setLng(map.current.getCenter().lng.toFixed(4));
//             setLat(map.current.getCenter().lat.toFixed(4));
//             setZoom(map.current.getZoom().toFixed(2));
//                 });

// // Add the control to the map.
// // map.addControl(
// //     new MapboxGeocoder({
// //     accessToken: mapboxgl.accessToken,
// //     mapboxgl: mapboxgl
// //     })
// //     );





//             });

//             // flyThis()
       


//         //  function flyThis () {map.flyTo({
//         //     center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
//         //     essential: true // this animation is considered essential with respect to prefers-reduced-motion
//         //     })};
//         //     flyThis();
   
//   return (
//     <div>
//         {/* Gives the map with the inital coordinates */}
//         <div className="sidebar">
//             Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//         <div ref={mapContainer} className="map-container mt-5" />
        
//     </div>
//   )
// }


// export default MainMap