import React from 'react';
import { render, screen, fireEvent, getByText, getByPlaceholderText, waitFor, changeText, findByPlaceholderText } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import EffortInfoEntry from '../EffortInfoEntry';
import SwimMenu1 from '../SwimMenu1'; // Importing SwimMenu1 component
import TrackMenu1 from '../TrackMenu1'; // Importing TrackMenu1 component
import EffortResults from '../EffortResults';




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

describe('EffortInfoEntry', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EffortInfoEntry />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task bar swim button appears', () => {
    const { getByText } = render(<EffortInfoEntry />);
    expect(getByText("Swim Menu")).toBeTruthy();
  });

  it('task bar track button appears', () => {
    const { getByText } = render(<EffortInfoEntry />);
    expect(getByText("Track Menu")).toBeTruthy();
  });

  it('calculation button appears', () => {
    const { getByText } = render(<EffortInfoEntry />);
    expect(getByText("CALCULATE")).toBeTruthy();
  })


  describe('EffortInfoEntry component', () => {
    it('displays conversion results when convert button is pressed', async () => {
      const { getByPlaceholderText, queryByText, getByText } = render(<EffortInfoEntry />);

      const currentRaceDistanceInput = getByPlaceholderText(' Current Race Distance (in meters)');
      fireEvent.changeText(currentRaceDistanceInput, '3200');

      const hours = getByPlaceholderText('  hh  ');
      fireEvent.changeText(hours, '00');

      const minutes = getByPlaceholderText('  mm  ');
      fireEvent.changeText(minutes, '06');

      const seconds = getByPlaceholderText('  ss  ');
      fireEvent.changeText(seconds, '05');

      const projectedEffortInput = getByPlaceholderText(' Effort percentage (1-120%)');
      fireEvent.changeText(projectedEffortInput, '80');

      const convertButton = getByText("CALCULATE");
      fireEvent.press(convertButton);

      await waitFor(() => {
        expect(queryByText('65%')).toBeTruthy();
      });
    });
  });



  describe('EffortInfoEntry component', () => {
  it('displays text input boxes for race distance, race time, and effort percentage', () => {
    render(<EffortInfoEntry />);

    // Assert that text input boxes for race distance, race time, and effort percentage are present
    const raceDistanceInput = screen.getByPlaceholderText(' Current Race Distance (in meters)');
    const hours = screen.getByPlaceholderText('  hh  ');
    const minutes = screen.getByPlaceholderText('  mm  ');
    const seconds = screen.getByPlaceholderText('  ss  ');
    const effortPercentageInput = screen.getByPlaceholderText(' Effort percentage (1-120%)');

    expect(raceDistanceInput).toBeTruthy();
    expect(hours).toBeTruthy();
    expect(minutes).toBeTruthy();
    expect(seconds).toBeTruthy();
    expect(effortPercentageInput).toBeTruthy();
  });
});

  test('show swim menu when swim menu button pressed', () => {
    render(
      <NavigationContainer>
        <EffortInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Swim Menu'));

    expect(screen.getByText('Swim Menu')).toBeTruthy();
  });

  test('show track menu when track menu button pressed', () => {
    render(
      <NavigationContainer>
        <EffortInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Track Menu'));

    expect(screen.getByText('Track Menu')).toBeTruthy();
  });




})
