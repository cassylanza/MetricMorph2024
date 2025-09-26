import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import RaceProjectionInfoEntry from '../RaceProjectionInfoEntry';
import Routes from '../Routes'; // Importing the component to test
import SwimMenu1 from '../SwimMenu1'; // Importing SwimMenu1 component
import TrackMenu1 from '../TrackMenu1'; // Importing TrackMenu1 component




// Mocking react-native-router-flux actions
jest.mock('react-native-router-flux', () => ({
  Actions: {
    swimmenu1: jest.fn(),
    trackmenu1: jest.fn(),
    convperfinfoentry: jest.fn(),
    conversionresults: jest.fn(),
    splitsinfoentry: jest.fn(),
    splitsresults: jest.fn(),
    effortinfoentry: jest.fn(),
    effortresults: jest.fn(),
  },
}));

describe('RaceProjectionInfoEntry', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RaceProjectionInfoEntry />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task bar swim button appears', () => {
    const { getByText } = render(<RaceProjectionInfoEntry />);
    expect(getByText("Swim Menu")).toBeTruthy();
  });

  it('task bar track button appears', () => {
    const { getByText } = render(<RaceProjectionInfoEntry />);
    expect(getByText("Track Menu")).toBeTruthy();
  });

  it('calculation button appears', () => {
    const { getByText } = render(<RaceProjectionInfoEntry />);
    expect(getByText(" Calculate ")).toBeTruthy();
  })


  test('Convert button moves to next screen', () => {
    render(
      <NavigationContainer>
        <RaceProjectionInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText(' Calculate '));

    expect(screen.getByText('MM:SS:TH')).toBeTruthy();
  });

  function Example() {
    const [value, setValue] = useState('')
    return <TextInput value={value} onChangeText={setValue} testID="input" />
  }

  test('text box appears', () => {
    const { getByTestId } = render(<RaceProjectionInfoEntry />);
    const input = getByTestId('');
    firEvent.changeText(input, '123');
    expect(input.props.value).toBe('123');
  });

  test('show swim menu when swim menu button pressed', () => {
    render(
      <NavigationContainer>
        <RaceProjectionInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Swim Menu'));

    expect(screen.getByText('Swim Menu')).toBeTruthy();
  });

  test('show track menu when track menu button pressed', () => {
    render(
      <NavigationContainer>
        <RaceProjectionInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Track Menu'));

    expect(screen.getByText('Track Menu')).toBeTruthy();
  });




})
