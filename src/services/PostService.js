import axios from "axios";
import { POSTS_URL } from "../utils/Constants";

const getAllPosts = async () => {
    return await axios.get(POSTS_URL)
}

const addPost = async (newProduct) => {
    return await axios.post(POSTS_URL + "add", newProduct);
}

export default {
    getAllPosts,
    addPost
}