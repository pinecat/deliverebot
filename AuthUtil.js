import { myMSALObj, requestObj, graphConfig } from './AuthView'

export function acquireTokenPopupAndCallMSGraph() {
    //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
    myMSALObj.acquireTokenSilent(requestObj).then(function (tokenResponse) {
        callMSGraph(graphConfig.graphMeEndpoint, tokenResponse.accessToken, graphAPICallback);
    }).catch(function (error) {
        console.log(error);
        // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
        // Call acquireTokenPopup(popup window)
        if (requiresInteraction(error.errorCode)) {
            myMSALObj.acquireTokenPopup(requestObj).then(function (tokenResponse) {
                callMSGraph(graphConfig.graphMeEndpoint, tokenResponse.accessToken, graphAPICallback);
            }).catch(function (error) {
                console.log(error);
            });
        }
    });
}

export function callMSGraph(theUrl, accessToken, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
            callback(JSON.parse(this.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xmlHttp.send();
}

export function graphAPICallback(data) {
    //document.getElementById("json").innerHTML = JSON.stringify(data, null, 2);
    console.log(JSON.stringify(data, null, 2));
}

//This function can be removed if you do not need to support IE
export function acquireTokenRedirectAndCallMSGraph() {
    //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
    myMSALObj.acquireTokenSilent(requestObj).then(function (tokenResponse) {
        callMSGraph(graphConfig.graphMeEndpoint, tokenResponse.accessToken, graphAPICallback);
    }).catch(function (error) {
        console.log(error);
        // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
        // Call acquireTokenRedirect
        if (requiresInteraction(error.errorCode)) {
            myMSALObj.acquireTokenRedirect(requestObj);
        }
    });
}

export function authRedirectCallBack(error, response) {
    if (error) {
        console.log(error);
    } else {
        if (response.tokenType === "access_token") {
            callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, graphAPICallback);
        } else {
            console.log("token type is:" + response.tokenType);
        }
    }
}

export function requiresInteraction(errorCode) {
    if (!errorCode || !errorCode.length) {
        return false;
    }
    return errorCode === "consent_required" ||
        errorCode === "interaction_required" ||
        errorCode === "login_required";
}
