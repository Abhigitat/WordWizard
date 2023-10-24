import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} style={{position:'absolute'}} role="alert">
        <div>
            <strong>{props.alert.message}</strong>
        </div>
    </div>
  )
}
