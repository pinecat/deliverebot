// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const msalConfig = {
    auth: {
        clientId: "1e034920-213a-4862-a8d7-da1bded43317",
        authority: "https://login.microsoftonline.com/1d884f12-a0d7-42f0-8b15-3a91c853bcb5",
        redirectURI: "http://localhost:19006/"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

const authenticationParameters = {
  scopes: [
    'user.read',
    //'https://<your-tenant-name>.onmicrosoft.com/<your-application-name>/<scope (i.e. demo.read)>'
  ]
};

export const authProvider = new MsalAuthProvider(msalConfig, authenticationParameters, LoginType.Popup)
