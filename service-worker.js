/*
=========================================
MathMaster Academy Service Worker
Developed by Itai Madzikwa
=========================================
*/

const CACHE_NAME = "mathmaster-cache-v1";

const urlsToCache = [

    "index.html",
    "algebra.html",
    "geometry.html",
    "practice.html",
    "calculator.html",

    "css/style.css",

    "js/calculator.js",

    "images/logo.png",
    "images/icon-192.png",
    "images/icon-512.png"

];

/* Install Service Worker */

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open

        .then(cache => {

            return cache.addAll(urlsToCache);

        })

    );

});

/* Fetch Cached Files */

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response || fetch(event.request);

        })

    );

});