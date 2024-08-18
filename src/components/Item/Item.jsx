const Item   = ({product}) => {
    return (
    <>
      <div>{product.name} </div>;
        <div>{product.description} </div>;
       <div>{product.price} </div>;
       {/*<img src={product.image} alt="">  </img>;*/}
           
    </> 
    )
};
export default Item;