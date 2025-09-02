import { render, screen } from '@testing-library/react';
import App from './App';

test('renders título da lista de tarefas', () => {
  render(<App />);
  const titleElement = screen.getByText(/lista de tarefas/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input para nova tarefa', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/nova tarefa/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders botão adicionar', () => {
  render(<App />);
  const buttonElement = screen.getByText(/adicionar/i);
  expect(buttonElement).toBeInTheDocument();
});

