import React, {FC}  from "react";

type TCourseProgram = {
    productName: string,
}

export const CourseProgram: FC<TCourseProgram> = (productName) => {


    return (
    <div className="course-program">
        <h3>ПРОГРАМА КУРСУ</h3>
        <table>
            <thead>
                <tr>
                <th>№</th>
                <th>Розділ навчання</th>
                <th>Тривалість</th>
                <th>Дистанційно</th>
                <th>Викладач</th>
                </tr>
            </thead>
            {/* <tbody>
                {selectedCourse.program.map((program) => (
                <tr key={program.id}>
                    <td>{program.id}</td>
                    <td>{program.studySection}</td>
                    <td>{program.studyDuration}</td>
                    <td>{program.isRemote ? 'Так' : 'Ні'}</td>
                    <td>{program.teacher}</td>
                </tr>
                ))}
            </tbody> */}
        </table>
    </div>
    )
}