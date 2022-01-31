/**************************************/
/** Event Listeners                   */
/**************************************/

document.addEventListener("deviceready", onDiagnosticLoad);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.npmjs.com/package/cordova.plugins.diagnostic
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** Allows you to perform all diagnostics */
function onDiagnosticLoad() {
    console.log("onDiagnosticLoad");

    cordova.plugins.diagnostic.isDataRoamingEnabled(diagnosticSuccessDataRoaming, diagnosticError);
    cordova.plugins.diagnostic.isADBModeEnabled(diagnosticSuccessADBMode, diagnosticError);
    cordova.plugins.diagnostic.isDeviceRooted(diagnosticSuccessRooted, diagnosticError);
    cordova.plugins.diagnostic.getArchitecture(diagnosticSuccessArchitecture, diagnosticError);
    cordova.plugins.diagnostic.getCurrentBatteryLevel(diagnosticSuccessBattery, diagnosticError);
    cordova.plugins.diagnostic.getLocationMode(diagnosticSuccessLocationMode, diagnosticError);
    cordova.plugins.diagnostic.getBluetoothState(diagnosticSuccessBluetooth, diagnosticError);
    cordova.plugins.diagnostic.isCameraPresent(diagnosticSuccessCamera, diagnosticError);
}

/**  Displays the result of the Data Roaming */
function diagnosticSuccessDataRoaming(enabled) {
    console.log("diagnosticSuccessDataRoaming");

    document.getElementById("dataRoamingContainer").textContent = (enabled ? "Enabled" : "Disabled")
}

/**  Displays the result of the ADB Mode */
function diagnosticSuccessADBMode(enabled) {
    console.log("diagnosticSuccessADBMode");

    document.getElementById("adbContainer").textContent = (enabled ? "Enabled" : "Disabled")
}

/**  Displays the result of the Rooted */
function diagnosticSuccessRooted(rooted) {
    console.log("diagnosticSuccessRooted");

    document.getElementById("rootedContainer").textContent = (rooted ? "Rooted" : "Not rooted")
}

/**  Displays the result of the Architecture */
function diagnosticSuccessArchitecture(architecture) {
    console.log("diagnosticSuccessArchitecture");

    document.getElementById("architectureContainer").textContent = architecture;
}

/**  Displays the result of the Battery */
function diagnosticSuccessBattery(level) {
    console.log("diagnosticSuccessBattery");

    document.getElementById("batteryContainer").textContent = level + "%";
}

/**  Displays the result of the Bluetooth */
function diagnosticSuccessBluetooth(state) {
    console.log("diagnosticSuccessBluetooth");

    switch(state){
        case cordova.plugins.diagnostic.bluetoothState.UNKNOWN:
            document.getElementById("bluetoothContainer").textContent = "Unknown";
            break;
        case cordova.plugins.diagnostic.bluetoothState.POWERED_OFF:
            document.getElementById("bluetoothContainer").textContent = "Powered off";
            break;
        case cordova.plugins.diagnostic.bluetoothState.POWERED_ON:
            document.getElementById("bluetoothContainer").textContent = "Powered on";
            break;
        case cordova.plugins.diagnostic.bluetoothState.POWERING_OFF:
            document.getElementById("bluetoothContainer").textContent = "Powering off";
            break;
        case cordova.plugins.diagnostic.bluetoothState.POWERING_ON:
            document.getElementById("bluetoothContainer").textContent = "Powering on";
            break;
    }
}

/**  Displays the result of the Camera */
function diagnosticSuccessCamera(present) {
    console.log("diagnosticSuccessCamera");

    document.getElementById("cameraContainer").textContent = (present ? "Present" : "Absent");
}

/**  Displays the result of the Location Mode */
function diagnosticSuccessLocationMode(locationMode) {
    console.log("diagnosticSuccessLocationMode");

    switch(locationMode){
        case cordova.plugins.diagnostic.locationMode.HIGH_ACCURACY:
            document.getElementById("locationModeContainer").textContent = "High accuracy (GPS hardware, network triangulation and Wifi network IDs)";
            break;
        case cordova.plugins.diagnostic.locationMode.BATTERY_SAVING:
            document.getElementById("locationModeContainer").textContent = "Battery saving (Network triangulation and Wifi network IDs)";
            break;
        case cordova.plugins.diagnostic.locationMode.DEVICE_ONLY:
            document.getElementById("locationModeContainer").textContent = "Device only (GPS hardware)";
            break;
        case cordova.plugins.diagnostic.locationMode.LOCATION_OFF:
            document.getElementById("locationModeContainer").textContent = "Location off";
            break;
    }
}

/**  Displays the result of error */
function diagnosticError() {
    console.log("diagnosticError");

    console.error("The following error occurred: " + error);
}