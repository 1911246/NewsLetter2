import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBTgR3_uR_NkG8xwNG9xqyra9hJT1ypWwY",
    authDomain: "buzzergame-43de6.firebaseapp.com",
    databaseURL: "https://buzzergame-43de6-default-rtdb.firebaseio.com",
    projectId: "buzzergame-43de6",
    storageBucket: "buzzergame-43de6.appspot.com",
    messagingSenderId: "89671973197",
    appId: "1:89671973197:web:84c7271b9abbb6fa131f04",
    measurementId: "G-M1FR9XHPZW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();