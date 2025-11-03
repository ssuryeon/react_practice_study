import ColorContext from '../contexts/color';
import {useContext} from 'react';

const ColorBox = () => {
    const context = useContext(ColorContext);
    if(!context) return null;
    const {state} = context;
    return (
        <>
            <div 
                style={{
                    width: '64px',
                    height: '64px',
                    background: state?.color
                }}
            />
            <div 
                style={{
                    width: '32px',
                    height: '32px',
                    background: state?.subcolor
                }}
            />
        </>
    )
}

export default ColorBox;