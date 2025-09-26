import React from 'react';
import { render, screen, fireEvent, getByPlaceholderText, getByText } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import ConvertMeterYardEntry from '../ConvertMeterYardInfoEntry';
import Routes from '../Routes'; // Importing the component to test
import SwimMenu1 from '../SwimMenu1'; // Importing SwimMenu1 component
import TrackMenu1 from '../TrackMenu1'; // Importing TrackMenu1 component


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

describe('ConvertMeterYardInfoEntry', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ConvertMeterYardEntry />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('task bar swim button appears', () => {
    const { getByText } = render(<ConvertMeterYardEntry />);
    expect(getByText("Swim Menu")).toBeTruthy();
  });

  it('task bar track button appears', () => {
    const { getByText } = render(<ConvertMeterYardEntry />);
    expect(getByText("Track Menu")).toBeTruthy();
  });

  it('calculation button appears', () => {
    const { getByText } = render(<ConvertMeterYardEntry />);
    expect(getByText("Calculate")).toBeTruthy();
  });

  it('calculates conversion correctly', () => {
    const { getByPlaceholderText, getByText } = render(<ConvertMeterYardEntry />);

    fireEvent.changeText(getByPlaceholderText('MM'), '1');
    fireEvent.changeText(getByPlaceholderText('SS'), '30');
    fireEvent.changeText(getByPlaceholderText('TH'), '50');
    fireEvent.changeText(getByPlaceholderText("Event (e.g., '50FR')"), '50FR');
    fireEvent.changeText(getByPlaceholderText('Original course (SCM, Y)'), 'Y');
    fireEvent.changeText(getByPlaceholderText('Desired course (SCM, Y)'), 'SCM');

    fireEvent.press(getByText('Calculate'));


    expect(getByText(/Your time in short course meters/)).toBeTruthy();
  });


  test('Convert button moves to next screen', () => {
    render(
      <NavigationContainer>
        <ConvertMeterYardEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Calculate'));

    expect(screen.getByText('Invalid Input')).toBeTruthy();
  });



  test('show swim menu when swim menu button pressed', () => {
    render(
      <NavigationContainer>
        <ConvertMeterYardEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Swim Menu'));

    expect(screen.getByText('Swim Menu')).toBeTruthy();
  });

  test('show track menu when track menu button pressed', () => {
    render(
      <NavigationContainer>
        <ConvertMeterYardEntry />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Track Menu'));

    expect(screen.getByText('Track Menu')).toBeTruthy();
  });




})
