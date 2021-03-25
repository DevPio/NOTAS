import {Component} from 'react';
import 

{
    Card,
    CardTitle,
    CardText,
    Col

}



from 'reactstrap';
import {GiTrashCan} from 'react-icons/gi';

class Cards extends Component {
    constructor(){
        super();
    }
    

  
    render(){
        return this.props.lists.map((item, index)=> (
            <Col key={item.titulo + index} style={{marginTop:'30px'}}>
                <Card style={{width:'200px'}} body>
                    <CardTitle tag='h5'>{item['titulo']}</CardTitle>
                    <CardText>{item['conteudo']}</CardText>
                    <CardText onClick={event=> this.props.removeItem(event,index)} style={{cursor:'pointer'}}>{GiTrashCan()}</CardText>

                    
                </Card>
            </Col>
        ))
        
    }

}


export default Cards;
