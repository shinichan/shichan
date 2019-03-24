import React, { Component } from 'react';
import Rofi from './components/Rofi';
import Home from './components/Home';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rofi: undefined,
            appName: ""
        }
        this.setAppName = this.setAppName.bind(this);
    }

    handleKeypress = event => {
        if (event.ctrlKey) {

            if (event.key === 'Enter') {
                if (!this.state.rofi) {
                    this.setState({
                        rofi: true
                    })
                } else {
                    this.setState({
                        rofi: false
                    })
                    this.rootEvent.focus()
                }
            }

        } else {
            console.log({
                key: event.key,
                keyCode: event.keyCode,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                metaKey: event.metaKey,
                shiftKey: event.shiftKey
            });
        }
    }

    componentDidMount() {
        this.rootEvent.focus();
    }

    // app name (component)
    setAppName(name) {
        this.setState({
            appName: name
        })
    }

    // rendering component
    activateApp() {
        switch(this.state.appName) {
            case 'Home':
                return <Home />
            default:
                return <h1>{this.state.appName} page is rendering</h1>
        }
    }


    render() {
        return (
            <div
                className="App"
                ref={(root) => {this.rootEvent = root;}}
                onKeyPress={this.handleKeypress}
                tabIndex={-1}>

                { this.state.rofi && <Rofi action={this.setAppName}/> }

                { this.state.appName && this.activateApp() }

            </div>
        );
    }

}

export default App;
