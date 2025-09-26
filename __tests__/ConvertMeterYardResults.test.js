import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import ConvertMeterYardResults from '../ConvertMeterYardResults.js';

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

describe('ConvertMeterYardResults', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ConvertMeterYardResults />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('result time shows', () => {
    const { getByText } = render(<ConvertMeterYardResults />);
    expect(getByText("MM:SS:TH")).toBeTruthy();
  });



  test('show swim menu when swim menu button pressed', () => {
    render(
      <NavigationContainer>
        <ConvertMeterYardResults />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Swim Menu'));

    expect(screen.getByText('Swim Menu')).toBeTruthy();
  });

  test('show track menu when track menu button pressed', () => {
    render(
      <NavigationContainer>
        <ConvertMeterYardResults />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Track Menu'));

    expect(screen.getByText('Track Menu')).toBeTruthy();
  });




})
