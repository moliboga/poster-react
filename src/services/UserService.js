import axios from "axios";
import { USERS_URL } from "../utils/Constants";

const getAllUsers = async () => {
    return await axios.get(USERS_URL)
}

export default {
    getAllUsers
}