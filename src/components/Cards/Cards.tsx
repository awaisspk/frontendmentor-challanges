import {Flex} from '@components/Flex';
import {
  AccessAnywhere,
  Collaboration,
  Security,
  Store,
} from '@components/Icons';
import {Text} from '@components/Text';
import {css} from '@stitchesConfig';

const basis = css({
  flexBasis: '90%',

  '@bp1': {
    flexBasis: '70%',
  },

  '@bp2': {
    flexBasis: '40%',
  },
});

export const Cards = () => {
  return (
    <Flex
      flow="row"
      wrap="wrap"
      main="center"
      css={{marginTop: '$14', gap: '$24', maxWidth: '900px', marginX: 'auto'}}
    >
      <Flex flow="col" cross="center" className={basis()}>
        <AccessAnywhere />
        <Text variant="title" align="center" css={{paddingTop: '$5'}}>
          Access your files, anywhere
        </Text>
        <Text variant="para" align="center">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere
        </Text>
      </Flex>

      <Flex flow="col" cross="center" className={basis()}>
        <Security />
        <Text variant="title" align="center" css={{paddingTop: '$5'}}>
          Access your files, anywhere
        </Text>
        <Text variant="para" align="center">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere
        </Text>
      </Flex>

      <Flex flow="col" cross="center" className={basis()}>
        <Collaboration />
        <Text variant="title" align="center" css={{paddingTop: '$5'}}>
          Access your files, anywhere
        </Text>
        <Text variant="para" align="center">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere
        </Text>
      </Flex>

      <Flex flow="col" cross="center" className={basis()}>
        <Store />
        <Text variant="title" align="center" css={{paddingTop: '$5'}}>
          Access your files, anywhere
        </Text>
        <Text variant="para" align="center">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere
        </Text>
      </Flex>
    </Flex>
  );
};
