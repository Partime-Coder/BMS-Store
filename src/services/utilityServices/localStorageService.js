export const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getSession = () => {
  const session = localStorage.getItem("session");
  return session ? JSON.parse(session) : null;
};

export const saveSession = (user) => {
  localStorage.setItem("session", JSON.stringify(user));
};

export const clearSession = () => {
  localStorage.removeItem("session");
};

export const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const getWishlist = () => {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
};

export const saveWishlist = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const getAddress = () => {
  const address = localStorage.getItem("address");
  return address ? JSON.parse(address): null;
};

export const saveAddress = (address) => {
  localStorage.setItem("address", JSON.stringify(address));
};
