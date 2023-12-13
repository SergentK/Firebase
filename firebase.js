import { initializeApp } from 'firebase/app'

const app = initializeApp({
  apiKey: "AIzaSyBN41nUHWhK7JzWhtLkUuVLRhBudfsfTQY", // Dans les paramètres de firebase
  authDomain: "revisions-cloud.firebaseapp.com", // Paramètre users/Domaine autorisés dans firebase
 // databaseURL: "", // TODO
  projectId: "revisions-cloud", // // Dans les paramètres de firebase
 // storageBucket: "" // TODO
})

export default app
