import Sidebar from "~/component/Layout/DefaultLayout/Sidebar";
import Header from "~/component/Layout/DefaultLayout/Header";
import React from 'react';
const DefaultLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className='container'>
                <Sidebar/>
                <div className={'content'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
