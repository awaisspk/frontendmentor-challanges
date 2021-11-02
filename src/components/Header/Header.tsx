import {Logo as SiteLogo} from '@components/Icons';
import {styled} from '@stitchesConfig';
import NextLink from 'next/link';
import {Flex} from '@components/Flex';
import {Link} from '@components/Button';

export const Header = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <Flex as="nav" main="spaceBtw" cross="center">
          <NextLink href="/">
            <a>
              <SiteLogo />
            </a>
          </NextLink>

          <Flex as="ul" gap={{'@initial': 1, '@bp1': 3}}>
            <li>
              <NextLink href="/">
                <Link>Features</Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/">
                <Link>Team</Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/">
                <Link>Sign in</Link>
              </NextLink>
            </li>
          </Flex>
        </Flex>
      </StyledHeader>
    </Wrapper>
  );
};

const StyledHeader = styled('header', {
  px: '$5',
  py: '$9',
  maxHeight: 100,
  maxWidth: '1300px',
  margin: 'auto',

  '& li': {
    listStyle: 'none',
  },

  '& a': {
    verticalAlign: 'top',
  },
});
const Wrapper = styled('div', {});
