import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FacebookEmojiCounter from './Facebookemoji';
import ToggleMode from './ToggleModeComponent';

ReactDOM.render(
    <React.Fragment>
        <FacebookEmojiCounter type="like" />
        <FacebookEmojiCounter type="love" />
        <FacebookEmojiCounter type="happy" />
        <ToggleMode />
    </React.Fragment>,
    document.getElementById('root')
);
