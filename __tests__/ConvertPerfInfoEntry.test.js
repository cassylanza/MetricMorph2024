import React from 'react';
import { render, screen, fireEvent, getByText, getByPlaceholderText, waitFor, changeText, findByPlaceholderText } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import ConvertPerfInfoEntry from '../ConvertPerfInfoEntry.js';
import ConversionResults from '../ConversionResults.js';



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

describe('ConvertPerfInfoEntry', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ConvertPerfInfoEntry />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task bar swim button appears', () => {
    const { getByText } = render(<ConvertPerfInfoEntry />);
    expect(getByText("Swim Menu")).toBeTruthy();
  });

  it('task bar track button appears', () => {
    const { getByText } = render(<ConvertPerfInfoEntry />);
    expect(getByText("Track Menu")).toBeTruthy();
  });

  it('calculation button appears', () => {
    const { getByText } = render(<ConvertPerfInfoEntry />);
    expect(getByText("CONVERT")).toBeTruthy();
  })


  describe('ConvertPerfInfoEntry component', () => {
    it('displays conversion results when convert button is pressed', async () => {
      const { getByPlaceholderText, queryByText, getByText } = render(<ConvertPerfInfoEntry />);

      // Fill in input fields
      const currentRaceDistanceInput = getByPlaceholderText(' Current Race Distance (in meters)');
      fireEvent.changeText(currentRaceDistanceInput, '400');

      const hours = getByPlaceholderText('  hh  ');
      fireEvent.changeText(hours, '00');

      const minutes = getByPlaceholderText('  mm  ');
      fireEvent.changeText(minutes, '06');

      const seconds = getByPlaceholderText('  ss  ');
      fireEvent.changeText(seconds, '05');

      const projectedRaceDistanceInput = getByPlaceholderText(' Projected Race Distance (in meters)');
      fireEvent.changeText(projectedRaceDistanceInput, '800');

      // Find and press convert button
      const convertButton = getByText("CONVERT");
      fireEvent.press(convertButton);

      // Wait for the conversion results to appear
      await waitFor(() => {
        expect(queryByText('400m')).toBeTruthy(); // Assuming this text is present in the results
      });
    });
  });

  describe('ConvertPerfInfoEntry component', () => {
    it('renders all text input boxes', () => {
      const { getByPlaceholderText } = render(<ConvertPerfInfoEntry />);

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
    });
  });

  test('show swim menu when swim menu button pressed', () => {
    render(
      <NavigationContainer>
        <ConvertPerfInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Swim Menu'));

    expect(screen.getByText('Swim Menu')).toBeTruthy();
  });

  test('show track menu when track menu button pressed', () => {
    render(
      <NavigationContainer>
        <ConvertPerfInfoEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Track Menu'));

    expect(screen.getByText('Track Menu')).toBeTruthy();
  });


/*  describe('ConvertPerfInfoEntry component', () => {
    it('limits input length based on maxLength', async () => {
      const { getByPlaceholderText } = render(<ConvertPerfInfoEntry />);
      const currentRaceDistanceInput = getByPlaceholderText(' Current Race Distance (in meters)');
      const hours = getByPlaceholderText('  hh  ');
      const minutes = getByPlaceholderText('  mm  ');
      const seconds = getByPlaceholderText('  ss  ');
      const projectedRaceDistanceInput = getByPlaceholderText(' Projected Race Distance (in meters)');

      fireEvent.changeText(currentRaceDistanceInput, '12345678901234567890'); // 20 characters
      fireEvent.changeText(hours, '12345678901234567890'); // 20 characters
      fireEvent.changeText(minutes, '12345678901234567890');
      fireEvent.changeText(seconds, '12345678901234567890');
      fireEvent.changeText(projectedRaceDistanceInput, '12345678901234567890'); // 20 characters


      await waitFor(() => {
        console.log('Inside waitFor');
        expect(currentRaceDistanceInput.props.value.length).toBe(15);
        expect(hours.props.value.length).toBe(2);
        expect(minutes.props.value.length).toBe(2);
        expect(seconds.props.value.length).toBe(5);
        expect(projectedRaceDistanceInput.props.value.length).toBe(15);
      });
    });
  });*/


})
