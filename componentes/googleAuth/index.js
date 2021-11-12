import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View } from 'react-native';
import Styles from '../../Styles/home'

WebBrowser.maybeCompleteAuthSession();

 function GoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '828785222165-o4h72ujfd2hm6b2veg9mc209o4u0kp37.apps.googleusercontent.com',  //'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (
    <View style={Styles.button}>
        <Button
            disabled={!request}
            title="Google"
            color='#f95959'
            onPress={() => {
            promptAsync();
            }}
        />
    </View>
 
  );
}

export default GoogleAuth;