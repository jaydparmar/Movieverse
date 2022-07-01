import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
const firebaseConfig = {
    apiKey: "AIzaSyD1hIYaE-74mIJBpDVSLhRkK5g_rMrvkd8",
    authDomain: "movieverse-be482.firebaseapp.com",
    projectId: "movieverse-be482",
    storageBucket: "movieverse-be482.appspot.com",
    messagingSenderId: "326330777733",
    appId: "1:326330777733:web:55b8604486f8b3dd2fa9ec"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;