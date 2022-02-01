import React from 'react';

interface PropriedadePageProps {
    
}

const PropriedadePage: React.FC<PropriedadePageProps> = (props) => {
    return (
        <div>
            <button onClick={() => console.log(props)}>logger</button>
        </div>
    );
};

export default PropriedadePage;
