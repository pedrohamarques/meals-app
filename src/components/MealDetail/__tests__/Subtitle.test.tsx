import { screen, render } from '@testing-library/react-native';
import { Subtitle } from '../Subtitle';
import { Text } from 'react-native';

describe('components/Subtitle/<Subtitle />', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  });

  it('renders component properly', () => {
    render(<Subtitle><Text>Some Text</Text></Subtitle>)

    expect(screen.getByText('Some Text')).toBeTruthy();
  });
})
