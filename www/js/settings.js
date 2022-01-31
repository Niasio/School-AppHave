/**************************************/
/** Event Listeners                   */
/**************************************/

document.getElementById('settingsButton').addEventListener("click", onDeleteButton);

/**********************************************************/
/** Functions                                             */
/* https://www.npmjs.com/package/cordova-plugin-vibration */
/**********************************************************/

/** Empty the localStorage */
function onDeleteButton()
{
    console.log("onDeleteButton");

    window.localStorage.clear();
    navigator.vibrate(100);
    window.location.replace("index.html");
}
