import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLP2haSkEjBJdHsnbdmSYBAmURMgsug4Q",
  authDomain: "eshop-5f8e1.firebaseapp.com",
  projectId: "eshop-5f8e1",
  storageBucket: "eshop-5f8e1.appspot.com",
  messagingSenderId: "329054836441",
  appId: "1:329054836441:web:a816d56ff03d76249610c8",
  measurementId: "G-TVQZEQGXV3",
};

const app = initializeApp(firebaseConfig);

export { app };
