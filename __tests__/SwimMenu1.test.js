import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
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

describe('SwimMenu1', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SwimMenu1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('first menu option appears', () => {
    const { getByText } = render(<SwimMenu1 />);
    expect(getByText("Meter/yard conversion")).toBeTruthy();
  });

  it('second menu option appears', () => {
    const { getByText } = render(<SwimMenu1 />);
    expect(getByText(" 6x100 projection ")).toBeTruthy();
  });

  it('third menu option appears', () => {
    const { getByText } = render(<SwimMenu1 />);
    expect(getByText("Race projection")).toBeTruthy();
  });

  it('task bar swim button appears', () => {
    const { getByText } = render(<SwimMenu1 />);
    expect(getByText("Swim Menu")).toBeTruthy();
  });

  it('task bar track button appears', () => {
    const { getByText } = render(<SwimMenu1 />);
    expect(getByText("Track Menu")).toBeTruthy();
  });

  test('shows conversion info entry when meter/yard is pressed', () => {
    render(
      <NavigationContainer>
        <SwimMenu1 />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Meter/yard conversion'));

    expect(screen.getByText('Meter/yard conversion')).toBeTruthy();
  });

  test('shows when 6x100 is pressed', () => {
    render(
      <NavigationContainer>
        <SwimMenu1 />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText(' 6x100 projection '));

    expect(screen.getByText(' 6x100 projection ')).toBeTruthy();
  });

  test('shows when race projection is pressed', () => {
    render(
      <NavigationContainer>
        <SwimMenu1 />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Race projection'));

    expect(screen.getByText('Race projection')).toBeTruthy();
  });

  test('show track menu when track menu button pressed', () => {
    render(
      <NavigationContainer>
        <SwimMenu1 />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Track Menu'));

    expect(screen.getByText('Track Menu')).toBeTruthy();
  })


})
