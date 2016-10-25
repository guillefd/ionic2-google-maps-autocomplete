import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { PageGmapAutocomplete } from '../pages/page-gmap-autocomplete/page-gmap-autocomplete';
import { ModalAutocompleteItems } from  '../pages/modal-autocomplete-items/modal-autocomplete-items';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    PageGmapAutocomplete,
    ModalAutocompleteItems
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    PageGmapAutocomplete,
    ModalAutocompleteItems
  ],
  providers: []
})
export class AppModule {}
