import React, { PropsWithChildren } from 'react';

interface TextProps {
    classNameProps: string;
    colorOverride?: boolean;
}

const Text: React.FC<PropsWithChildren<TextProps>> = ({
    classNameProps,
    colorOverride = false,
    children
}: PropsWithChildren<TextProps>) => {
    return (
        <p
            className={`${classNameProps} ${colorOverride ? '' : 'text-slate-50'}`}
        >
            {children}
        </p>
    );
};

export default Text;
