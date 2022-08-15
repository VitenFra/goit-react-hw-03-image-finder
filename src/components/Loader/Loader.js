import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner'
import s from './Loader.module.css';


class Loader extends Component {
   

    render() {
        return (
            <div className={s.Loader}>
                <Oval
                    height="50"
                    width="50"
                    color='green'
                    ariaLabel='loading'
                />
                </div>
        )
    }
}

export default Loader;