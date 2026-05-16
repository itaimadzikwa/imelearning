/*
=========================================
MathMaster Academy App Script
Developed by Itai Madzikwa
=========================================
*/

/* Register Service Worker */

if("serviceWorker" in navigator){

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker.js")

        .then(registration => {

            console.log(
                "Service Worker Registered Successfully"
            );

        })

        .catch(error => {

            console.log(
                "Service Worker Registration Failed",
                error
            );

        });

    });

}