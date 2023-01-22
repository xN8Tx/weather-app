import React, {useState, useEffect} from 'react';
import './CitySearch.css'

const CitySearch = ({value, setValue, description}) => {
    const [inputWidth, setInputWidth] = useState(40);

    useEffect(() => {
        if (value <= 3) setInputWidth(40)
    }, [value]);

    return (
        <div className='city-search'>
            <p className='text'>Right now, </p>
            <input type="text"
                className='input'
                value={value}
                style={{width: `${inputWidth}px`}}
                onChange={(e) => {
                    setValue(e.target.value)
                    if(value.length >= 3) {
                        setInputWidth((value.length + 1) * 11.7)
                    } 
                }}
                placeholder='City'
            />
            <p className='text'>, there's {description}</p>
        </div>
    );
};

export default CitySearch;