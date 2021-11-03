import {Arrow} from '@components/Icons';
import {Email} from '@components/Icons';
import {styled} from '@stitchesConfig';
import {motion, Variants} from 'framer-motion';
import React from 'react';

const StyledButton = styled(motion.button, {
  border: 'none',
  linearGradient: '$brand, $blue0',
  cursor: 'pointer',
  padding: '$3 $8',
  color: '$white',
  fontFamily: 'Inter',
  fontSize: '$1',
  fontWeight: '$500',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$full',
  boxShadow: '0 20px 40px rgba(59,43,91,0.3)',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',

  '& svg': {
    marginRight: '0.5rem',
  },

  '@supports selector(:focus-visible)': {
    '&:focus-visible': {
      outline: 'none',
      boxShadow:
        '0 20px 40px hsla(176, 68%, 64%,0.5) 0 0 0 3px  hsla(176, 68%, 64%,0.3)',
    },
  },
});

type ButtonProps = {
  icon?: 'arrow' | 'email';
};

type StyledButtonProps = React.ComponentProps<typeof StyledButton>;
type Props = StyledButtonProps & ButtonProps;

export const Button: React.FC<Props> = ({icon, children, ...rest}) => {
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
        {...rest}
      >
        {icon === 'arrow' && <Arrow />}
        {icon === 'email' && <Email />}
        {children}
      </StyledButton>
    </>
  );
};
