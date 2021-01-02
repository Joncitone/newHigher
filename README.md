# newHigher

Simple To-Do List application preloaded with helpful activities. Made in 4 days as part of a solo hackathon.

## Getting Started

Instructions to get up and running:

### Prerequisites

[Expo CLI](https://docs.expo.io/workflow/expo-cli/)

---

Simulators (just one):

[Xcode - iPhone Simulator](https://developer.apple.com/xcode/)

[Android Studio - AVD Emulator](https://developer.android.com/studio)

OR

Expo App:

[iPhone](https://apps.apple.com/us/app/expo-client/id982107779)

[Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

[Firebase](https://console.firebase.google.com/u/0/)

Create a project in Firebase using the Firestore NoSQL database, and give it a good name.

You'll need to include information from here in a config.js file later in the installation process.

---

### Installing

From the Terminal:

```
git clone https://github.com/Joncitone/newHigher.git
```

```
cd newHigher
```

```
yarn install
```

```
cd src
mkdir firebase
cd firebase
touch config.js
```

Put the following in the config.js file, getting the configuration details from the application you created in firebase

Replacing firebaseConfig with the appropriate details found in project settings.

```
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'API-KEY-SERIAL-GOES-HERE',
  authDomain: 'YOUR-APP-NAME.firebaseapp.com',
  databaseURL: 'https://YOUR-APP-NAME.firebaseio.com',
  projectId: 'YOUR-APP-NAME',
  storageBucket: 'YOUR-APP-NAME.appspot.com',
  messagingSenderId: 'MESSAGING-SENDER-ID-HERE',
  appId: 'FIREBASE-APPLICATION-ID-HERE',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
```

add the following to your .gitignore file to avoid security warnings

```
/src/firebase/config.js
```

```
yarn start
```

## Built With

- Node.js
- React Native
- Redux
- Firebase/Firestore (NoSQL)

## Acknowledgments

- Thanks to:
  - Jonah Ullman (fellow)
  - Claire Muscat (fellow)
