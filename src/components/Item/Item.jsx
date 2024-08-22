import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item   = ({product}) => {
    return (
      <>
          <Card style={{ width: '19rem' }} className='m-2'>
            <Card.Img variant="top" src={product.price} />
            <Card.Body>
              <Card.Title>{product.name} </Card.Title>
              <Card.Text> {product.price}€ </Card.Text>
              <Link to={`/product/${product.id}`}> 
                <Button  variant="primary">Details</Button>
              </Link>
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