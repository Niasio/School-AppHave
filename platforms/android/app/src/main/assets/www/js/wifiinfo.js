/**************************************/
/** Event Listeners                   */
/**************************************/

document.addEventListener("deviceready", onWifiInfoLoad);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.npmjs.com/package/cordova-plugin-networkinterface
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** Allows you to request information on the WiFi
 * Called at deviceready
 * */
function onWifiInfoLoad()
{
    console.log("onWifiInfoLoad");

    window.networkinterface.getWiFiIPAddress( successWifiInfo, errorWifiInfo );
}

/** Displays the Wifi information */
function successWifiInfo( ipInformation ) {
    console.log("successWifiInfo");

    document.getElementById("wifiInfoContainer").textContent = "IP: " + ipInformation.ip + "\r\nSubnet: " + ipInformation.subnet;
}

/** Displays the error */
function errorWifiInfo( error ) {
    console.log("errorWifiInfo");

    document.getElementById("wifiInfoContainer").textContent =  error;
}
