// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIIQT-pb17jlqiNxlkvxijRF_KYzGKcAM',
  authDomain: 'fb-reactjs-entregafinal.firebaseapp.com',
  projectId: 'fb-reactjs-entregafinal',
  storageBucket: 'fb-reactjs-entregafinal.appspot.com',
  messagingSenderId: '528116929621',
  appId: '1:528116929621:web:20ab8c1f343b5660b130dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //porque voy a usar db en otro archivo
