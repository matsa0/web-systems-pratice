import React from 'react';
import IPerson from '../types/IPerson';

interface PersonTableProps {
    persons: IPerson[];
}

const PersonTable: React.FC<PersonTableProps> = ({ persons }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Birthdate</th>
                    <th>Blood Type</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {persons.map(person => (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{new Date(person.birthdate).toLocaleDateString()}</td>
                        <td>{person.bloodType.type}</td>
                        <td>{person.city.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PersonTable;