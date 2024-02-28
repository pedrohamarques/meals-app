import { screen, fireEvent, render } from '@testing-library/react-native';
import { IconButton, IconButtonProps } from '../IconButton';

const mockValues: IconButtonProps = {
  onPress: jest.fn(),
  icon: 'star',
  color: 'blue'
}
describe('components/IconButton/<IconButton />', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  });

  it('renders component properly', () => {
    render(<IconButton {...mockValues} />)
    expect(screen.getByTestId('components.iconButton.pressable')).toBeTruthy();
  });

  it('calls onPress when component is pressed', () => {
    render(<IconButton {...mockValues} />);

    fireEvent.press(screen.getByTestId('components.iconButton.pressable'));

    expect(mockValues.onPress).toHaveBeenCalledTimes(1);
  })
})
