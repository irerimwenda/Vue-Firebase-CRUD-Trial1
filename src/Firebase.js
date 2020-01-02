import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyBzeOVNSqsAQKY3srSh0yVS4yyPH9iC6cc",
    authDomain: "laravel-a72e8.firebaseapp.com",
    databaseURL: "https://laravel-a72e8.firebaseio.com",
    projectId: "laravel-a72e8",
    storageBucket: "laravel-a72e8.appspot.com",
    messagingSenderId: "680121451865",
    appId: "1:680121451865:web:7c0d65ddfeb9eee3183848",
    measurementId: "G-HR3EKBTVCV"
  });

  export const db = app.database();
  export const namesRef = db.ref('names');