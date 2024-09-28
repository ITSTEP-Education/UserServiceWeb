import React, { useState } from 'react';
import './Courses.css';
import cplusplus from '../assets/cplusplus.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import typescript from '../assets/typescript.png';
import csharp from '../assets/csharp.png';

interface Course {
  id: number;
  name: string;
  duration: string;
  price: string;
  type?: string; // Добавляем тип как необязательное поле
  image: string;
  program: { id: number; name: string; hours: number; presence: string; instructor: string }[];
}

const coursesData: Course[] = [
  {
    id: 1,
    name: 'C++',
    duration: '6 міс',
    price: '300 грн. / міс.',
    type: 'back-end', // Новое поле
    image: cplusplus, // Исправляем путь к изображению
    program: [
      { id: 1, name: 'base', hours: 100, presence: 'online', instructor: 'Kisli Yuriy' },
      { id: 2, name: 'middle', hours: 150, presence: 'offline', instructor: 'Kisli Yuriy' },
      { id: 3, name: 'advance', hours: 75, presence: 'online', instructor: 'Fateev Ruslan' }
    ]
  },
  {
    id: 2,
    name: 'Javascript',
    duration: '5 міс',
    price: '400 грн. / міс.',
    type: 'front-end',
    image: javascript,
    program: [
      { id: 1, name: 'basic Javascript', hours: 100, presence: 'offline', instructor: 'Ivanov Ivan' },
      { id: 2, name: 'advanced Javascript', hours: 200, presence: 'online', instructor: 'Petrov Petr' }
    ]
  },
  {
    id: 3,
    name: 'Python',
    duration: '4 міс',
    price: '350 грн. / міс.',
    type: 'back-end',
    image: python,
    program: [
      { id: 1, name: 'Intro to Python', hours: 100, presence: 'online', instructor: 'Sergeev Alex' },
      { id: 2, name: 'Advanced Python', hours: 150, presence: 'offline', instructor: 'Andreev Pavel' }
    ]
  },
  {
    id: 4,
    name: 'TypeScript',
    duration: '4 міс',
    price: '350 грн. / міс.',
    type: 'front-end',
    image: typescript,
    program: [
      { id: 1, name: 'base TS', hours: 100, presence: 'online', instructor: 'Tkachuk Oleh' },
      { id: 2, name: 'middle TS', hours: 150, presence: 'offline', instructor: 'Tkachuk Oleh' }
    ]
  },
  {
    id: 5,
    name: 'C#',
    duration: '6 міс',
    price: '400 грн. / міс.',
    type: 'back-end',
    image: csharp,
    program: [
      { id: 1, name: 'base C#', hours: 100, presence: 'online', instructor: 'Yakovlev Sergey' },
      { id: 2, name: 'middle C#', hours: 150, presence: 'offline', instructor: 'Smirnov Pavel' }
    ]
  }
];

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course>(coursesData[0]);

  const handleCourseChange = (course: Course) => {
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
    <img src={selectedCourse.image} alt={selectedCourse.name} className="course-image" />
    <ul>
      <li className="course-item blue-background">{selectedCourse.name}</li>
      <li className="course-item gray-background">{selectedCourse.type || "back-end / front-end"}</li>
      <li className="course-item black-background">{selectedCourse.duration}</li>
      <li className="course-item border-black">{selectedCourse.price}</li>
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
              <th>Назва</th>
              <th>Кількість, год</th>
              <th>Присутність</th>
              <th>Викладач</th>
            </tr>
          </thead>
          <tbody>
            {selectedCourse.program.map((program) => (
              <tr key={program.id}>
                <td>{program.id}</td>
                <td>{program.name}</td>
                <td>{program.hours}</td>
                <td>{program.presence}</td>
                <td>{program.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;