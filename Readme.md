
# Google Maps Places Autocomplete for Ionic 2 
-----

Based on DevFanatic blog post by @ivanthecrazy 
http://devfanaticblog.com/google-maps-autocomplete-for-ionic-2-applications/
  
**Basic implementation of Google Maps API Autocomplete for Ionic 2  
using methods getPlacePredictions() Places Library**

### Google Maps Libraries implemented
- AutocompleteService class  
  [google.maps.places.AutocompleteService.getPlacePredictions()](https://developers.google.com/maps/documentation/javascript/reference#AutocompleteService)
- PlacesService class
  [google.maps.places.PlacesService.getDetails()](https://developers.google.com/maps/documentation/javascript/reference#PlacesService)
- Map class  
  [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference#Map)  
- Marker class
  [google.maps.Marker](https://developers.google.com/maps/documentation/javascript/reference#Marker)

### Dataflow implementation
Open the menu and tap "Autocomplete Page"  
1. a map is initiated at the top   
2. click address input, a "Modal" page opens  
3. In modal page:  
    - start typing an address in the searchbox    
    - below the searchbox a list of addresses is autocompleted with the API predictions  
4. tap an item of the list to choose an address, modal will close  
5. back in the "Autocomplete Page":  
    - place_id is read from the item selected  
    - getDetails() is called to get all the address details  
    - address components are populated in the page
    - the map is centered with the new address
    - a marker is added to the map at the new address


### Installation

- install ionic, cordova

    $ npm install -g ionic cordova

- setup Google Maps API

open src/index.html
    
    // paste your Google API in line 27
    <script src="https://maps.googleapis.com/maps/api/js?v=3&key=YOUR-API-KEY&libraries=places"></script>

- setup map init lat/lng

the map latitude/longitude center point   
open src/pages/page-gmap-autocomplete/page-gmap-autocomplete.ts

    // change lat/ln (line 98)
    ...
    private initMap() {
        var point = {lat: -34.603684, lng: -58.381559}; // actual: Buenos Aires
    ...     

- setup country restrictions

this will restrict the api search to the country selected  
open src/pages/modal-autocomplete-items/modal-autocomplete-items.ts

    // change country code to one of your choice (line 47)
    ...
    let config = { 
        types:  ['geocode'],
        input: this.autocomplete.query, 
        componentRestrictions: { country: 'AR' }  // actual: Argentina 
    }
    ...
    

### Test

- web browser

    $ ionic serve

- android

    $ ionic run android

### Environment

    $ ionic info

    Cordova CLI: 6.4.0                                                                                                                                        
    Gulp version:  CLI version 3.9.1                                                                                                                          
    Gulp local:                                                                                                                                               
    Ionic Framework Version: 2.0.0-rc.1                                                                                                                       
    Ionic CLI Version: 2.1.4                                                                                                                                  
    Ionic App Lib Version: 2.1.2                                                                                                                              
    Ionic App Scripts Version: 0.0.36                                                                                                                         
    OS:                                                                                                                                                       
    Node Version: v4.2.2 



Enjoy.