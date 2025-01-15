import React from 'react';

const SelectedItems = ({ selectedItems }) => {
    return (
        <div className="selected-items">
            <h2>Selected Items</h2>
            <ul>
                {selectedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SelectedItems;