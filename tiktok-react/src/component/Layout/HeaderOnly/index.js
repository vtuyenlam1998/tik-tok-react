import Header from "~/component/Layout/DefaultLayout/Header";
import React from 'react';
const DefaultLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className='container'>
                <div className={'content'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
