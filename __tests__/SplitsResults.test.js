import React from 'react';
import { render, screen, fireEvent, getByText, toBe, queryAllByText, getByPlaceholderText } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import SplitsResults from '../SplitsResults.js';
import { formatResult } from '../SplitsResults.js';

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

describe('SplitsResults', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SplitsResults />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('SplitsResults component', () => {
  it('displays the main result time correctly', () => {
    const race = 1600;
    const hours = 0;
    const minutes = 5;
    const seconds = 30;
    const desiredSplitVar = 400;

    const { getByText } = render(
      <SplitsResults race={race} hours={hours} minutes={minutes} seconds={seconds} desiredSplitVar={desiredSplitVar} />
    );

    const currentRaceTimeVar = hours*3600 + minutes*60 + seconds;
    const mySplit = desiredSplitVar/race*(currentRaceTimeVar);
    const expectedMainResult = formatResult(mySplit);
    const elements = screen.queryAllByText(expectedMainResult);

    expect(elements.length).toBeGreaterThan(0);
  });
});

describe('SplitsResults component', () => {
  it('displays the distance clarifier correctly', () => {
    const { getByText } = render(
      <SplitsResults race={1600} hours={0} minutes={6} seconds={0} desiredSplitVar={600} />
    );

    const distanceClarifier1 = getByText(' For 600m (2 times) ');
    const distanceClarifier2 = getByText(' 1:30.00 for remaining 400m ');

    expect(distanceClarifier1).toBeTruthy();
    expect(distanceClarifier2).toBeTruthy();
  });
});

  it('table appears', () => {
    const { getByText } = render(<SplitsResults />);
    expect(getByText("400m")).toBeTruthy();
  });


  describe('formatResult function', () => {
    it('returns "hh:mm:ss" for invalid input', () => {
      expect(formatResult(undefined)).toBe('hh:mm:ss');
      expect(formatResult(null)).toBe('hh:mm:ss');
      expect(formatResult('abc')).toBe('hh:mm:ss');
    });

    it('returns "hh:mm:ss" if timeInSeconds is out of range', () => {
      expect(formatResult(-1)).toBe('hh:mm:ss');
      expect(formatResult(362400)).toBe('hh:mm:ss');
    });

    it('correctly formats time less than 60 seconds', () => {
      expect(formatResult(30)).toBe('30.00');
      expect(formatResult(59.99)).toBe('59.99');
    });

    it('correctly formats time between 60 seconds and 1 hour', () => {
      expect(formatResult(65)).toBe('1:05.00');
      expect(formatResult(3600)).toBe('1:00:00.00');
    });

    it('correctly formats time greater than 1 hour', () => {
      expect(formatResult(3665)).toBe('1:01:05.00');
      expect(formatResult(3666)).toBe('1:01:06.00');
      expect(formatResult(4200)).toBe('1:10:00.00');
      expect(formatResult(4210.23)).toBe('1:10:10.23')
      expect(formatResult(7200)).toBe('2:00:00.00');
    });
  });


})
