import React from 'react';

export default function List({ items, toggleComplete, deleteItem }) {
    return (
        <ul className='grocery-list'>
            {items.map((item, index) => (
                <li key={index} className='grocery-item'>
                    <input
                        type="checkbox"
                        checked={item.complete}
                        onChange={() => toggleComplete(index)}
                    />
                    <span className={item.completed ? "completed" : ""} style={{textTransform: 'capitalize'}}>{item.text}</span>
                    <button onClick={() => deleteItem(index)} className="delete-btn">x</button>
                </li>
            ))}
        </ul>
    );
};

