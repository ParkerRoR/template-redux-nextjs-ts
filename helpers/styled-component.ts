interface IPayload {
    props: {
        theme: RootObject
    }
}

export function getTheme({props}: IPayload) {
    return props.theme
}



interface Colors {
    powderWhite: string;
    persianGreen: string;
    lightBlue: string;
    onyx: string;
}

interface FontSizes {
    small: string;
    medium: string;
    large: string;
}

interface RootObject {
    colors: Colors;
    fonts: string[];
    fontSizes: FontSizes;
}


