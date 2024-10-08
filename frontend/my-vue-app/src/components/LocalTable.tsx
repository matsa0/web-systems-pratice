import React from 'react';
import ILocal from '../types/ILocal';

interface LocalTableProps {
    locals: ILocal[];
}

const LocalTable: React.FC<LocalTableProps> = ({ locals }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {locals.map(local => (
                    <tr key={local.id}>
                        <td>{local.id}</td>
                        <td>{local.name}</td>
                        <td>{local.address}</td>
                        <td>{local.city.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LocalTable;