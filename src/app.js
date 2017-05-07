import React, {Component} from "react";
import {View} from "react-native";
import firebase from "firebase";
import {Header} from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyDirWmVgaQ9Tfx2TO7V_VZxoDpz9xlIOkc",
                authDomain: "auth-95420.firebaseapp.com",
                databaseURL: "https://auth-95420.firebaseio.com",
                projectId: "auth-95420",
                storageBucket: "auth-95420.appspot.com",
                messagingSenderId: "848454790769"
            }
        );
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;