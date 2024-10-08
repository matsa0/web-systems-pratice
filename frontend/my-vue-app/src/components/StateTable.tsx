import React from 'react';
import IState from '../types/IState';

interface StateTableProps {
    states: IState[];
}

const StateTable: React.FC<StateTableProps> = ({ states }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Abbreviation</th>
                </tr>
            </thead>
            <tbody>
                {states.map(state => (
                    <tr key={state.id}>
                        <td>{state.id}</td>
                        <td>{state.name}</td>
                        <td>{state.acronym}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StateTable;