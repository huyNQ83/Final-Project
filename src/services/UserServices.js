import axios from "axios"

const getAllUsers = async () => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/users`);
        return result.data;
    } catch (error) {
    console.log("🚀 ~ file: UserServices.js ~ line 8 ~ getAllUsers ~ error", error)
    }
};


export default { getAllUsers };