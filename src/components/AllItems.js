import React, { useEffect, useState } from 'react';

const AllItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('path/to/your/items/data'); // Replace with actual data source
            const data = await response.json();
            setItems(data);
        };

        fetchItems();
    }, []);

    return (
        <div className="all-items">
            <h2>All In-Game Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllItems;