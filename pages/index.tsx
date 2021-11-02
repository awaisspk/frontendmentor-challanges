import {Button} from '@components/Button';
import {styled} from '@stitchesConfig';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Flex>
      <Button icon="arrow">Go to</Button>
      <Button icon="email">Email</Button>
      <Button>button</Button>
      <Text> </Text>
    </Flex>
  );
};

export default Home;

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100vh',
});

const Text = styled('p', {});
