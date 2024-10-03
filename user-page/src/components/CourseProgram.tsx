import React, {FC, useState, useEffect}  from "react";
import axios from "axios";
import { ProductNameToRoute } from "../context/ProductNameToRoute";

type TCourseProgram = {
    name: string,
    studySection: string,
    studyHours: number,
    isOnline: boolean,
    teacher: string,
}

type TProduct = {
    name: string,
}

export const CourseProgram: FC<TProduct> = (props) => {

    const [courseProram, setCourseProgram] = useState<Array<TCourseProgram | null>>([]);

    const orderDetails = axios.create({
        baseURL: 'https://localhost:7228/api/v1/User/order-details',
        method: 'get',
        responseType: 'json',
    });

    let routeName = ProductNameToRoute[props.name == null ? 'none' : props.name] == undefined ? props.name : ProductNameToRoute[props.name == null ? 'none' : props.name];

    useEffect(() => {
        orderDetails.get(routeName).
        then((responce) => {
            setCourseProgram(responce.data);
            console.log(responce.data);    
        }).
        catch((error) => {
           console.log('error:', error)
        });
     }, []);

    return (
    <div className="course-program">
        <h3>ПРОГРАМА КУРСУ {props.name}</h3>
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
                {courseProram.map((program, i) => (
                <tr>
                    <td style={{color: 'black'}}>{i + 1}</td>
                    <td style={{color: 'black'}}>{program?.studySection}</td>
                    <td style={{color: 'black'}}>{program?.studyHours}</td>
                    <td style={{color: 'black'}}>{program?.isOnline ? 'Так' : 'Ні'}</td>
                    <td style={{color: 'black'}}>{program?.teacher}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}