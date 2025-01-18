import React from 'react';

const SelectedItems = ({ heldItems, removeItem }) => {
    return (
        <div className="selected-items">
            <h2>Currently Held Items</h2>
            {heldItems.length > 0 ? (
                heldItems.map((item, index) => (
                    <div key={index} className="item">
                        <span>{item.name}</span>
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>No items currently held.</p>
            )}
        </div>
    );
};

export default SelectedItems;