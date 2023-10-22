import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
//APP PROFESOR
// const firebaseConfig = {
//   apiKey: 'AIzaSyB-KCqybX7MYCEUJ7GmT2lA03D3LQN6xLA',
//   authDomain: 'fir-47220.firebaseapp.com',
//   projectId: 'fir-47220',
//   storageBucket: 'fir-47220.appspot.com',
//   messagingSenderId: '967654434525',
//   appId: '1:967654434525:web:de53d9c0c1dccd7b07dd34',
// };

//APP MIA
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
