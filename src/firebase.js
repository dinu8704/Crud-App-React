import firebase from "firebase";
 
 const firebaseConfig = {
  apiKey: "AIzaSyCDjxUkRf6jeC0IJjc-sznz20Y8ywvGE0I",
  authDomain: "reactcrud-d5986.firebaseapp.com",
  databaseURL: "https://reactcrud-d5986-default-rtdb.firebaseio.com",
  projectId: "reactcrud-d5986",
  storageBucket: "reactcrud-d5986.appspot.com",
  messagingSenderId: "735564893230",
  appId: "1:735564893230:web:b5f8bc63e091d22be323bf" 
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

 export default firebase;

// var db = firebaseApp.firestore();
// export { db };