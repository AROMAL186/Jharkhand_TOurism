
import { createContext, useContext, useState } from 'react';

// Define the shape of a cart item
interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

// Define the shape of the cart context
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  clearCart: () => void;
  // TODO: Implement remove from cart and update quantity
}

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Create the cart provider component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        // If the item is already in the cart, increase its quantity
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
