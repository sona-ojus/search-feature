
import React from 'react'
import '../App.css'

function Selected_String(props){
    return(
        <div className="selected_str_list" key={"key_" + props.index}>
            <span>{props.str}</span>
            <span className="close" onClick={props.delete_selection}
                >&times;
            </span>
        </div>
    );
}

export default Selected_String