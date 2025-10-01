import {styled} from 'styled-components';
import Element from './Element';
import React, {useState} from 'react';
import { FiMinusCircle } from "react-icons/fi";

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: wrap;
    width: 400px;
    height: 400px;
    background-color: white;
    gap: 0;
    overflow: hidden;
    form {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        margin-top: 0;
    }
`;

const H2 = styled.h2`
    color: white;
    background-color: #0085ad;
    padding: 10px;
    text-align: center;
    display: inline-block;
    width: 100%;
    height: 10%;
    margin: 0;
`;

const Input = styled.input`
    color: white;
    background-color: #222;
    border: none;
    outline: none;
    width: 90%;
    height: 100%;
    margin-right: 0;
    padding: 8px;
    box-sizing: border-box;
`;

const Button = styled.button`
    border: none;
    background-color: #7c8994;
    color: white;
    width: 10%;
    height: 100%;
    font-size: 20px;
`;

const ElementWrapper = styled.div`
    position: relative;
    button {
        border: none;
        background-color: transparent;
        position: absolute;
        right: 20px;
        top: calc(50% - 10px);
        cursor: pointer;
    }
`;

interface IContent {
    text: string;
    id: number;
}

function Content() {
    const [elementList, setElement] = useState<IContent[]>([]);
    const [value, setValue] = useState<string>('');
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(value != ''){
            setElement([...elementList, {
                text: value,
                id: Date.now(),
            }]);
            setValue('');
        }
        else alert('값을 입력해주세요.')
    }
    const onClick = (id:number) => {
            setElement(elementList.filter(el => el.id != id));
    }
    return (
        <Container>
            <H2>일정 관리</H2>
            <form onSubmit={onSubmit}>
                <Input placeholder="할 일을 입력하세요" 
                        type="text" 
                        value={value} 
                        onChange={onChange}
                />
                <Button>+</Button>
            </form>
            {elementList.map((val) => (
                <ElementWrapper key={val.id}>
                    <Element content={val.text} />
                    <button onClick={() => onClick(val.id)}>
                        ⛔
                    </button>
                </ElementWrapper>
            ))}
        </Container>
    )
}

export default Content;