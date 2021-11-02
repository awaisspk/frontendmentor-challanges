import {Arrow} from '@components/Icons';
import {Email} from '@components/Icons';
import {styled} from '@stitchesConfig';
import {motion, Variants} from 'framer-motion';
import React from 'react';

const StyledButton = styled(motion.button, {
  border: 'none',
  backgroundColor: 'rgba(59,43,91,1)',
  cursor: 'pointer',
  padding: '$2 $6',
  color: '$white',
  fontFamily: 'Inter',
  fontSize: '$1',
  fontWeight: '$500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$lg',
  boxShadow: '0 20px 40px rgba(59,43,91,0.3)',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  outline: 'none',

  '& svg': {
    marginRight: '0.5rem',
  },

  '&:focus-visible': {
    boxShadow: '0 20px 40px rgba(59,43,91,0.3), 0 0 0 3px rgba(59,43,91,0.7)',
  },
});

type ButtonProps = {
  icon?: 'arrow' | 'email';
};

export const Button: React.FC<ButtonProps> = ({icon, children}) => {
  const isIcon = icon !== undefined;

  const buttonVariants: Variants = {
    idle: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      <StyledButton
        css={{px: isIcon ? '10px' : '$3'}}
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
      >
        {icon === 'arrow' && <Arrow />}
        {icon === 'email' && <Email />}
        {children}
      </StyledButton>
    </>
  );
};
