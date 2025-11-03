import React, {createContext, useState} from 'react';

interface ColorContextType {
    state: {
        color: string;
        subcolor: string;
    };
    actions: {
        setColor: React.Dispatch<React.SetStateAction<string>>;
        setSubColor: React.Dispatch<React.SetStateAction<string>>;
    };
}

const ColorContext = createContext<ColorContextType | undefined>({
    state: {color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},
        setSubColor: () => {}
    }
});

const ColorProvider = ({children}:any) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubColor] = useState('red');

    const value: ColorContextType = {
        state: {color, subcolor},
        actions: {setColor, setSubColor}
    }
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
}

const ColorConsumer = ColorContext.Consumer;
// const {Consumer: ColorConsumer} = ColorContext; 랑 동일

export {ColorConsumer, ColorProvider};
export default ColorContext;