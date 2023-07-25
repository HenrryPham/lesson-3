function Products(props) {
    const { productName, price, discount, chip, sizeScreen, ram, rom } = props;
    console.log(props);
  
    return (
      <div className="product">
        <h3>Name: {productName}</h3>
        <p>Price: {price}</p>
        <p>Discount: {discount}</p>
        <p>Chip: {chip}</p>
        <p>Size: {sizeScreen}</p>
        <p>Ram: {ram}</p>
        <p>Rom: {rom}</p>
      </div>
    );
  }

  export default Products