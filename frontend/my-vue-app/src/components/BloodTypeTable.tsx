import React from 'react';
import IBloodType from '../types/IBloodType';

interface BloodTypeTableProps {
    bloodTypes: IBloodType[];
}

const BloodTypeTable: React.FC<BloodTypeTableProps> = ({ bloodTypes }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {bloodTypes.map(bloodType => (
                    <tr key={bloodType.id}>
                        <td>{bloodType.id}</td>
                        <td>{bloodType.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BloodTypeTable;