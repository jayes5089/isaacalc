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

    const categorizedItems = items.reduce((acc, item) => {
        const { dlc } = item;
        if (!acc[dlc]) {
            acc[dlc] = [];
        }
        acc[dlc].push(item);
        return acc;
    }, {});

    return (
        <div className="all-items">
            <h2>All In-Game Items</h2>
            {Object.keys(categorizedItems).map(dlc => (
                <div key={dlc} className="dlc-category">
                    <h3>{dlc}</h3>
                    <ul>
                        {categorizedItems[dlc].map(item => (
                            <li key={item.id}>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AllItems;