import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props){
    return (
        <ul>
            {/* id를 key값으로 사용 */}
            {students.map((students) => {
                return <li key={students.id}>{students.name}</li>
            })}

            {/* 포맷팅 된 문자열을 키값으로 사용 */}
            {/* {students.map((students, index)=>{
                <li key={`student-id-${student.id}`}>{students.name}</li>;
            })} */}

            {/* 배열의 인덱스를 키값으로 사용 */}
            {/* {students.map((students, index)=>{
                <li key={index}>{student.name}</li>
            })} */}
        </ul>
    );
}

export default AttendanceBook;