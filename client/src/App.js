import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = { data: [] };

    // Esta função é do ciclo de vida do ReactJS. Executada quando os componentes são montados
    async componentDidMount() {
        this.direcionar('/teste');
    }

  renderTableData() {
        console.log('Tabela', this.state.data);
        return this.state.data.map((obra, index) => {
          const [titulo, autor]  = obra;
          return (
              <tr>
                  <td>{titulo}</td>
                  <td>{autor}</td>
              </tr>
          )
      })
  }

  async direcionar(caminho) {
      await fetch(caminho)
          .then(res => {
              return res.json();
          })
          .then(obras => {
              this.setState({data: obras.dados});
          });
  }

  render() {
    return (
        <div>
          <h2>Trabalho de Banco de Dados</h2>
          <div className="row">
            <div className="botoes">
              <h2>Consultas pré definidas</h2>
                <button onClick={texto => this.direcionar(texto='/teste')}>Teste de Consulta</button>
                <button onClick={texto => this.direcionar(texto='/consum')}>Todas as obras em ordem alfabética por título</button>
                <button onClick={texto => this.direcionar(texto='/consdois')}>Mostra a quantidade de obras no acervo</button>
                <button onClick={texto => this.direcionar(texto='/constres')}>Mostra a quantidade de clientes da biblioteca</button>
                <button onClick={texto => this.direcionar(texto='/consQuatro')}>Mostra os empréstimos atuais de determinado cliente</button>
                <button onClick={texto => this.direcionar(texto='/consCinco')}>Mostra todos os títulos de determinado autor</button>
                <button onClick={texto => this.direcionar(texto='/consSeis')}>Mostra qual emprestimo gerou o bloqueio do cliente</button>
                <button onClick={texto => this.direcionar(texto='/consSete')}>Todos os clientes e funcionários</button>
            </div>
            <div className="resultado">
                {React.createElement("h2", null, "Acervo")}
                <table>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
