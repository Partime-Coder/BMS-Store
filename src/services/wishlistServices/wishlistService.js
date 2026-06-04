import { getWishlist, saveWishlist, getSession } from "../utilityServices/localStorageService";

// ─── Internal helper ─────────────────────────────────────────────
const getUserWishlist = () => {
    const session = getSession();
    if (!session) throw new Error("User not logged in!");

    const wishlistData = getWishlist() || [];
    const userWishlist = wishlistData.find(w => w.userId === session.id);

    return { userWishlist, wishlistData, userId: session.id };
};

// ─── Add to wishlist ─────────────────────────────────────────────
const addToWishlist = (product) => {
    if (!product || !product.id) throw new Error("Product is required!");

    const session = getSession();
    if (!session) throw new Error("User not logged in!");
    const userId = session.id;

    const wishlistData = getWishlist() || [];
    let userWishlist = wishlistData.find(w => w.userId === userId);

    const now = new Date().toISOString();

    if (!userWishlist) {
        userWishlist = {
            userId,
            products: [],
            createdAt: now,
            updatedAt: now,
        };
        wishlistData.push(userWishlist);
    }

    // already in wishlist — do nothing
    const exists = userWishlist.products.find(p => p.productId === product.id);
    if (exists) throw new Error("Product already in wishlist!");

    userWishlist.products.push({
        productId: product.id,
        name: product.title,
        description: product.description,
        price: product.price,
        discountedPrice: product.discountedPrice,
        discountPercentage: product.discountPercentage,
        image: product.thumbnail,
        brand: product.brand,
        category: product.category,
        stock: product.stock,
        inStock: product.inStock,
        createdAt: now,
    });

    userWishlist.updatedAt = now;
    saveWishlist(wishlistData);
    return userWishlist;
};

// ─── Get my wishlist ─────────────────────────────────────────────
const getMyWishlist = () => {
    try {
        const { userWishlist } = getUserWishlist();
        return userWishlist || null;
    } catch {
        return null;
    }
};

// ─── Remove from wishlist ────────────────────────────────────────
const removeFromWishlist = (productId) => {
    if (!productId) throw new Error("Product Id is required!");

    const { userWishlist, wishlistData } = getUserWishlist();
    if (!userWishlist) throw new Error("Wishlist not found!");

    userWishlist.products = userWishlist.products.filter(
        p => p.productId !== productId
    );

    userWishlist.updatedAt = new Date().toISOString();
    saveWishlist(wishlistData);
    return userWishlist;
};

// ─── Check if product is in wishlist ────────────────────────────
const isInWishlist = (productId) => {
    try {
        const { userWishlist } = getUserWishlist();
        if (!userWishlist) return false;
        return userWishlist.products.some(p => p.productId === productId);
    } catch {
        return false;
    }
};

// ─── Move to cart ────────────────────────────────────────────────
const moveToCart = (productId, addToCartFn) => {
    const { userWishlist } = getUserWishlist();
    if (!userWishlist) throw new Error("Wishlist not found!");

    const product = userWishlist.products.find(p => p.productId === productId);
    if (!product) throw new Error("Product not in wishlist!");

    addToCartFn({ id: product.productId, ...product }, 1);
    removeFromWishlist(productId);
};

export {
    getMyWishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    moveToCart,
};