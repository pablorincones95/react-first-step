import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Nintendo switch",
    quantity: 1,
  },
  {
    productName: "Nintendo gamecube",
    quantity: 2,
  },
  {
    productName: "Super smash",
    quantity: 3,
  },
];

export function FirstStepApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map((item) => {
        return (
          <ItemCounter
            key={item.productName}
            name={item.productName}
            quantity={item.quantity}
          />
        );
      })}
    </>
  );
}
