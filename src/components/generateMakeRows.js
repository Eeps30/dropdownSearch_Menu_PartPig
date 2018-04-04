import React from 'react';

function generateMakeRow(props){
    return (
        <div onClick={()=>{
            props.callback()
        }}>{props.label}</div>
    )
}

export default generateMakeRow;