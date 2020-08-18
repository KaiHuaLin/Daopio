import React from 'react';

import Option from './option.component';


function OptionList({options, handleDelete, handleValue}) {
    return (
        <div>
            {options.map(option => (
                <Option 
                    key={option.id} 
                    id={option.id}
                    handleDelete={handleDelete}
                    handleValue={handleValue}
                />
            ))}
        </div>
    )
}

export default OptionList;