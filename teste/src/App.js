import logo from './logo.svg';
import './App.css';
import ListaProdutos from './Componentes/ListaProdutos';


const produtos = [
  {
    nome: "Teste",
    preco: 10.00
  },
  {
    nome: "Teste2",
    preco: 12.00
  },
  {
    nome: "Teste3",
    preco: 15.00
  }
];

function App() {
  return (
    <div>
      <h1>Lista Produtos</h1>
      <ListaProdutos produtos={produtos}></ListaProdutos>

    </div>
  );
}

export default App;
