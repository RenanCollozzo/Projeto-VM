import React, { Component } from 'react';
import './pure-min.css';
import './side-menu.css';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';

class App extends Component {

    constructor () {
        super();
         this.state = {lista : [],nome:'',email:'',senha:''};
         this.enviaForm = this.enviaForm.bind(this);
         this.setNome = this.setNome.bind(this);
         this.setEmail = this.setEmail.bind(this);
         this.setSenha = this.setSenha.bind(this);
            };
          }

    componetnDidMount() {
      cosole.log("didMout");
      $.ajaz({
        url:"http://localhost:8080/api/imagem".
        dataTyoe:'json'
        sucess:function(resposta){
          console.log("chegou uma resposta");
          this.setState({lista:resposta});
        } .bind(this)
      }
      );
    }

      enviaForm(evento){
  evento.preventDefault();
  $.ajax({
    url:"http//localhost:8080/api/autores",
    contentType: 'application/json',
    dataType:'json',
    type:'post',
    data: JSON.stringify({nome:'',email:'',senha:''}),
    success: function(resposta){
      console.log("enviado com sucesso");
    },
    error: function(resposta){
        console.log("erro");
    }

     setNome(evento){
      this.setState({nome:evento.target.value});
      }

    setEmail(evento){
      this.setState({email:evento.target.value});
      }

    setSenha(evento){
     this.setState({senha:evento.target.value});
      }

  render() {
  console.log("render");
  return (
    React.createElement("div",{id:"layout"},React.createElement("a",{}))
    <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
        </a>
        <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Imagem</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Instancia</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Volume</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Rede</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Configuração</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Revisao</a></li>

                
            </ul>
        </div>
    </div>

        div id="main">
        <div className="header">
          <h1>Cadastro de Autores</h1>
       </div>
         <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome}/>                                              
                <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail}/>                                              
                <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha}/>                                                  
          <div className="pure-control-group">                                  
                   <label></label>
           <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
          </div>
          </form>
            </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.lista.map(function(autor){
                        return (
                          <tr key={autor.id}>
                            <td>{autor.nome}</td>
                            <td>{autor.email}</td>
                         </tr>
                          );
                       })
                      }
                  </tbody>
                </table> 
              </div>             
            </div>
          </div>            


</div>     
    );
  }
}

export default App;