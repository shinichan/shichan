import React, { PureComponent } from 'react';
//import HomeInfo from './HomeInfo';


class HomeListInfo extends PureComponent {

    InfoElement = ({ info }) => {

        return info.map(body => {
            return (
                <p key={body.id}>{body.text}</p>
            )
        })

    }

    render() {

        return this.props.infoList.map((info, index)=> {
            return (
                <div className="infoList" key={info.id} onKeyPress={this.handleKeyPress}>
                    <p>{info.title}</p>
                    {
                        this.props.defaultOpen === info.id && <this.InfoElement info={info.body} />
                    }
                </div>
            );
        })

    }

}

export default HomeListInfo;
