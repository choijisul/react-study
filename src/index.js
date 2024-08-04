import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library';  //chap03에 사용
// import Clock from './chapter_04/Clock';  //chap04에 사용
// import CommentList from './chapter_05/CommentList';  //chap05에 사용
// import NotificationList from './chapter_06/NotificationList';  //chap06에 사용
// import Accommodate from './chapter_07/Accommodate';  //chap07에 사용
// import ConfirmButton from './chapter_08/ConfirmButton';  //chap08에 사용 (방법3은 ...Button2로 이름 바꾸기)
// import LandingPage from './chapter_09/LandingPage';  //chap09에서 사용
// import AttendanceBook from './chapter_10/AttendanceBook';  //chap10에서 사용
import SignUp from './chapter_11/SignUp';  //chap11에서 사용


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Library />  chap03에 사용 */}
        {/* <CommentList/>  chap05에 사용 */}
        {/* <NotificationList/>  chap06에 사용 */}
        {/* <Accommodate/>  chap07에 사용 */}
        {/* <ConfirmButton/>  chap08에 사용*/}
        {/* <LandingPage/>  chap09에 사용*/}
        {/* <AttendanceBook/>  chap10에 사용*/}
        <SignUp/>
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