import React from 'react'
import If from '../../../util/if'
export default props => (
    <If test={!props.hide}>
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
    </If>
)