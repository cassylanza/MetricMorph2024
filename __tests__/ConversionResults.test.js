import React from 'react';
import { render, screen, fireEvent, getByText, toBe, queryAllByText, getByPlaceholderText } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Actions } from 'react-native-router-flux'; // Mocking react-native-router-flux
import '@testing-library/jest-dom';
import ConversionResults from '../ConversionResults.js';
import { formatResult } from '../ConversionResults.js';

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

describe('ConversionResults', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ConversionResults />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('ConversionResults component', () => {
  it('displays the main result time correctly', () => {
    const race = 1600;
    const hours = 0;
    const minutes = 6;
    const seconds = 3;
    const desiredRaceVar = 1609;

    const { getByText } = render(
      <ConversionResults race={race} hours={hours} minutes={minutes} seconds={seconds} desiredRaceVar={desiredRaceVar} />
    );

    const currentRaceTimeVar = hours*3600 + minutes*60 + seconds;
    const mySplit = currentRaceTimeVar * (desiredRaceVar / race) ** 1.06;
    const expectedMainResult = formatResult(mySplit);
    const elements = screen.queryAllByText(expectedMainResult);

    expect(elements.length).toBeGreaterThan(0);
  });
});


describe('ConversionResults component', () => {
  it('displays the distance clarifier correctly', () => {
    const { getByText } = render(
      <ConversionResults race={400} hours={0} minutes={1} seconds={3} desiredRaceVar={500} />
    );

    const distanceClarifier = getByText('For 500m');

    expect(distanceClarifier).toBeTruthy();
  });
});

  it('table appears', () => {
    const { getByText } = render(<ConversionResults />);
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
      expect(formatResult(7200)).toBe('2:00:00.00');
    });
  });


})
