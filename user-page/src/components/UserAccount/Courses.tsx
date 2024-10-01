import React, { useState } from 'react';
import './Courses.css';
import cppImage from '../assets/c++.png';
import jsImage from '../assets/js.png';
import pythonImage from '../assets/python.png';
import tsImage from '../assets/ts.png';
import csharpImage from '../assets/c#.png';

// Сопоставление названий с путями к изображениям
const imageMap: { [key: string]: string } = {
  'c++': cppImage,
  'js': jsImage,
  'python': pythonImage,
  'ts': tsImage,
  'c#': csharpImage
};

interface ICourse {
  id: number;
  name: string;
  typeEngeeniring?: string;  // Тип инженерии (например, back-end, front-end)
  timeStudy: string;  // Продолжительность курса
  sumPay: string;  // Стоимость курса
  image: string;  // Название изображения из базы данных (например, 'c++', 'js', 'python', 'ts', 'c#')
  program: Program[];  // Программа курса
}

interface Program {
  id: number;
  studySection: string;  // Название раздела курса
  studyDuration: string;  // Продолжительность обучения
  isRemote: boolean;  // Дистанционный или очный курс
  teacher: string;  // Преподаватель
}

// Пример данных курсов с названиями изображений из БД
const coursesData: ICourse[] = [
  {
    id: 1,
    name: 'C++',
    timeStudy: '6 міс',
    sumPay: '300 грн. / міс.',
    typeEngeeniring: 'back-end',
    image: 'c++',  // Название изображения в базе данных
    program: [
      { id: 1, studySection: 'base', studyDuration: '100 год', isRemote: true, teacher: 'Kisli Yuriy' },
      { id: 2, studySection: 'middle', studyDuration: '150 год', isRemote: false, teacher: 'Kisli Yuriy' },
      { id: 3, studySection: 'advance', studyDuration: '75 год', isRemote: true, teacher: 'Fateev Ruslan' }
    ]
  },
  {
    id: 2,
    name: 'JavaScript',
    timeStudy: '5 міс',
    sumPay: '400 грн. / міс.',
    typeEngeeniring: 'front-end',
    image: 'js',  // Название изображения в базе данных
    program: [
      { id: 1, studySection: 'basic Javascript', studyDuration: '100 год', isRemote: false, teacher: 'Ivanov Ivan' },
      { id: 2, studySection: 'advanced Javascript', studyDuration: '200 год', isRemote: true, teacher: 'Petrov Petr' }
    ]
  },
  {
    id: 3,
    name: 'Python',
    timeStudy: '4 міс',
    sumPay: '350 грн. / міс.',
    typeEngeeniring: 'back-end',
    image: 'python',  // Название изображения в базе данных
    program: [
      { id: 1, studySection: 'Intro to Python', studyDuration: '100 год', isRemote: true, teacher: 'Sergeev Alex' },
      { id: 2, studySection: 'Advanced Python', studyDuration: '150 год', isRemote: false, teacher: 'Andreev Pavel' }
    ]
  },
  {
    id: 4,
    name: 'TypeScript',
    timeStudy: '4 міс',
    sumPay: '350 грн. / міс.',
    typeEngeeniring: 'front-end',
    image: 'ts',  // Название изображения в базе данных
    program: [
      { id: 1, studySection: 'base TS', studyDuration: '100 год', isRemote: true, teacher: 'Tkachuk Oleh' },
      { id: 2, studySection: 'middle TS', studyDuration: '150 год', isRemote: false, teacher: 'Tkachuk Oleh' }
    ]
  },
  {
    id: 5,
    name: 'C#',
    timeStudy: '6 міс',
    sumPay: '400 грн. / міс.',
    typeEngeeniring: 'back-end',
    image: 'c#',  // Название изображения в базе данных
    program: [
      { id: 1, studySection: 'base C#', studyDuration: '100 год', isRemote: true, teacher: 'Yakovlev Sergey' },
      { id: 2, studySection: 'middle C#', studyDuration: '150 год', isRemote: false, teacher: 'Smirnov Pavel' }
    ]
  }
];

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<ICourse>(coursesData[0]);

  const handleCourseChange = (course: ICourse) => {
    setSelectedCourse(course);
  };

  return (
    <div className="courses-section">
      {/* Секция для выбора курса */}
      <div className="course-selection">
        <h3>Выберите курс:</h3>
        <ul>
          {coursesData.map((course) => (
            <li key={course.id} onClick={() => handleCourseChange(course)}>
              {course.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Секция с информацией о курсе */}
      <div className="course-card">
        <h3 className="course-title">КУРС ПРОГРАМУВАННЯ</h3>
        <div className="course-content">
          <img src={imageMap[selectedCourse.image]} alt={selectedCourse.name} className="course-image" />
          <ul>
            <li className="course-item blue-background">{selectedCourse.name}</li>
            <li className="course-item gray-background">{selectedCourse.typeEngeeniring || "back-end / front-end"}</li>
            <li className="course-item black-background">{selectedCourse.timeStudy}</li>
            <li className="course-item border-black">{selectedCourse.sumPay}</li>
          </ul>
        </div>
      </div>

      {/* Программа курса */}
      <div className="course-program">
        <h3>ПРОГРАМА КУРСУ {selectedCourse.name}</h3>
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
          <tbody>
            {selectedCourse.program.map((program) => (
              <tr key={program.id}>
                <td>{program.id}</td>
                <td>{program.studySection}</td>
                <td>{program.studyDuration}</td>
                <td>{program.isRemote ? 'Так' : 'Ні'}</td>
                <td>{program.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;