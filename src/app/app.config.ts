import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"eva64romeroroberto","appId":"1:288155894449:web:4badb3ecdd387a8d9b1890","storageBucket":"eva64romeroroberto.appspot.com","apiKey":"AIzaSyBZwdlI8Svco-HErcTHclMH8aBpdpozP7o","authDomain":"eva64romeroroberto.firebaseapp.com","messagingSenderId":"288155894449"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"eva64romeroroberto","appId":"1:288155894449:web:4badb3ecdd387a8d9b1890","storageBucket":"eva64romeroroberto.appspot.com","apiKey":"AIzaSyBZwdlI8Svco-HErcTHclMH8aBpdpozP7o","authDomain":"eva64romeroroberto.firebaseapp.com","messagingSenderId":"288155894449"})), provideFirestore(() => getFirestore())]
};
