import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item   = ({product}) => {
    return (
      <>
          <Card style={{ width: '19rem' }} className='m-2'>
            <Card.Img variant="top" src={product.price} />
            <Card.Body>
              <Card.Title>{product.name} </Card.Title>
              <Card.Text> {product.description} </Card.Text>
              <Card.Text> {product.price}€ </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          {/*<div>{product.name} </div>;
            <div>{product.description} </div>;
          <div>{product.price} </div>;
          {/*<img src={product.image} alt="">  </img>;*/}
      </> 
    );
};
export default Item;