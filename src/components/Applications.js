import React from 'react';

// TODO: import data here, not for rofi
// return result of filter to rofi

// https://www.youtube.com/playlist?list=PLHrxuCR-0CcT7hgVVlh0lBWTqYkEEF55m
export default ({data, filterText}) => {

    const ApplicationList = data
        .filter(name => {
            return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map(name => {
        return (
            <p key={ name.id }>{name.name}</p>
        )
    })

    return (
        <div className="appList">
            { ApplicationList }
        </div>
    );

}

