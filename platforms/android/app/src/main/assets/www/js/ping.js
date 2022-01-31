/**************************************/
/** Event Listeners                   */
/**************************************/

document.addEventListener("deviceready", refreshPingList);
document.getElementById('submitButtonPing').addEventListener("click", onPingForm);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.npmjs.com/package/cordova-plugin-ping
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** Refreshes the list of pings made */
function refreshPingList() {
    console.log("refreshPingList");

    // We get the localStorage, if it is empty we initiate it
    let pingHistory = JSON.parse(window.localStorage.getItem("pingHistory"));
    if (pingHistory == undefined) {
        pingHistory = [];
    }

    if (pingHistory.length === 0)
    {
        document.getElementById("previousPingDiv").hidden = true;
    }
    else
    {
        document.getElementById("previousPingDiv").hidden = false;

        var pingHistoryList = document.getElementById("pingHistoryList");
        pingHistoryList.innerHTML = '';
        for (let i = 0; i < pingHistory.length; i++) {
            var ip = pingHistory[i];
            var listItem = document.createElement("li");
            listItem.textContent = ip;
            pingHistoryList.appendChild(listItem);
        }
    }
}

/** Creating the ping */
function onPingForm()
{
    console.log("onPingForm");

    document.getElementById('submitButtonPing').disabled = true;
    navigator.vibrate(100);
    var p, ip;
    ip = [{query: document.getElementById("floatingInput").value, timeout: 1, retry: 3, version: 'v4'}];
    p = new Ping();
    p.ping(ip, successPing, errorPing);
}

/** Displays the return of the ping */
function successPing(results)
{
    console.log("successPing");

    document.getElementById('submitButtonPing').disabled = false;
    document.getElementById("result").textContent = "Average Time: " + results[0].response.result.avgRtt + "ms\r\n";
    if (results[0].response.result.pctLoss != "0%")
    {
        document.getElementById("result").textContent += "Lost Packets: " + results[0].response.result.pctLoss + "\r\n";
    }
    document.getElementById("result").textContent += "IP: " + results[0].request.query;

    // We will add the ip in the localStorage
    let pingHistory = JSON.parse(window.localStorage.getItem("pingHistory"));
    if (pingHistory == undefined) {
        pingHistory = [];
    }
    pingHistory.push(results[0].request.query);

    if (pingHistory.length > 5){
        pingHistory.shift();
    }

    window.localStorage.setItem("pingHistory", JSON.stringify(pingHistory));
    refreshPingList();
}

/** Displays the ping error */
function errorPing(error)
{
    console.log("errorPing");

    document.getElementById('submitButtonPing').disabled = false;
    document.getElementById("result").textContent = "Error: " + error;
}