import React, { FC, useState } from 'react';
import './Courses.css';
import cppImage from '../assets/c++.png';
import jsImage from '../assets/js.png';
import pythonImage from '../assets/python.png';
import tsImage from '../assets/ts.png';
import csharpImage from '../assets/c4.png';

// Сопоставление названий с путями к изображениям
const imageMap: { [key: string]: string } = {
  'c++': cppImage,
  'js': jsImage,
  'python': pythonImage,
  'ts': tsImage,
  'c#': csharpImage,
};

interface ICourse {
  name: string;
  typeEngeeniring: string;
  mounthPay: number;
  mounthQty: number;
}

const Courses: FC<ICourse> = (props) => {
  return (
    <div className="courses-section">

      {/* Секция с информацией о курсе */}
      <div className="course-card">
        <h3 className="course-title">КУРС ПРОГРАМУВАННЯ</h3>
        <div className="course-content">
          <img src={imageMap[props.name]} alt={props.name} className="course-image" />
          <ul>
            <li className="course-item blue-background">{props.name}</li>
            <li className="course-item gray-background">{props.typeEngeeniring || "back-end / front-end"}</li>
            <li className="course-item black-background">{props.mounthQty}</li>
            <li className="course-item border-black">{props.mounthPay}грн.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;