import React from 'react';
import Event from './Event';


const Calendar = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td> </td>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        <td><Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash'/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9am</td>
                        <td><Event event='Starbucks ☕️' color ='green' location = 'The Flats Apartments'/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Yolk 🍳' color ='green' location='Bass Pro Shop'/></td>
                    </tr>
                    <tr>
                        <td className="time">11am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Subway 🚊' color ='pink' location='IMAX Theatre'/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12pm</td>
                        <td><Event event='Hunting 🚊' color ='red' location='Round Rock Nature Preserve'/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Home Birth 🚊' color ='blue' location='The house'/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2pm</td>
                        <td></td>
                        <td><Event event='Doctors Office ☕️' color ='green' location='Southwestern Medical Center'/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Skate Park ☕️' color ='green' location='Downtown Texarkana'/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4pm</td>
                        <td></td>
                        <td></td>
                        <td><Event event='Concert ☕️' color ='pink' location='?'/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5pm</td>
                        <td><Event event='Shower 🍳' color ='green' location='The House'/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;