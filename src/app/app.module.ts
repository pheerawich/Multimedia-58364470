import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment';
import { GoogleCloudVisionServiceProvider } from '../providers/google-cloud-vision-service/google-cloud-vision-service';
import { InfoPage } from '../pages/info/info';
import { MenuPage } from '../pages/menu/menu';
import { CombasicPage } from '../pages/combasic/combasic';
import {WhatcomPage} from '../pages/whatcom/whatcom';
import { FreshyPage } from '../pages/freshy/freshy';
import { JuniorPage } from '../pages/junior/junior';
import { SeniorPage } from '../pages/senior/senior';
import { SophomorePage } from '../pages/sophomore/sophomore';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoPage,
    MenuPage,
    CombasicPage,
    WhatcomPage,
    FreshyPage,
    JuniorPage,
    SeniorPage,
    SophomorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoPage,
    MenuPage,
    CombasicPage,
    WhatcomPage,
    FreshyPage,
    JuniorPage,
    SeniorPage,
    SophomorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleCloudVisionServiceProvider
  ]
})
export class AppModule {}
