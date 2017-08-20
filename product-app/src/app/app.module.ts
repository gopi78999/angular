//node_modules
import {NgModule} from "@angular/core";

//node_modules
import { BrowserModule } from "@angular/platform-browser"

import {RouterModule} from "@angular/router";

//Project specific
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { routes } from "./app.routing"
import { ProductModule } from "./product/product.module";



@NgModule({
    //for prior module dependencies
imports:[
BrowserModule,
SharedModule,
RouterModule.forRoot(routes),
ProductModule,
//AuthModule
],
declarations:[
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    //AboutComponent,
    //ContactComponent,
    //HighlightDirective
    //Pipe
],

bootstrap:[
    AppComponent,
    //ChatAppComponent //Not recommended : Rule of thumb is only one Componet should keep here
]

})

export class AppModule{


}