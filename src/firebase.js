import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB_FZEBMylFvrTf-gUrsamABevIDmfyFFE",
        authDomain: "messenger-app-ae698.firebaseapp.com",
        databaseURL: "https://messenger-app-ae698.firebaseio.com",
        projectId: "messenger-app-ae698",
        storageBucket: "messenger-app-ae698.appspot.com",
        messagingSenderId: "174522297982",
        appId: "1:174522297982:web:ec2b71c7ec833b04aab22f",
        measurementId: "G-4KL64W99QV"
    });

const db = firebaseApp.firestore();
export default db;
