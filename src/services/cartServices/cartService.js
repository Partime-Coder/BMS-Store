import { getCart, getSession, saveCart } from "../utilityServices/localStorageService";


const now = () => {
    const date = new Date();
    return {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString()
    };
};

const getUserCart = () => {
    const session = getSession();
    if (!session) throw new Error("User is not logged in");

    const allCarts = getCart();
    const userCart = allCarts.find(
        cart => cart.userId === session.id && cart.status === "active"
    );

    return userCart || null;
};

const addToCart = (product) => {
    const session = getSession();
    if (!session) throw new Error("User is not logged in");
    if (!product?.id) throw new Error("Product is required");

    const allCarts = getCart();
    const existingCartIndex = allCarts.findIndex(
        cart => cart.userId === session.id && cart.status === "active"
    );

    if (existingCartIndex === -1) {
        const newCart = {
            userId: session.id,
            status: "active",
            items: [
                {
                    productId: product.id,
                    priceSnapshot: product.discountedPrice ?? product.price,
                    productSnapshot: {
                        title: product.title,
                        thumbnail: product.thumbnail,
                        brand: product.brand,
                        category: product.category,
                    },
                    quantity: 1,
                    stockAtTimeOfAdding: product.stock,
                    addedAt: now(),
                }
            ],
            updatedAt: now(),
        };

        allCarts.push(newCart);
        saveCart(allCarts);
        return newCart;
    }

    const userCart = allCarts[existingCartIndex];
    const existingItemIndex = userCart.items.findIndex(
        item => item.productId === product.id
    );

    if (existingItemIndex !== -1) {
        const existingItem = userCart.items[existingItemIndex];
        if (existingItem.quantity >= product.stock) {
            throw new Error("Cannot add more than available stock");
        }
        userCart.items[existingItemIndex].quantity += 1;
    } else {
        userCart.items.push({
            productId: product.id,
            priceSnapshot: product.discountedPrice ?? product.price,
            productSnapshot: {
                title: product.title,
                thumbnail: product.thumbnail,
                brand: product.brand,
                category: product.category,
            },
            quantity: 1,
            stockAtTimeOfAdding: product.stock,
            addedAt: now(),
        });
    }

    userCart.updatedAt = now();
    allCarts[existingCartIndex] = userCart;
    saveCart(allCarts);

    return userCart;
};

const removeFromCart = (productId) => {
    const session = getSession();
    if (!session) throw new Error("User is not logged in");
    if (!productId) throw new Error("Product ID is required");

    const allCarts = getCart();
    const cartIndex = allCarts.findIndex(
        cart => cart.userId === session.id && cart.status === "active"
    );

    if (cartIndex === -1) throw new Error("Cart not found");

    allCarts[cartIndex].items = allCarts[cartIndex].items.filter(
        item => item.productId !== productId
    );
    allCarts[cartIndex].updatedAt = now();

    saveCart(allCarts);
    return allCarts[cartIndex];
};

const increaseQuantity = (productId, stock) => {
    const session = getSession();
    if (!session) throw new Error("User is not logged in");
    if (!productId) throw new Error("Product ID is required");

    const allCarts = getCart();
    const cartIndex = allCarts.findIndex(
        cart => cart.userId === session.id && cart.status === "active"
    );

    if (cartIndex === -1) throw new Error("Cart not found");

    const itemIndex = allCarts[cartIndex].items.findIndex(
        item => item.productId === productId
    );

    if (itemIndex === -1) throw new Error("Item not found in cart");

    const item = allCarts[cartIndex].items[itemIndex];
    if (item.quantity >= stock) throw new Error("Cannot exceed available stock");

    allCarts[cartIndex].items[itemIndex].quantity += 1;
    allCarts[cartIndex].updatedAt = now();

    saveCart(allCarts);
    return allCarts[cartIndex];
};

const decreaseQuantity = (productId) => {
    const session = getSession();
    if (!session) throw new Error("User is not logged in");
    if (!productId) throw new Error("Product ID is required");

    const allCarts = getCart();
    const cartIndex = allCarts.findIndex(
        cart => cart.userId === session.id && cart.status === "active"
    );

    if (cartIndex === -1) throw new Error("Cart not found");

    const itemIndex = allCarts[cartIndex].items.findIndex(
        item => item.productId === productId
    );

    if (itemIndex === -1) throw new Error("Item not found in cart");

    const item = allCarts[cartIndex].items[itemIndex];

    if (item.quantity === 1) {
        allCarts[cartIndex].items = allCarts[cartIndex].items.filter(
            item => item.productId !== productId
        );
    } else {
        allCarts[cartIndex].items[itemIndex].quantity -= 1;
    }

    allCarts[cartIndex].updatedAt = now();
    saveCart(allCarts);
    return allCarts[cartIndex];
};

const clearCart = () => {
    const session = getSession();
    if (!session) throw new Error("User is not logged in");

    const allCarts = getCart();
    const cartIndex = allCarts.findIndex(
        cart => cart.userId === session.id && cart.status === "active"
    );

    if (cartIndex === -1) throw new Error("Cart not found");

    // archive old cart
    allCarts[cartIndex].status = "ordered";
    allCarts[cartIndex].updatedAt = now();

    // fresh active cart
    allCarts.push({
        userId: session.id,
        status: "active",
        items: [],
        updatedAt: now(),
    });

    saveCart(allCarts);
};

const getCartSummary = () => {
    const cart = getUserCart();
    if (!cart || cart.items.length === 0) {
        return { totalItems: 0, totalQuantity: 0, totalPrice: 0 };
    }

    const totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.items.reduce(
        (sum, item) => sum + item.priceSnapshot * item.quantity, 0
    );

    return {
        totalItems: cart.items.length,
        totalQuantity,
        totalPrice: +totalPrice.toFixed(2),
    };
};

const isInCart = (productId) => {
    const cart = getUserCart();
    if (!cart) return false;
    return cart.items.some(item => item.productId === productId);
};

export {
    getUserCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getCartSummary,
    isInCart,
};