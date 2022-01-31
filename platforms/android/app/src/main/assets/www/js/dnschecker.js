/**************************************/
/** Event Listeners                   */
/**************************************/

document.getElementById('submitButtonDNSChecker').addEventListener("click", onDNSCheckerForm);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.npmjs.com/package/cordova-plugin-dns
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** Enables DNS resolution */
function onDNSCheckerForm()
{
    console.log("onDNSCheckerForm");

    document.getElementById('submitButtonDNSChecker').disabled = true;
    navigator.vibrate(100);
    cordova.plugins.dns.resolve(document.getElementById("floatingInput").value, successDNSChecker, errorDNSChecker);
}

/** Displays the result of the resolution */
function successDNSChecker(results)
{
    console.log("successDNSChecker");

    document.getElementById('submitButtonDNSChecker').disabled = false;
    document.getElementById("result").textContent = "Resolved IP address: " + results;
}

/** Displays the error of the resolution */
 function errorDNSChecker(error)
{
    console.log("errorDNSChecker");

    document.getElementById('submitButtonDNSChecker').disabled = false;
    document.getElementById("result").textContent = "Error: " + error;
}