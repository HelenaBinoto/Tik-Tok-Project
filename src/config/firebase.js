// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxbfFGzWb3Yv7YQEq8s7FsItVc77tnOQM',
  authDomain: 'jornada-dev-helenabinoto1.firebaseapp.com',
  projectId: 'jornada-dev-helenabinoto1',
  storageBucket: 'jornada-dev-helenabinoto1.appspot.com',
  messagingSenderId: '584154616103',
  appId: '1:584154616103:web:4d9e2765600f2bd8b59902',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

// importação firebase
