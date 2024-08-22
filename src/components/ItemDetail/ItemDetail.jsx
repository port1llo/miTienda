import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({products}) => {
const {id, name, description, price, stock, image} = products;
    return (
        <Card>
          <Card.Header>{name}</Card.Header>
          <Card.Img variant="top" src={image}/> 
          <Card.Body>
            <Card.Title>${price}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      );
    }
    
export default ItemDetail;

