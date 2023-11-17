import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abobora.png';
import aron from '../../assets/frutas/aron.png';

const cesta = {
  topo: {
    titulo: "Detalhe do produto",
  },
  detalhes: {
    nome: "Pacotes de Serviços",
    logoFazenda: logo,
    nomeFazenda: "Plano mensal",
    descricao: "Tecnicos selecionados cuidadosamente da empresa direto para resolver seus problemas",
    preco: "R$ 50,00 / mês",
    botao: "Assinar",
  },
  itens: {
    titulo: "Tecnicos disponíveis",
    lista: [
      {
        nome: "Paulo Mathias",
        imagem: tomate,
      },
      {
        nome: "Pedro Muzy",
        imagem: brocolis,
      },
      {
        nome: "Ruadiney Silva",
        imagem: batata,
      },
      {
        nome: "Welisdoon da Costa",
        imagem: pepino,
      },
      {
        nome: "Sidney Cunha",
        imagem: abobora,
      },
      {
        nome: "Arowilmerson Sousa",
        imagem: aron,
      },
    ]
  }
}

export default cesta;