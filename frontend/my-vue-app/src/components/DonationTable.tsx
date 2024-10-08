import React from 'react';
import IDonation from '../types/IDonation';

interface DonationTableProps {
    donations: IDonation[];
}

const DonationTable: React.FC<DonationTableProps> = ({ donations }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Person</th>
                    <th>Local</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {donations.map(donation => (
                    <tr key={donation.id}>
                        <td>{donation.id}</td>
                        <td>{donation.person.name}</td>
                        <td>{donation.local.name}</td>
                        <td>{new Date(donation.created_at).toLocaleDateString()}</td>
                        <td>{new Date(donation.updated_at).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DonationTable;