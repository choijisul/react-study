import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library';  //chap03에 사용
// import Clock from './chapter_04/Clock';  //chap04에 사용
// import CommentList from './chapter_05/CommentList';  //chap05에 사용
import NotificationList from './chapter_06/NotificationList';  //chap06에 사용

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Library />  chap03에 사용 */}
        {/* <CommentList/>  chap05에 사용 */}
        <NotificationList/>
    </React.StrictMode>
);

// chap04에 사용
// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=> {
//     root.render(
//         <React.StrictMode>
//             <Clock/>
//         </React.StrictMode>
//     );
// }, 1000);

reportWebVitals();