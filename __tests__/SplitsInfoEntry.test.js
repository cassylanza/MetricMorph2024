import React from 'react';
import { render, screen, fireEvent, getByText, getByPlaceholderText, waitFor, changeText, findByPlaceholderText } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import SplitsInfoEntry from '../SplitsInfoEntry';
import SplitsResults from '../SplitsResults.js';



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

describe('SplitsInfoEntry', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SplitsInfoEntry />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task bar swim button appears', () => {
    const { getByText } = render(<SplitsInfoEntry />);
    expect(getByText("Swim Menu")).toBeTruthy();
  });

  it('task bar track button appears', () => {
    const { getByText } = render(<SplitsInfoEntry />);
    expect(getByText("Track Menu")).toBeTruthy();
  });

  it('calculation button appears', () => {
    const { getByText } = render(<SplitsInfoEntry />);
    expect(getByText("CALCULATE")).toBeTruthy();
  })

  describe('SplitsInfoEntry component', () => {
    it('displays conversion results when convert button is pressed', async () => {
      const { getByPlaceholderText, queryByText, getByText } = render(<SplitsInfoEntry />);

      const currentRaceDistanceInput = getByPlaceholderText(' Current Race Distance (in meters)');
      fireEvent.changeText(currentRaceDistanceInput, '1600');

      const hours = getByPlaceholderText('  hh  ');
      fireEvent.changeText(hours, '00');

      const minutes = getByPlaceholderText('  mm  ');
      fireEvent.changeText(minutes, '06');

      const seconds = getByPlaceholderText('  ss  ');
      fireEvent.changeText(seconds, '05');

      const desiredSplitsInput = getByPlaceholderText(' Desired Split Distance (in meters)');
      fireEvent.changeText(desiredSplitsInput, '400');

      const convertButton = getByText("CALCULATE");
      fireEvent.press(convertButton);

      await waitFor(() => {
        expect(queryByText('400m')).toBeTruthy();
      });
    });
  });

  describe('SplitsInfoEntry component', () => {
  it('renders all text input boxes', () => {
    const { getByPlaceholderText } = render(<SplitsInfoEntry />);

    const currentRaceDistanceInput = getByPlaceholderText(' Current Race Distance (in meters)');
    const hours = getByPlaceholderText('  hh  ');
    const minutes = getByPlaceholderText('  mm  ');
    const seconds = getByPlaceholderText('  ss  ');
    const desiredSplitInput = getByPlaceholderText(' Desired Split Distance (in meters)');

    expect(currentRaceDistanceInput).toBeTruthy();
    expect(hours).toBeTruthy();
    expect(minutes).toBeTruthy();
    expect(seconds).toBeTruthy();
    expect(desiredSplitInput).toBeTruthy();
  });
});

/*describe('SplitsInfoEntry component', () => {
  it('limits input length based on maxLength', async () => {
    const { getByPlaceholderText } = render(<SplitsInfoEntry />);
    const currentRaceDistanceInput = getByPlaceholderText(' Current Race Distance (in meters)');
    const hours = getByPlaceholderText('  hh  ');
    const minutes = getByPlaceholderText('  mm  ');
    const seconds = getByPlaceholderText('  ss  ');
    const projectedRaceDistanceInput = getByPlaceholderText(' Projected Race Distance (in meters)');

    expect(currentRaceDistanceInput).toBeTruthy();
    expect(hours).toBeTruthy();
    expect(minutes).toBeTruthy();
    expect(seconds).toBeTruthy();
    expect(projectedRaceDistanceInput).toBeTruthy();

    await waitFor(() => {
      console.log('Inside waitFor');
      expect(currentRaceDistanceInput.props.value.length).toBe(15);
      expect(currentRaceTimeInput.props.value.length).toBe(15);
      expect(desiredSplitInput.props.value.length).toBe(15);
    });
  });*/

  test('show swim menu when swim menu button pressed', () => {
    render(
      <NavigationContainer>
        <SplitsInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Swim Menu'));

    expect(screen.getByText('Swim Menu')).toBeTruthy();
  });

  test('show track menu when track menu button pressed', () => {
    render(
      <NavigationContainer>
        <SplitsInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Track Menu'));

    expect(screen.getByText('Track Menu')).toBeTruthy();
  });




})
