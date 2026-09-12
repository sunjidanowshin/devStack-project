import React from 'react';

import type { Iitem } from '../../types/itemtype';

const Available = ({ items }: { items: Iitem[] }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => {
                return <div>{item.name}</div>
            })}
        </div>
    );
};

export default Available;