import { screen, render } from '@testing-library/react-native';
import { List } from '../List';

const mockValues = {
  data: [
    '1', '2', 'Item', '1'
  ]
}

describe('components/List/<List />', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  });

  it('renders component properly', () => {
    render(<List {...mockValues} />)

    expect(screen.getAllByText('1')).toHaveLength(2);
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('Item')).toBeTruthy();
  });
})
