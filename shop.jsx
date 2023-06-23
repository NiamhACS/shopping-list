// provide a button and use onClick to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// list out the Cart items in another column
function ShoppingCart({ availableItems }) {
  const { Button } = ReactBootstrap;

  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);

  const moveToCart = (e) => {
    let [name, num] = e.target.innerHTML.split(":"); // innerHTML should be format name:3
    // use newStock = stock.map to find "name" and decrease number in stock by 1
    // only if instock is >=  do we move item to Cart and update stock
    let newStock = stock.map((item, index) => {
      if (item.name == name && num > 0) {
        item.instock--;
        
        setCart([...cart, name]);
        console.log(cart);
      }
      return item;
    });
    setStock(newStock);
  };

  // No need to update code beyond this point
  const availableItemsButtons = availableItems.map((item, index) => {
    return (
      <Button id={item.product} key={index} onClick={moveToCart}>
        {item.product}:{item.inStock}
      </Button>
    );
  });

  // Note: React requires a single Parent element, that's why we use <>
  return (
    <>
      <ul key="stock" style={{ listStyleType: "none" }}>
        {availableItemsButtons}
      </ul>
      <h1>Shopping Cart</h1>
      <Cart cartitems={cart}> Cart Items</Cart>
    </>
  );
}

function Cart({ cartitems }) {
  const { Button } = ReactBootstrap;
  console.log("rendering Cart");
  const availableItemsButtons = cartitems.map((item, index) => {
    return (
      <Button id={item.product} key={index}>
        {item.product}
      </Button>
    );
  });
  return (
    <ul id="cart-items" style={{ listStyleType: "none" }} key="cart">
      {availableItemsButtons}
    </ul>
  );
}

const availableItems = [
  { product: "Jacket", inStock: 2 },
  { product: "Pants", inStock: 3 },
  { product: "Scarf", inStock: 0 },
  { product: "Pajamas", inStock: 3 },
  { product: "Shirt", inStock: 1 },
];

ReactDOM.render(
  <ShoppingCart availableItems={availableItems} />,
  document.getElementById("root")
);
