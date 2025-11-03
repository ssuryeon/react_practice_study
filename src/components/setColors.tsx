import {Component} from 'react';
import ColorContext, {ColorContextType} from '../contexts/color'
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SetColors extends Component {
    static contextType = ColorContext;
    context!: ColorContextType; // !는 해당 속성이 초기화되지 않았지만 나중에 반드시 값이 할당될 것임을 보장한다고 알려줌
    handleSetColor = (color:string) => {this.context.actions.setColor(color)};
    handleSetSubColor = (subcolor:string) => {this.context.actions.setSubColor(subcolor)};
    render() {
    return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{display: 'flex'}}>
                    {
                        colors.map(color => 
                                <div 
                                key={color}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    background: color,
                                    cursor: 'pointer'
                                }}
                                onClick={() => this.handleSetColor(color)}
                                onContextMenu={(e) => {
                                     e.preventDefault();
                                    this.handleSetSubColor(color)
                                }}
                            />    
                        )
                    }
                </div>
                <hr />
            </div>
        )
    }
}

export default SetColors;