import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth' 
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'
//import { useDebugValue } from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyDD3iak8SC712q9pHkf-U3rWBgbrPH3As4",
    authDomain: "riah-clothing-db.firebaseapp.com",
    projectId: "riah-clothing-db",
    storageBucket: "riah-clothing-db.appspot.com",
    messagingSenderId: "610112191479",
    appId: "1:610112191479:web:7739106459770b8912ccf2"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
    googleProvider.setCustomParameters({
    prompt: "select_account"
    })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionandDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
        console.log("done")
    })

    await batch.commit()
} 

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
        const {title, items} = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    },{})

    return categoryMap
}

export const createUserDocumentFromAuth = async(userAuth, additionalInfo={}) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)

    //console.log(userDocRef) 

    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot)
    // console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error){
            console.log(error.message)
        }

    }
    return userDocRef
    //if user data exists - return userDocRef
    //if user data does not exist? 
    //create/set the doc with the data from userAuth in my collection

}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () =>  await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)