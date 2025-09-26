import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
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

describe('Routes', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Routes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('navigates to SwimMenu1 component', () => {
    const { getByText, getByTestId } = render(<Routes />);
    const button = getByText('Swim Menu');
    fireEvent.click(button);
    const swimMenuTitle = getByTestId('SWIM');
    expect(swimMenuTitle).toBeInTheDocument();
    /*const component = renderer.create(<Routes />);
    const instance = component.getInstance();
    instance.handleNavigate('swimmenu1');
    expect(Actions.swimmenu1).toHaveBeenCalled();*/
  });

  /*it('navigates to TrackMenu1 component', () => {
    const component = renderer.create(<Routes />);
    const instance = component.getInstance();
    instance.handleNavigate('trackmenu1');
    expect(Actions.trackmenu1).toHaveBeenCalled();
  });*/

  // Additional tests can be added for specific behaviors of Routes component
});
