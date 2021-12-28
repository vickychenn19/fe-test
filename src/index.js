import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

export default function Home (){
    return(
        <App/>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));