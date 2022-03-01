import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { PipesModule } from './pipes/pipes.module';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
 import { Network } from '@ionic-native/network/ngx';
 import { Dialogs } from '@ionic-native/dialogs/ngx';
 import { FCM } from '@ionic-native/fcm/ngx';
 import { ImagePicker } from '@ionic-native/image-picker/ngx'
import { File } from '@ionic-native/file/ngx';
import { PostImagenService } from '../providers/post-imagen.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule,  ReactiveFormsModule, HttpClientModule, HttpModule, PipesModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],

  providers: [
    CallNumber,
    StatusBar,
    PostProvider,
    FCM,
    SplashScreen, 
   Network, 
   Dialogs,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
    ImagePicker,
    File,
    PostImagenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
