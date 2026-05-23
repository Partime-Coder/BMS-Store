import { nanoid } from "nanoid";
import { clearSession, getSession, getUsers, saveSession, saveUsers } from "../utilityServices/localStorageService";


const registerUser = (userData) => {

    if (!userData) {
        throw new Error("User data is required");
    }

    const username = userData.username?.trim();
    const firstName = userData.firstName?.trim();
    const lastName = userData.lastName?.trim();
    const email = userData.email?.trim().toLowerCase();
    const password = userData.password;

    if (!username) {
        throw new Error("Username required");
    }

    if (!firstName || !lastName) {
        throw new Error("User full name required");
    }

    if (!email || !password) {
        throw new Error("Email and password required");
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");
    }

    const users = getUsers();

    if (!users) {
        throw new Error("GetUsers failed to load users data!");
    }

    const emailAlreadyExists = users.some(
        user => user.email === email
    );

    if (emailAlreadyExists) {
        throw new Error("Email already exists!");
    }

    const now = new Date();

    const newUser = {
        id: nanoid(10),
        username,
        firstName,
        lastName,
        email,
        password,
        createdAt: {
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString()
        },
        updatedAt: null
    };

    users.push(newUser);

    saveUsers(users);

    return newUser;
};

const loginUser = ({ email, password: inputPassword }) => {

    if (!email || !email.trim()) {
        throw new Error("Email required");
    }

    if (!inputPassword || !inputPassword.trim()) {
        throw new Error("Password required");
    }
    const users = getUsers();
    if (!users) {
        throw new Error("GetUsers failed to load users data!");
    }
    const user = users.find((user) => user.email === email);

    if (!user) {
        throw new Error("User not found");
    }

    if (user.password !== inputPassword) {
        throw new Error("Invalid user password! ");
    }

    const { password, ...userDetails } = user;

    saveSession(userDetails);
    return userDetails;
};
const logoutUser = () => {

    clearSession();

};
const getCurrentUser = () => {

    const user = getSession();

    return user;
};
const updateUserDetails = (updatedData) => {
    const session = getSession();
    if (!session) {
        throw new Error("User is not loggedIn!");
    };
    const users = getUsers();
    if (!users) {
        throw new Error("Something went wrong while loading users data!");
    };
    const now = new Date();
    const updatedUsers = users.map((user) => (user.id === session.id) ? {
        ...user,
        username: updatedData.username?.trim() || user.username,
        firstName: updatedData.firstName?.trim() || user.firstName,
        lastName: updatedData.lastName?.trim() || user.lastName,
        updatedAt: {
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString()
        },
    } : user);
    saveUsers(updatedUsers);
    const updatedUser = updatedUsers.find(user => user.id === session.id);
    const { password, ...userDetails } = updatedUser;
    saveSession(userDetails);
    return userDetails;
};
const updateUserPassword = ({ oldPassword, newPassword, confirmPassword }) => {

    const session = getSession();

    if (!session) {
        throw new Error("User is not logged in");
    }

    if (!oldPassword || !newPassword || !confirmPassword) {
        throw new Error("All password fields are required");
    }

    if (newPassword !== confirmPassword) {
        throw new Error("Passwords do not match");
    }

    const users = getUsers();

    if (!users) {
        throw new Error("Failed to load users");
    }

    const updatedUsers = users.map(user => {

        if (user.id === session.id) {

            if (user.password !== oldPassword) {
                throw new Error("Old password is incorrect");
            }

            return {
                ...user,
                password: newPassword,
                updatedAt: {
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString()
                }
            };
        }

        return user;
    });

    saveUsers(updatedUsers);

    return true;
};
export {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    updateUserDetails,
    updateUserPassword,
}