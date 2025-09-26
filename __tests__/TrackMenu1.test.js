import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import Routes from '../Routes'; // Importing the component to test
import SwimMenu1 from '../SwimMenu1'; // Importing SwimMenu1 component
import TrackMenu1 from '../TrackMenu1'; // Importing TrackMenu1 component
import { FontAwesomeIcon }  from '@fortawesome/react-native-fontawesome'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons/faPersonSwimming'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'

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

describe('TrackMenu1', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TrackMenu1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('first menu option appears', () => {
    const { getByText } = render(<TrackMenu1 />);
    expect(getByText(" CONVERT RACE ")).toBeTruthy();
  });

  it('second menu option appears', () => {
    const { getByText } = render(<TrackMenu1 />);
    expect(getByText(" SPLITS ")).toBeTruthy();
  });

  it('third menu option appears', () => {
    const { getByText } = render(<TrackMenu1 />);
    expect(getByText(" % EFFORT ")).toBeTruthy();
  });

  it('task bar swim button appears', () => {
    const { getByText } = render(<TrackMenu1 />);
    expect(getByText("Swim Menu")).toBeTruthy();
  });

  it('task bar track button appears', () => {
    const { getByText } = render(<TrackMenu1 />);
    expect(getByText("Track Menu")).toBeTruthy();
  });

  test('shows conversion info entry when Convert Race is pressed', () => {
    render(
      <NavigationContainer>
        <TrackMenu1 />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText(' CONVERT RACE '));

    expect(screen.getByText(' CONVERT RACE ')).toBeTruthy();
  });

  test('shows splits info entry when Splits is pressed', () => {
    render(
      <NavigationContainer>
        <TrackMenu1 />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText(' SPLITS '));

    expect(screen.getByText(' SPLITS ')).toBeTruthy();
  });

  test('shows % effort info entry when % EFFORT is pressed', () => {
    render(
      <NavigationContainer>
        <TrackMenu1 />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('% Effort'));

    expect(screen.getByText('Effort')).toBeTruthy();
  });

  test('show swim menu when swim menu button pressed', () => {
    render(
      <NavigationContainer>
        <TrackMenu1 />
      </NavigationContainer>
    )

    fireEvent.press(screen.getByText('Swim Menu'));

    expect(screen.getByText('Swim Menu')).toBeTruthy();
  })

  describe('TrackMenu1', () => {
  it('renders swim icon', () => {
    const { getByA11yRole } = render(<TrackMenu1 />);
    const swimIcon = getByA11yRole('image');
    expect(swimIcon.props.style[1].color).toBe('gray');
  });

  it('renders track icon', () => {
    const { getByA11yRole } = render(<TrackMenu1 />);
    const trackIcon = getByA11yRole('image');
    expect(trackIcon.props.style[1].color).toBe('#00b3b3');
  });
});


})
