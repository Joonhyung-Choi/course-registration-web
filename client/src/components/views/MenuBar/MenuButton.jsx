import React, {} from 'react';
import Button from 'react-bootstrap/Button'

function MenuButton(props){
    return(
        <div>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant='primary'>primary</Button>
        </div>
    );
}

export default MenuButton;