import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Loading from './loading'

export default props => (
    <Card>
        <CardHeader>
            <i className="fa fa-align-justify"></i> {props.titulo}
        </CardHeader>
        <CardBody>
            <Loading loading={props.loading} />
            {props.children}
        </CardBody>
    </Card>
)