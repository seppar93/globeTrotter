import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
var apiKEY = "AIzaSyAe93vG1VkdQFDvlAvFquN7Z6Z33BGlfjo";
const containerStyle = {position: 'absolute', width: '50%', height:'55%'}
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