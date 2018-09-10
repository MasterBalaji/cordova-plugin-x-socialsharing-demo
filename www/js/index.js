//Function to share on Facebook
function ShareOnFB() {
    window.plugins.socialsharing.shareViaFacebook('Message via Facebook',
        null /* img */ ,
        'http://www.example.com/' /* url */ ,
        null,
        function (errormsg) {
            alert("Error: Unable to Share. Error Msg : " + errormsg)
        }
    );
};

//Function to share on Whatsapp
function ShareOnWhatsApp() {
    window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp',
        null /* img */ ,
        'http://www.example.com' /* url */ ,
        null,
        function (errormsg) {
            alert("Error: Unable to Share. Error Msg : " + errormsg)
        }
    );
};

//Function to share on Twitter
function ShareOnTwitter() {
    window.plugins.socialsharing.shareViaTwitter('Message via Twitter',
        null /* img */ ,
        'http://www.example.com' /* url */ ,
        null,
        function (errormsg) {
            alert("Error: Unable to Share. Error Msg : " + errormsg)
        }
    );
};

//Function to share on Other Apps installed on your mobile
function ShareOnOtherApps() {
    window.plugins.socialsharing.share('Your share message',
        null /* img */ ,
        'http://www.example.com/' /* url */ ,
        null);
};

//Adding Device Ready Event Listener
function AddDeviceReady() {
    document.addEventListener("deviceready", onDeviceReady, false);

}

//Add JS that needs to execute on Device Ready
function onDeviceReady() {

}