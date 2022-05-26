import React from 'react'

export default function alert(props) {
    const capitalize = (word)=>{
       const lower  = word.toLowerCase();
       return lower.charAt(0).toUpperCase() +lower.slice(1);

    }
    return (
    <div style={{height:"3.5rem"}}>
        {
        props.alert && 
            <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.typ)}</strong>:{props.alert.msg}
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
            </div>  
        
    )
}
