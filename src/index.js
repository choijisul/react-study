import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library';  //chap03
// import Clock from './chapter_04/Clock';  //chap04
// import CommentList from './chapter_05/CommentList';  //chap05
// import NotificationList from './chapter_06/NotificationList';  //chap06
// import Accommodate from './chapter_07/Accommodate';  //chap07
// import ConfirmButton from './chapter_08/ConfirmButton';  //chap08 (방법3은 ...Button2로 이름 바꾸기)
// import LandingPage from './chapter_09/LandingPage';  //chap09
// import AttendanceBook from './chapter_10/AttendanceBook';  //chap10
// import SignUp from './chapter_11/SignUp';  //chap11
// import Calculator from './chapter_12/Calculator';  //chap12
// import ProfileCard from './chapter_13/ProfileCard';  //chap13
// import DarkOrLight from './chapter_14/DarkOrLight';  //chap14
import Blocks from './chapter_15/Blocks';  //chap15

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Library />  chap03*/}
        {/* <CommentList/>  chap05 */}
        {/* <NotificationList/>  chap06 */}
        {/* <Accommodate/>  chap07 */}
        {/* <ConfirmButton/>  chap08*/}
        {/* <LandingPage/>  chap09*/}
        {/* <AttendanceBook/>  chap10에/}
        {/* <SignUp/>  chap11*/}
        {/* <Calculator/>  chap12*/}
        {/* <ProfileCard/>  chap13*/}
        {/* <DarkOrLight/>  chap14*/}
        <Blocks/>
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