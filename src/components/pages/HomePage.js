import React, { useEffect, useState } from 'react';
import {
    Button, Card, CardActions, CardContent,
    CardMedia,
    Divider, Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import getTestData from "../../services/TestService";
import UserService from "../../services/UserService";
import CategoryIcon from '@mui/icons-material/Category';
import PostService from "../../services/PostService";

export const HomePage = () => {
    // так нужно указывать переменные, которым ты хочешь присвоить значение и потом работать
    const [ data, setData ] = useState([]);
    const [ posts, setPosts ] = useState([]);
    const [ users, setUsers ] = useState([]);

    const [ newPost, setNewPost ] = useState({});

    const getAllUsers = () => {
        UserService.getAllUsers()
            .then(resp => {
                // с axios запроса возвращается объект, в котором нужная инфа хранится в .data
                setUsers(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getAllPosts = () => {
        PostService.getAllPosts()
            .then(resp => {
                // с axios запроса возвращается объект, в котором нужная инфа хранится в .data
                setPosts(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTestData()
            .then(response => setData(response))
            .catch(err => {
                alert(err)
            })
        getAllUsers()
        getAllPosts()
    }, [])

    return (
        <>
            <Post text={"lalala"} />

            <h3 align={"center"}>Posts</h3>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                {posts && posts.map(element => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {element.userId}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                {element.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Like</Button>
                            <Button size="small" variant="contained">View replies</Button>
                        </CardActions>
                    </Card>
                ))}
            </Grid>

            {/*<h3>Add new product</h3>*/}
            {/*<TextField*/}
            {/*    label="Title"*/}
            {/*    onChange={e => {*/}
            {/*        // таким образом при каждом изменении поля оно будет записываться в переменную*/}
            {/*        set(e.target.value);*/}
            {/*        // а тут будет обновляться объект, в котором обновится заголовок*/}
            {/*        setNewPost(prevState => ({*/}
            {/*            ...prevState,*/}
            {/*            title: e.target.value*/}
            {/*        }))*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    variant="contained"*/}
            {/*    onClick={() => {*/}
            {/*        // тут мы берем и засовываем переменную заголовка в объект и отправляем*/}
            {/*        // ProductService.addProduct({title: })*/}
            {/*        //     .then(resp => alert(JSON.stringify(resp.data)))*/}
            {/*        //     .catch(console.log)*/}

            {/*        // а тут мы отправляем сразу готовый объект*/}
            {/*        ProductService.addProduct(newPost)*/}
            {/*            .then(resp => alert(JSON.stringify(resp.data)))*/}
            {/*            .catch(console.log)*/}
            {/*    }}*/}
            {/*>Add new product</Button>*/}

        </>
    );
};

const Post = (props) => {
    return (
        <>
            <div>This is another component you can pass arguments in, e.g.: {props.text}</div>
        </>
    )
}

export default HomePage;