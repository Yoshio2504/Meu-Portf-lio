import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";
import Text from "@src/components/Text/Text";
import React from "react";
import { useRipple } from "react-use-ripple";
import { StyleSheet } from "@src/theme/StyleSheet"; 
import { useRouter } from "next/router";

const StyledButton = styled(Text)<any>`
`;

 export interface ButtonBaseProps { 
    href?: string;
    children?: React.ReactNode;
    textVariant?: ThemeTypographyVariants;
    styleSheet?: StyleSheet;
    onClick?: (event: React.MouseEvent<any>) => void; 
}

export default function ButtonBase({ 
    textVariant,
    styleSheet, 
    children,
    href,
    ...props
}: ButtonBaseProps) {
    const router = useRouter();
    
    const ref = React.useRef<HTMLElement>(null); 
    
    const Tag = href ? 'a' : 'button'; 
    const isLink = Boolean(href);
    
    useRipple(ref, {
        rippleColor: 'rgb(253, 253, 253)',
        animationLength: 600,
    });
    
    return (
        <StyledButton
            ref={ref} 
            tag={Tag}
            href={href}
            styleSheet={{
                backgroundColor: 'transparent',
                border: '0', 
                color: 'inherit',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                outline: 0,
                ...styleSheet 
            }}
            onClick={(event: React.MouseEvent<any>) => { 
              isLink && event.preventDefault();
              isLink && href && router.push(href);  
              !isLink && props.onClick && props.onClick(event);
            }}
            {...props}
        >
            {children}
        </StyledButton>
    );
}