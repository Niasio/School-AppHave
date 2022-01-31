/**************************************/
/** Event Listeners                   */
/**************************************/

document.addEventListener("deviceready", onDeviceReady);
document.addEventListener("pause", onPause);
document.addEventListener("resume", onResume);
document.addEventListener("backbutton", onBackButton);

/**************************************/
/** Functions                         */
/**************************************/

/** Allows you to manage the history of the pages */
function onDeviceReady()
{
    console.log('Running cordova-' + cordova.platformId + ' v.' + cordova.version);
    console.log("onDeviceReady");

    // We look if we have the pages, if not we create it.
    // We will then add the current page
    let previousPage = JSON.parse(window.sessionStorage.getItem("pages"));
    if (previousPage == undefined) {
        previousPage = [];
    }

    if (previousPage[previousPage.length - 1] != window.location.href)
    {
        previousPage.push(window.location.href);
        window.sessionStorage.setItem("pages", JSON.stringify(previousPage));
    }

    pageButtons = document.getElementsByTagName('button');
    for (i = 0; i < pageButtons.length; ++i) {
            pageButtons[i].disabled = false;
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function onPause()
{
    console.log("onPause");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function onResume()
{
    console.log("onResume");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** Allows you to return to the previous page */
function onBackButton()
{
    console.log("onBackButton");

    //We will delete the last entry because we are going backwards
    let previousPage = JSON.parse(window.sessionStorage.getItem("pages"));
    if (previousPage.length > 1)
    {
        previousPage.pop();

        window.location.replace(previousPage[previousPage.length - 1]);
        window.sessionStorage.setItem("pages", JSON.stringify(previousPage));
    }
}

/**************************************/