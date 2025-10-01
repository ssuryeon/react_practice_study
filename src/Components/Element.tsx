import {styled} from 'styled-components';

interface IElement {
    content:string;
}

const El = styled.div`
    width: 100%;
    border: 1px solid #ccc;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    input[type="checkbox"]:checked + span{
        text-decoration: line-through;
        color: #666;
    }
    &:has([type="checkbox"]:checked) {
        background-color: #fffbdf;
    }
`;

function Element({content}:IElement) {
    return (
        <El>
            <input type='checkbox' /><span>{content}</span>
        </El>
    )
}

export default Element;