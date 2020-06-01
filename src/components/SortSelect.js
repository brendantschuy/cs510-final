import React from 'react';

const SortSelect = ({ opts, onSelect }) => {
    return (
        <select onChange={onSelect}>
            {opts.map(opt =>
                <option value={opt}>{opt}</option>
            )}
        </select>
    );
};


export default SortSelect;