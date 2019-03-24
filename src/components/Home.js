import React, { PureComponent } from 'react';
import infoList from '../containers/Home';
import HomeListInfo from './HomeListInfo';
import './css/Home.css';


// Roman Numerals
// https://www.roman-numerals.org/chart100.html

// need animated gif -> rose like, i add image
// image from: https://github.com/4m3s0k0/flower
//
// code from: https://www.youtube.com/playlist?list=PLDyvV36pndZEz2unvD0a2Spv7RehBrpDO

class Home extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: 0
        }

        //this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    //componentDidMount() {
    //    this.home.focus()
    //}

    //ref={ (value) => { this.home = value } }
    //onKeyPress={this.handleKeyPress} >
    //<h1>Death Note, Add clock in roman numerals</h1>

    render() {
        return (
            <div className="home">

                <img type="image" alt="" src={require("../pics/flower.png")} />
                <h1>Welcome to the shinigami's world. I welcome you Shichan</h1>
                <h2>Project will use rules from Vim and I3wm</h2>

                <HomeListInfo infoList={ infoList } defaultOpen={this.state.isOpen} />

            </div>
        )
    }

    //handleKeyPress = event => {
    //    console.log('-- handler')
    //    console.log(event.key)
    //    if (event.key === 'k' && this.state.isOpen > 0) {
    //        this.setState({
    //            isOpen: --this.state.isOpen
    //        })
    //    } else if (event.key === 'j' && this.state.isOpen < infoList.length) {
    //        this.setState({
    //            isOpen: ++this.state.isOpen
    //        })
    //    }
    //}

}


export default Home;
