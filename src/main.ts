import { enableProdMode, importProvidersFrom } from '@angular/core';


import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { ProductService } from './app/demo/service/product.service';
import { PhotoService } from './app/demo/service/photo.service';
import { NodeService } from './app/demo/service/node.service';
import { IconService } from './app/demo/service/icon.service';
import { EventService } from './app/demo/service/event.service';
import { CustomerService } from './app/demo/service/customer.service';
import { CountryService } from './app/demo/service/country.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule, BrowserAnimationsModule),
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, provideHttpClient()
    ]
})
  .catch(err => console.error(err));
