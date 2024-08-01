const firebase = require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyBg2_rfIOjzMdbGjVxfZxaobdty-rMBAj0",
  authDomain: "yangoclone-7d382.firebaseapp.com",
  projectId: "yangoclone-7d382",
  storageBucket: "yangoclone-7d382.appspot.com",
  messagingSenderId: "596104511433",
  appId: "1:596104511433:web:6d08efd8eeec7b665e7218",
  measurementId: "G-KVYYG5V4G6"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const drivers=db.collection("Drivers")
module.exports = drivers;