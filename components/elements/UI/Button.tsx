import React, { ReactElement } from 'react';
import autobind from 'class-autobind'
import Button, { ButtonProps } from '@mui/material/Button';
interface ButtonEProps extends ButtonProps {

}

interface ButtonEState {

}

type ButtonEPayload<T> = {
    [P in keyof T]?: T[P];
}



export class ButtonE extends React.Component<ButtonEProps, ButtonEState> {

    constructor(p: ButtonEProps) {
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