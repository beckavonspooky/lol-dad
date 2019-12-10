import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

const firebase = app.initializeApp(config)
const auth = firebase.auth()
const db = app.firestore()

const doCreateUserWithEmailAndPassword = (email, passoword) => 
    auth.createUserWithEmailAndPassword(email, passoword)

const doCreateUserInFirestore = user => {
    console.log(user)
    db.collection('users')
        .doc(user._id)
        .set(user)
}

const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

const doSaveJoke = (userId, jokeId) => {
    db.collection('jokes')
        .doc()
        .set({
            userId,
            jokeId
        })
}

const doGetCurrentUser = id =>
    db.collection('users')
        .doc(id)
        .get()

const doGetUserJokes = userId => db.collection('jokes').where('userId', '==', userId).get()

const doGetOneJoke = jokeId => db.collection('jokes').doc(jokeId).get()


export {
    firebase,
    auth,
    doCreateUserWithEmailAndPassword,
    doCreateUserInFirestore,
    doSignInWithEmailAndPassword,
    doSaveJoke,
    doGetCurrentUser,
    doGetUserJokes,
    doGetOneJoke
}