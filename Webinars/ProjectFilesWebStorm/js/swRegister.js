/**
 * Created by SaiKiran on 02/12/16.
 */
define([], function(){
    if('serviceWorker' in navigator){
        navigator.serviceWorker
            .register('sw.js')
            .then(function (swRegistration) {
                // console.log(swRegistration);
                if(swRegistration.installing){
                    console.log()
                }
            }).catch(function(error){
                console.log('Error occured' + error);
        })

    }
})