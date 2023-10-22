import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDIIQT-pb17jlqiNxlkvxijRF_KYzGKcAM',
  authDomain: 'fb-reactjs-entregafinal.firebaseapp.com',
  projectId: 'fb-reactjs-entregafinal',
  storageBucket: 'fb-reactjs-entregafinal.appspot.com',
  messagingSenderId: '528116929621',
  appId: '1:528116929621:web:31a3369473599214b130dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
