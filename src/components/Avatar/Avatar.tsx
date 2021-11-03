import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {styled} from '@stitchesConfig';

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '3rem',
  height: '3rem',
  borderRadius: '$full',
});

type Props = {
  src: string;
};

export const Avatar = ({src}: Props) => {
  return (
    <AvatarPrimitive.Root>
      <AvatarImage src={src} />
      <AvatarPrimitive.Fallback delayMs={500}>AI</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
