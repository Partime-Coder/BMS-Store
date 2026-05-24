import { getCart, getSession, saveCart } from "../utilityServices/localStorageService";

const getUserCart = () => {
    const session = getSession();
    if (!session) throw new Error ("User not logged in!");

    const cartData = getCart() || [];
    const userCart = cartData.find(cart => cart.userId === session.id);

    return { userCart, cartData, userId: session.id };
};

const addToCart = (product, quantity = 1) => {
    if (!product || !product.id) {
        throw new Error("Product is required!");
    }

    const session = getSession();
    if (!session) throw new Error("User not logged in!");
    const userId = session.id;

    const cartData = getCart() || [];
    let userCart = cartData.find(cart => cart.userId === userId);

    const now = new Date().toISOString();

    if (!userCart) {
        userCart = {
            userId,
            status: "active",
            products: [],
            createdAt: now,
            updatedAt: now,
        };
        cartData.push(userCart);
    }

    const existingProduct = userCart.products.find(
        p => p.productId === product.id
    );

    if (existingProduct) {
        existingProduct.quantity += quantity;
        existingProduct.updatedAt = now;
    } else {
        userCart.products.push({
            productId: product.id,
            name: product.name,
            price: product.price,       
            image: product.image,
            quantity,
            createdAt: now,
            updatedAt: now,
        });
    }

    userCart.updatedAt = now;
    saveCart(cartData);
    return userCart;
};

const getMyCart = () => {
    const { userCart } = getUserCart();
    return userCart || null;   
};


const removeFromCart = (productId) => {
    if (!productId) throw new Error("Product Id is required!");

    const { userCart, cartData } = getUserCart();
    if (!userCart) throw new Error("Cart not found!");

    userCart.products = userCart.products.filter(
        p => p.productId !== productId
    );

    userCart.updatedAt = new Date().toISOString();
    saveCart(cartData);
    return userCart;
};


const updateQuantity = (productId, quantity) => {
    if (!productId) throw new Error("Product Id is required!");
    if (quantity < 1) throw new Error("Quantity must be at least 1!");

    const { userCart, cartData } = getUserCart();
    if (!userCart) throw new Error("Cart not found!");

    const product = userCart.products.find(p => p.productId === productId);
    if (!product) throw new Error("Product not in cart!");

    product.quantity = quantity;
    product.updatedAt = new Date().toISOString();

    userCart.updatedAt = new Date().toISOString();
    saveCart(cartData);
    return userCart;
};


const clearCart = () => {
    const { userCart, cartData } = getUserCart();
    if (!userCart) throw new Error("Cart not found!");

    userCart.products = [];
    userCart.status = "ordered";
    userCart.updatedAt = new Date().toISOString();

    saveCart(cartData);
    return userCart;
};


const getCartSummary = () => {
    const { userCart } = getUserCart();
    if (!userCart || userCart.products.length === 0) {
        return { totalItems: 0, totalPrice: 0, products: [] };
    }

    const totalItems = userCart.products.reduce(
        (sum, p) => sum + p.quantity, 0
    );
    const totalPrice = userCart.products.reduce(
        (sum, p) => sum + p.price * p.quantity, 0
    );

    return {
        totalItems,
        totalPrice: parseFloat(totalPrice.toFixed(2)),
        products: userCart.products,
    };
};

export {
    addToCart,
    getMyCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartSummary,
};

