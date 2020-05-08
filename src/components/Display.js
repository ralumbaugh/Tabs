import React, { useState } from 'react';
import './Tabs.css';

const Display = props => {
    const {currentTab, post} = props

    const messageByTab = (post) => {
        if(post.tab === currentTab){
            return post.Content
        }
    }

    return(
        <div className="bottombox">
            {
                post.map((item, i) =>
                    <p key={i}>{messageByTab(item)}</p>
                )
            }
        </div>
    )
}

export default Display;