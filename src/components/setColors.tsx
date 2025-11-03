import {ColorConsumer} from '../contexts/color'
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SetColors = () => {
    return (
        <ColorConsumer>
            {value => (
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
                                    onClick={() => value?.actions.setColor(color)}
                                    onContextMenu={(e) => {
                                        e.preventDefault();
                                        value?.actions.setSubColor(color)
                                    }}
                                />    
                            )
                        }
                    </div>
                </div>
            )}
        </ColorConsumer>
    )
}

export default SetColors;