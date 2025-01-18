import React from 'react';

const HeldItems = ({ heldItems }) => {
    return (
        <div className="held-items">
            <h2>Currently Held Items</h2>
            <ul>
                {heldItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default HeldItems;