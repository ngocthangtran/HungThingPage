import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './NotFound.scss'

function NotFound(props) {
    const [time, setTime] = useState(5);
    const history = useHistory()
    useEffect(() => {
        if (time !== 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
        if (time === 0) {
            history.push('/home')
        }
    })
    return (
        <div className="not-found">
            <div className="error">404</div>
            <br /><br />
            <span className="infoNotfound">Trang này không tồn tại</span>
            <a className="home" href='/home'>Trở lại trang chủ ({time}s)</a>
        </div>
    );
}

export default NotFound;