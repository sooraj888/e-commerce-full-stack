import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text, Button } from 'react-native';
import App from '../App';

test('App renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to React Native')).toBeTruthy(); // adjust text if needed
});

test('true is true', () => {
  expect(true).toBe(true);
});

test('false is false', () => {
  expect(false).toBe(false);
});

test('renders a Text component', () => {
  const { getByText } = render(<Text>Hello World</Text>);
  expect(getByText('Hello World')).toBeTruthy();
});

test('button click works', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(
    <Button title="Click Me" onPress={onPressMock} />,
  );
  fireEvent.press(getByText('Click Me'));
  expect(onPressMock).toHaveBeenCalled();
});
