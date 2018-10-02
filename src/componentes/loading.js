import React from 'react'
import If from '../util/if'

export default props => (
    <If test={props.loading} >
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span className="timer-loader"> </span>
            <span className="font-weight-bold">&nbsp;Carregando...</span>
        </div>
    </If>
)