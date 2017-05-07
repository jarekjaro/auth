import React, {Component} from "react";
import {View} from "react-native";
import firebase from "firebase";
import {Button, Header, Spinner} from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button>Log Out</Button>;
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;