import React, { useState } from 'react';
import './Tabs.css';

const Tabs = props => {
    const{currentTab, post, setCurrentTab} = props

    const handleCurrentTab = (e, item) =>{
        e.preventDefault();
        setCurrentTab(item)
    }

    let totalTabs = [];
    post.map(item =>{
        if(totalTabs.includes(item.tab) === false){
            totalTabs.push(item.tab)
        }
        else{
        }
    })



    return (
        <div className="topbar">
            {
                totalTabs.map((item, i) =>
                    <div key={i}>
                        {
                            currentTab != item ?
                            <h1 key= {i} className="Active" onMouseOver = {(e) => handleCurrentTab(e, item)}>{item}</h1>:
                            <h1 key= {i} className="Inactive" onMouseOver = {(e) => handleCurrentTab(e, item)}>{item}</h1>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Tabs;