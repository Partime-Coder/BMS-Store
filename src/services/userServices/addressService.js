import { nanoid } from "nanoid";
import { getSession, getAddress, saveAddress, } from "../utilityServices/localStorageService";



const createUserAddress = (
    {
    streetName,
    landmark,
    cityName,
    stateName,
    postalCode,
    countryName,
    phoneNumber,
}) => {

    const session = getSession();

    if (!session || session.length === 0) {
        throw new Error("User not Logged in!");
    }

    if (
        !streetName ||
        !cityName ||
        !stateName ||
        !postalCode ||
        !countryName ||
        !phoneNumber
    ) {
        throw new Error("All address fields are required!");
    }

    const userId = session.id;

    const AddressData = getAddress();

    const userExist = AddressData.some(
        (userAddress) => userAddress.userId === userId
    );

    if (userExist) {
        throw new Error("Address data already exist for this user!");
    }

    const createNewAddress = {
        userId,

        addresses: [
            {
                addressId: nanoid(),
                streetName,
                landmark,
                cityName,
                stateName,
                postalCode,
                countryName,
                phoneNumber,
                isDefault: true,
            },
        ],
    };

    AddressData.push(createNewAddress);

    saveAddress(AddressData);
};

const getUserAddress = (userId) => {

    const getAddressData = getAddress();

    const userAddress = getAddressData.find(
        (address) => address.userId === userId
    );

    if (!userAddress) {
        throw new Error("No Address found for this user!");
    }

    return userAddress;
};

const addMoreAddress = (
    {
    streetName,
    landmark,
    cityName,
    stateName,
    postalCode,
    countryName,
    phoneNumber,
}) => {

    if (
        !streetName ||
        !cityName ||
        !stateName ||
        !postalCode ||
        !countryName ||
        !phoneNumber
    ) {
        throw new Error("All address fields are required!");
    }

    const session = getSession();

    if (!session || session.length === 0) {
        throw new Error("User not Logged in!");
    }

    const userId = session.id;
    const AddressData = getAddress();

    const userAddressData = AddressData.find(
        (address) => address.userId === userId
    );

    if (!userAddressData) {
        throw new Error("No Address found for this user!");
    }
    const newAddress = {
        addressId: nanoid(),
        streetName,
        landmark,
        cityName,
        stateName,
        postalCode,
        countryName,
        phoneNumber,
        isDefault: false,
    };
    userAddressData.addresses.push(newAddress);
    saveAddress(AddressData);
};

const updateAddress = (
    {
    addressId,
    updatedFields
}    
) => {
    const session = getSession();

    if (!session || session.length === 0) {
        throw new Error("User not Logged in!");
    }
    const userId = session.id;
    const AddressData = getAddress();
    const userAddressData = AddressData.find((address) => address.userId === userId);
    if (!userAddressData) {
        throw new Error("No Address found for this user!");
    };
    const addresstoUpdate = userAddressData.addresses.find((address) => address.addressId === addressId);
    if (!addresstoUpdate) {
        throw new Error("No Address found with this ID!");
    };
    addresstoUpdate = {
        ...addresstoUpdate,
        ...updatedFields,
    };
    saveAddress(AddressData);
    return addresstoUpdate;

};

const deleteAddress = (addressId) => {
    const session = getSession();

    if (!session || session.length === 0) {
        throw new Error("User not Logged in!");
    }
    const userId = session.id;
    const AddressData = getAddress();
    const userAddressData = AddressData.find((address) => address.userId === userId);
    if (!userAddressData) {
        throw new Error("No Address found for this user!");
    };
    userAddressData.addresses = userAddressData.addresses.filter((address) => address.addressId !== addressId);
    saveAddress(AddressData);
    return userAddressData;
};



// const setDefaultAddress = () => {}; // Optional function



export {
    createUserAddress,
    getUserAddress,
    addMoreAddress,
    updateAddress,
    deleteAddress,
};
