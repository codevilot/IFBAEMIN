var config = {
  apiKey: "AIzaSyCt2sdV8NKzVkBkcDldOzV5pbyZn2qYG5k",
  authDomain: "ifbamin.firebaseapp.com",
  databaseURL: "https://ifbamin.firebaseio.com",
  projectId: "ifbamin",
  storageBucket: "ifbamin.appspot.com",
  messagingSenderId: "1007018777959",
  appId: "1:1007018777959:web:db62283f92fe970f3da3c2",
  measurementId: "G-LN1CCXNQ79",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.firestore();
auth.onAuthStateChanged((user) => {
  console.log("not login");
  if (user) {
  } else {
  }
});
