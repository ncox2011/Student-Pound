import React, { Component } from 'react';
import EmployeeList from './EmployeeList';
import LocationList from './LocationList';

class Kennel extends Component {
    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}

export default Kennel;