import { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import {

  Container,
  Row,
  Col



}


from 'reactstrap';
import Cards from './components/Cards.jsx';
import FormItem from './components/Form';
import './App.css';

class App extends Component {

  constructor() {
    super();


    this.state = {
      titulo: '',
      conteudo: '',
      lists: []
    }

  }


  adicionaTarefa() {

    if (this.state.titulo && this.state.conteudo) {
      this.setState({
        titulo: '',
        conteudo: '', ['lists']: [...this.state.lists,
        {
          titulo: this.state.titulo,
          conteudo: this.state.conteudo


        }]

      
      })

      
    }
  }

  

  removeItemIndex(index){
    const newListItems = this.state.lists.filter((item, indexList)=> indexList != index );

    setTimeout(()=>{
      this.setState({...this.state, ['lists']: [...newListItems]});
    },400)
  }
  removeItem(event, index){
    const item = event.target.parentElement.parentElement.parentElement;
    
    item.classList.add('delete');
    this.removeItemIndex(index);
  
  }
 
  render() {
    return (
      <>

        <Container style={{ marginTop: '70px' }}>
          <Row>
            <Col>
             <FormItem 
             setStateItems={this.setState.bind(this)} 
             adicionarTafera={this.adicionaTarefa.bind(this)} 
             stateComponent={this.state}
             titulo={this.state.titulo}
             conteudo={this.state.conteudo}
             />
            </Col>
            <Col >
              <Row>
                <Cards lists={this.state.lists} removeItem={this.removeItem.bind(this)}  />
              
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

}

export default App;
