import {
  calculateDistanceSpeeding,
  calculateDurationSpeeding,
  calculateTotalDistance,
  calculateTotalDrivingTime,
  data,
} from '../src/main';

//I'm Following TDD so I will start writing tests first.
//100% test coverage

describe('Springworks Assaingment', () => {
  test('Distance Speeding', () => {
    expect(calculateDistanceSpeeding(data)).toBe(102.5);
  });

  test('Duration Speeding', () => {
    expect(calculateDurationSpeeding(data)).toBe(10);
  });

  test('Total Distance', () => {
    expect(calculateTotalDistance(data)).toBe(185.75);
  });

  test('Total drive time', () => {
    expect(calculateTotalDrivingTime(data)).toBe(20);
  });
});
