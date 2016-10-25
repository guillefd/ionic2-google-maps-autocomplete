import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';

declare var google:any;

@Component({
    selector: 'page-page-gmap-autocomplete',
    templateUrl: 'page-gmap-autocomplete.html'
})
export class PageGmapAutocomplete implements OnInit {

    address:any = {
        place: ''
    };
    placesService:any;
    map: any;

    constructor(public navCtrl: NavController,
        public modalCtrl: ModalController) { 
    }

    ngOnInit() {
        this.initMap();
    }

    showModal() {
        let modal = this.modalCtrl.create(ModalAutocompleteItems);
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            this.address.place = data.description;
            // get details
            this.getPlaceDetail(data.place_id);            
        })
        modal.present();
    }

    private getPlaceDetail(place_id:string) {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set place in map
                self.map.setCenter(place.geometry.location);
                self.createMapMarker(place);
            }else{
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    }

    private initMap() {
        var point = {lat: -34.603684, lng: -58.381559}; 
        let divMap = (<HTMLInputElement>document.getElementById('map'));
        this.map = new google.maps.Map(divMap, {
            center: point,
            zoom: 15
        });
    }

    private createMapMarker(place:any):void {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: this.map,
          position: place.geometry.location
        });    
    }    
}
