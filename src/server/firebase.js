var config = {
    apiKey: "AIzaSyCt2sdV8NKzVkBkcDldOzV5pbyZn2qYG5k",
    authDomain: "ifbamin.firebaseapp.com",
    databaseURL: "https://ifbamin.firebaseio.com",
    projectId: "ifbamin",
    storageBucket: "ifbamin.appspot.com",
    messagingSenderId: "1007018777959",
    appId: "1:1007018777959:web:db62283f92fe970f3da3c2",
    measurementId: "G-LN1CCXNQ79"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();
const loginForm = document.querySelector('login-container');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const errMsg = document.querySelector('#loginMsg')
    console.log(loginForm.querySelector('#login-email').value)
    const email = loginForm.querySelector('#login-email').value;
    const password = loginForm.querySelector('#login-password').value;
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
    }).catch((err) => {
        errMsg.innerHTML = (err.message);
    });
});

auth.onAuthStateChanged((user) => {
    console.log("not login")
    if (user) {
        console.log(auth.currentUser.email, 2)
    } else {
    }
});
