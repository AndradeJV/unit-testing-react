import { render, screen } from '@testing-library/react';
import Menu from './index';


test('Deve renderizar um link para a página inicial', () => {
  render(<Menu />);

  const linkPaginaIncial = screen.getByText('Inicial');

  expect(linkPaginaIncial).toBeInTheDocument();
});


test('Deve renderizar uma lista de links para a página inicial', () => {
  render(<Menu />);

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(4);
});

test('Não deve renderizar uma lista de links para a página inicial', () => {
  render(<Menu />);

  const linkExtrado = screen.queryByText('Extrato');
  expect(linkExtrado).not.toBeInTheDocument();
});


test('Deve renderizar uma lista de link com a classe link', () => {
  render(<Menu />);

  const links = screen.getAllByRole('link');

  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
})