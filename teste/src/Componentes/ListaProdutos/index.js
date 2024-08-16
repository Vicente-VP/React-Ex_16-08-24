import Produto from '../Produto';

const listaProdutos = ({produtos}) => {
    return (
        <div>
            {produtos.map( (p)=> (<Produto valor={p}></Produto>) )}
        </div>
    );
};

export default listaProdutos;