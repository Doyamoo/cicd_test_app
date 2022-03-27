import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import App from './App';

test('空白の時は「名無し」を出力する', () => {
  render(<App />);

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: '' },
  });
  fireEvent.click(screen.getByText('Click'))

  expect(screen.getByText(/名無し/)).toBeInTheDocument()
});

test('11文字以上の時は「ERROR!!」を出力する', () => {
  render(<App />);

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: '12345123456' },
  });
  fireEvent.click(screen.getByText('Click'))

  expect(screen.getByText(/ERROR!!/)).toBeInTheDocument()
});

test('1文字以上10文字以内の時はそのまま出力する', () => {
  render(<App />);

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'テストネーム' },
  });
  fireEvent.click(screen.getByText('Click'))

  expect(screen.getByText(/テストネーム/)).toBeInTheDocument()
});

test('文字数を出力する', () => {
  render(<App />);

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'テストネーム文字数' },
  });
  fireEvent.click(screen.getByText('Click'))

  expect(screen.getByText(/9/)).toBeInTheDocument()
});
