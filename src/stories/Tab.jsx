import React, { Fragment, useState, useEffect } from 'react';
import classNames from 'classnames';
import './tab.css';

export default function Tab(props) {
    const { defaultActiveTabKey, tabConfig, onTabClick } = props;

    const [selectedTab, setSelectedTab] = useState(defaultActiveTabKey || 0);

    const select = (val) => {
        setSelectedTab(val);
        onTabClick(val)
    }

    return (
        <>
            <div className='wrapper'>
                {tabConfig.map((item, index) => {
                    return <Fragment key={index}>
                        <button onClick={() => select(index)} className={classNames('button', selectedTab === index ? 'activeButton' : "")}>
                            {item}
                        </button>
                        {tabConfig.length - 1 !== index && <div className='line' />}
                    </Fragment>

                })}
            </div>
            <div className='indicator_wrap' style={{
                width: "20%",
                marginLeft: `${(tabConfig.findIndex((it, index) => index === selectedTab) / tabConfig.length + 0.133) * 100}%`
            }}>
                <div className='indicator'></div>
            </div>
        </>
    )
}
