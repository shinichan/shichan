import React, { Component } from 'react';
import Applications from './Applications';
import data from '../containers/ApplicationList';
import './css/Rofi.css';


class Rofi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
        }
        this.activateApp = this.activateApp.bind(this);
    }

    filterUpdates(value) {
        this.setState({
            filterText: value,
        })
    }

    filterUpdate() {
        const val = this.myValue.value
        this.filterUpdates(val)
    }

    //https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
    componentDidMount() {
        this.myValue.focus()
    }

    activateApp(event) {
        event.preventDefault();
        this.props.action(
            data.filter(name => {
                return name.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
            })
            .map(name => {
                return (
                    name.name
                )
            })[0]
        )
    }

    render() {

        return (
            <div className="rofi">

                <form onSubmit={this.activateApp}>
                    <input
                        ref={ (value) => { this.myValue = value } }
                        type="text"
                        placeholder="run:"
                        onChange={this.filterUpdate.bind(this)}
                        onFocus={this.getFocus} />
                </form>

                <Applications data={data} filterText={this.state.filterText}/>

            </div>
        )
    }
}


export default Rofi;
