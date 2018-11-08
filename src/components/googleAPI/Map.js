import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
var apiKEY = "AIzaSyAe93vG1VkdQFDvlAvFquN7Z6Z33BGlfjo";
const containerStyle = {position: 'absolute', width: '65%', height:'60%'}
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      containerStyle: props
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map google={this.props.google} center={{ lat: 48.8566, lng: 2.3522}} zoom={10} containerStyle={containerStyle}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: (apiKEY)
})(MapContainer)








// import React from "react";
// import "./Map.css";
// import { Route, Link } from "react-router-dom";
// var googleAPIKey = "AIzaSyCN3EyjOpztvL3D3bhE9zYi7KoSpczjM1s";
// var userDestination = ["Kyoto", "Japan"];
// var map, service;
// var poiSelections = ["Museums", "Restaurants", "Worship", "Attractions", "Points of Interest"];

// var markers = {};

// class Map extends React.Component {
//     constructor(props){

//     }

//     function initMap() {
//         map = new google.maps.Map(
//             document.getElementById('map'), {zoom: 12, center: destinationLatLng});
//         var marker = new google.maps.Marker({position: destinationLatLng, map: map});
       
//     }
    
//     function populateMapCheckboxes() {
//         $("#filters").empty();
//         for (var i = 0; i < poiSelections.length; i++) {
//             var checkbox = $("<input type=\"checkbox\" class=\"checkbox\"></input>");
//             var label = $("<label></label>");
//             checkbox.attr("value", poiSelections[i]).attr("id", "selection_" + poiSelections[i])
//             label.attr("for", "selection_" + poiSelections[i]).html(poiSelections[i]);
//             $("<li>").append(checkbox).append(label).appendTo("#filters");
//         }
//     }
//     function mapSelectionAdd(query) {
//         service = new google.maps.places.PlacesService(map);
//         service.nearbySearch({
//             location: destinationLatLng,
//             radius: 20000,
//             keyword: query
//         }, function (results, status) {
//             if (status === google.maps.places.PlacesServiceStatus.OK) {
//                 var arr = [];
//                 results.forEach(function (p) {
//                     var m = new google.maps.Marker({
//                         position: p.geometry.location,
//                         icon: {
//                             url: p.icon,
//                             scaledSize: new google.maps.Size(24,24)
//                         },
//                         title: p.name,
//                         animation: google.maps.Animation.DROP,
//                         map: map
//                     });
//                     arr.push(m);
//                 });
//                 markers[query] = arr;
//             } else {
//                 alert(status);
//             }
//             console.log(markers)
//         });
//     }
    
//     function mapSelectionRemove(query) {
//         for (var i = 0; i < markers[query].length; i++) {
//             markers[query][i].setMap(null);
//         }
//         delete markers[query];
    
//     }
    
//     function mapCompleteRemove() {
    
//         $.each(markers, function(key, value) {
//             for (var i = 0; i < value.length; i++) {
//                 value[i].setMap(null);
//             }
//             delete markers[key];
//         });
    
//     }


//     render() {
//       return (
//         <div>

//         </div>

//       );
//     }
//   }

// export default Map;


