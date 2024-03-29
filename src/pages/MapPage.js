import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";

import EditPopUpInfo from "../components/PopUP/EditPopUpInfo";
import ViewPopUpStart from "../components/PopUP/ViewPopUpStart";
import ChatInPopUp from "../components/PopUP/ChatInPopUp";
function MapPage() {
  const [editPopupInfo, setEditPopupInfo] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [currentLatLng, setCurrentLatLng] = useState(["0.00000", "0.00000"]);
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: 40.87,
    longitude: -98.33,
    zoom: 1.5,
    maxZoom: 14,
    minZoom: 0,
    projection: "globe",
  });
  const [locationsMarked, setLocationsMarked] = useState([
    {
      markerID: 0,
      name: "New York",
      coordinates: [-73.33, 40.87], // [long , lat]
      images: [
        "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1549321174/production/city/hero_image_12_1549321174.jpg",
        "https://img.grouponcdn.com/deal/NHjGV2FkqS3qKFu3wqWwP4M3xB6/NH-976x586/v1/c870x524.jpg",
        "https://media.gettyimages.com/id/1269226133/photo/concept-of-new-york-city-statue-of-liberty-downtown.jpg?s=612x612&w=gi&k=20&c=j490kQvLK__AlFHjeip2eyt9X954Nda82kn1yIs3vkk=",
        "https://media.istockphoto.com/id/1340381886/photo/aerial-view-of-manhattan-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=uXyWuZuP-4maEheV1sc90cmwBGG4fn3C108_MgJ9Zro=",
      ],
      chats: ["Chat Marker 0 1", "Chat Marker 0 2","Chat Marker 0 3"]
    },
    {
      markerID: 1,
      name: "Denver",
      coordinates: [-105.33, 39.87],
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexzIiOxb447izZqKuAndd_bSD8EX146wzTIx7K6uiiPPqsqkKvr4E0xUbj8KasgVF5AM&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeYzcZ0kyg59IbU6uJnC0vBu_8UG1zvB-yaSsIbcVUJWNHaZKdPaWWUD5alv5lBtDgok&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_VFA4Al87aQBYSClO7TT3IGZoKXN-FVI8g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6r9FJ03CZaE9cXY3Fs2IXMdKewUk3glFMTQ&usqp=CAU",
      ],
      chats: ["Chat Marker 1 1", "Chat Marker 1 2","Chat Marker 1 3"]
    },
  ]);

  // On move fucntionality sets current lat and long (print e to see full object)
  // style and global are hard set in ReactMapGl comp
  const onMoveFunc = (e) => {
    //    console.log("event from move fucntion",e);
    setViewState(e.viewState);
    setCurrentLatLng([e.viewState.latitude, e.viewState.longitude]);
  };

  const CeartMakerFunc = (event) => {
    console.log("event from CeartMakerFunc funciton in MapPage", event);
    console.log(
      "event.lngLat from CeartMakerFunc funciton in MapPage",
      event.lngLat
    );
    const longitude = event.lngLat.lng;
    const latitude = event.lngLat.lat;

    setLocationsMarked([
      ...locationsMarked,
      {
        name: "New Marker",
        markerID: locationsMarked.length,
        coordinates: [longitude, latitude],
      },
    ]);
  };

  const clickFuncSelectMarker = (markedLocation) => {
    if (markedLocation != selectedMarker) {
      console.log("marked location in onClick button", markedLocation);
      setSelectedMarker(markedLocation);
    } else console.log(markedLocation);
  };

  useEffect(() => {}, []);

  // console.log("selected marker",selectedMarker);
  // function to Edit Popup

  return (
    <div>
      <div className="CurrentLatLngBox">
        Current Location
        <div>Latitude:{currentLatLng[0]}</div>
        <div>Longitude:{currentLatLng[1]}</div>
      </div>
      <ReactMapGL
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        projection="globe"
        range = {[ -100, 100]}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewState}
        onMove={onMoveFunc}
        onDblClick={(event) => {
          event.preventDefault();
          CeartMakerFunc(event);
        }}
      >
        {/* <NavigationControl /> */}
        {locationsMarked
          ? locationsMarked.map((markedLocation, index) => (
              <Marker
                key={index}
                latitude={markedLocation.coordinates[1]}
                longitude={markedLocation.coordinates[0]}
              >
                <div
                  className="marker"
                  onClick={(e) => {
                    e.preventDefault();
                    clickFuncSelectMarker(markedLocation);
                  }}
                >
                  {markedLocation.images ?
                  <img src={markedLocation.images[0]} alt="image 1 of iamges" title={markedLocation.name}/>
                  : <button>Create</button>}
                </div>
              </Marker>
            ))
          : null}

        {selectedMarker ? (
          <Popup
            closeOnClick={false}
            closeButton={true}
            latitude={selectedMarker.coordinates[1]}
            longitude={selectedMarker.coordinates[0]}
            onClose={(e) => {
              setSelectedMarker(null);
              setEditPopupInfo(false);
            }}
          >
            {editPopupInfo ? (
              <div>
                <EditPopUpInfo
                  selectedMarker={selectedMarker}
                  locationsMarked={locationsMarked}
                  setLocationsMarked={setLocationsMarked}
                  setEditPopupInfo={setEditPopupInfo}
                />
              </div>
            ) : (
              <div>
                <button
                  onClick={(e) => {
                    setEditPopupInfo(true);
                  }}
                >
                  Edit
                </button>
                <ViewPopUpStart selectedMarker={selectedMarker} />
                <ChatInPopUp selectedMarker={selectedMarker}/>
              </div>
            )}
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
export default MapPage;
