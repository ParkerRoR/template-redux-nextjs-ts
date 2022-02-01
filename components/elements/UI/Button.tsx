import React, { ReactElement } from 'react';
import autobind from 'class-autobind'
import Button, { ButtonProps } from '@mui/material/Button';
interface ButtonElementProps extends ButtonProps {

}

interface ButtonElementState {

}

type ButtonElementPayload<T> = {
    [P in keyof T]?: T[P];
}



export class ButtonElement extends React.Component<ButtonElementProps, ButtonElementState> {

    constructor(p: ButtonElementProps) {
        super(p)
        autobind(this)
    }

    render(): ReactElement {
        const { state, props } = this

        return (
            <>
                <Button
                    color="primary"
                    variant="contained"
                    {...props}
                >
                    {props.children}
                </Button>
            </>
        );
    }
}