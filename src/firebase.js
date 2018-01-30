import firebase from 'firebase'
import React, { Component } from 'react'
import {instructors} from './components/data/instructor.1'

const config = {
    apiKey: "AIzaSyApiWrhMjRIZpFx9EYCdTWJ6ubL85YokqE",
    authDomain: "beat-the-robot.firebaseapp.com",
    databaseURL: "https://beat-the-robot.firebaseio.com",
    projectId: "beat-the-robot",
    storageBucket: "beat-the-robot.appspot.com",
    messagingSenderId: "49706625687"
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const messaging = firebase.messaging()

export const userRef = database.ref('/users').child('testUser')
export const websiteDataRef = database.ref('websiteData')
export const websiteStructureRef = database.ref('websiteStructure')
export const activeListeners = new Map()

export function updateNode(nodeName, jsonData) {
    websiteDataRef.child(nodeName).update(jsonData)
}

export function addItemToNode(nodeName, nodeStructure, data) {
    if (!data) {
        data = nodeStructure
    }
    websiteDataRef.child(nodeName).push(data)
}

export function addEditItem(nodeName, data, id){
    if(id){
        websiteDataRef.child(`${nodeName}/${id}`).update(data)
    } else {
        websiteDataRef.child(nodeName).push(data)
    }
}

export function deleteItem(nodeName, itemKey) {
    websiteDataRef.child(`${nodeName}/${itemKey}`).remove()
}

export function updateWebsiteStructure(data) {
    websiteStructureRef.set(data)
}

export function fileUpload(file, cb) {
    const uploadTask = storage.ref('websiteImages').child(file.name).put(file, { contentType: file.type })

    uploadTask.on('state_changed', (snapshot) => {
        let progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
        cb(progress, snapshot.downloadURL)
    })
}

// Auth Events
export function signIn() {
    auth.signInWithPopup(googleAuthProvider)
}

export function signOut() {
    auth.signOut()
}

export function withFirebase (WrappedComponent) {
    return class FirebaseComponent extends Component {
        constructor(props) {
            super(props)
        }
        componentDidMount() {
            websiteStructureRef.orderByKey().once('value', this.handleStructureChange)
        }

        handleNewListener = (snap) => {
            let items = []
            
            snap.forEach((itemSnap) => {
                let item = itemSnap.val()
                item.key = itemSnap.key
                items.push(item)
            })
            this.setState({
                [snap.key]: items
            })
        }

        handleStructureChange = (snap) => {
            snap.forEach(data => {
                let listener = activeListeners.get(data.key)
                if(!listener){
                    let ref = websiteDataRef.child(data.key).orderByChild('position')
                    ref.on('value', this.handleNewListener)
                    activeListeners.set(data.key, ref)
                }
            })
            this.setState({
                websiteStructure: snap.val()
            })
        }

        render() {
            return (
                <WrappedComponent 
                    {...this.state}
                    {...this.props} 
                />
            )
        }
    }
}
