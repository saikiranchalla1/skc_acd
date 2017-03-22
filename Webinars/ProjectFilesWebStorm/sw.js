/**
 * Created by SaiKiran on 02/12/16.
 */
'use strict'
self.addEventListener('install', function (event) {
    console.log('From SW: Install Event', event);
});

self.addEventListener('activate', function (event) {
    console.log('From SW: Activate Event', event);
})
