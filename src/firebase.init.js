// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWBHy98wtsjp2yOGIm-Wtd4_ubTikcZXY",
    authDomain: "virtual-mechanic-finder.firebaseapp.com",
    projectId: "virtual-mechanic-finder",
    storageBucket: "virtual-mechanic-finder.appspot.com",
    messagingSenderId: "920899447092",
    appId: "1:920899447092:web:0084928a1549886e555d61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth