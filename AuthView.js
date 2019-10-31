// AuthView.js
import React from 'react';
import { Button, View } from 'react-native';
import * as Msal from 'msal';
import * as AuthUtil from './AuthUtil'

const msalConfig = {
    auth: {
        clientId: "1e034920-213a-4862-a8d7-da1bded43317",
        authority: "https://login.microsoftonline.com/1d884f12-a0d7-42f0-8b15-3a91c853bcb5",
        redirectURI: "http://localhost:19006"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

export var graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

export var requestObj = {
    scopes: ["user.read"]
};

//new Msal.Storage("localStorage");
export var myMSALObj = new Msal.UserAgentApplication(msalConfig);
//var myMSALObj = new Msal.UserAgentApplication(msalConfig.auth.clientId, msalConfig.auth.authority, msalConfig.auth.redirectURI, { cacheLocation: 'localStorage' });

export default class AuthView extends React.Component {
    constructor(props) {
        super(props);
    }

    signIn() {
        myMSALObj.loginPopup(requestObj).then(function (loginResponse) {
            //Successful login
            console.log('success');
            //Call MS Graph using the token in the response
            AuthUtil.acquireTokenPopupAndCallMSGraph();
        }).catch(function (error) {
            //Please check the console for errors
            console.log(error);
        });
    }

    signOut() {
        myMSALObj.logout();
    }

    render() {
        return (
            <View>
                <Button title="Login" onPress={this.signIn} />
                <Button title="Logout" onPress={this.signOut} />
            </View>
        );
    }
}
