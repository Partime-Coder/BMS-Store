import { nanoid } from "nanoid";
import { getWishlist, saveWishlist } from "../utilityServices/localStorageService";

const getWishlist = () => {
    const wishlist = getWishlist()
    return wishlist;
};

const addWishlist = ({ userId, productId }) => {
    if (!userId) {
        throw new Error("User ID is required");
    };
    if (!productId) {
        throw new Error("Product ID is required");
    };
    const now = new Date();
    const newWishlist = {
        id: nanoid(),
        userId: userId,
        productId: productId,
        createdAt: {
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString()
        },
    }
    saveWishlist(newWishlist);
    return newWishlist;
};

const removeWishlist = (id) => {
    if (!id) {
        throw new Error("ID is required");
    };
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    saveWishlist(updatedWishlist);
    return updatedWishlist;
};

export {addWishlist, removeWishlist}