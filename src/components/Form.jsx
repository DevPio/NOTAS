import React, { Component } from 'react';
import {

    Form,
    FormGroup,
    Label,
    Input,
    Button
  
  
  
  }
  
  
    from 'reactstrap';
class FormItem extends Component {

    constructor(props){
        super(props);

        
    }
    
    render() { 
        return (
            <Form>
            <FormGroup>
              <Label>Título</Label>
              <Input
                type='text'
                value={this.props.titulo}
                placeholder='Digite o seu título.'
                onChange={event => this.props.setStateItems({ ...this.props.stateComponent, ['titulo']: event.target.value })}

              />
            </FormGroup>

            <FormGroup>
              <Label>Escreva a sua nota.</Label>
              <Input
                type='textarea'
                style={{ minHeight: '400px' }}
                placeholder='Digite o seu título.'
                value={this.props.conteudo}
                onChange={event => this.props.setStateItems({ ...this.props.stateComponent, ['conteudo']: event.target.value })}
              />
            </FormGroup>

            <Button onClick={this.props.adicionarTafera}>Adicionar</Button>



          </Form>
          );
    }
}


 
export default FormItem;