import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div class={`alert alert-${props.alert.type} d-flex align-items-center`} style={props.alert.type==="success"?{backgroundColor:"#9affd0"}:""} role="alert">
        <div>
            <strong>{props.alert.message}</strong>
        </div>
    </div>
  )
}
