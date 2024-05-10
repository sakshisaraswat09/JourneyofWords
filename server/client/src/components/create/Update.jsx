import { useState, useEffect, useContext } from "react";
import { Box , styled, FormControl, InputBase, Button, TextareaAutosize} from "@mui/material";
import {AddCircle as Add} from '@mui/icons-material';

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";

import { API } from "../../service/api.js";

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
        width:'100%',
        height:'50vh',
        objectFit: 'cover'
});

const StyledButton = styled(Button)`
    margin:20px;
    background:#ED7D31;
    color: #fff;

    &:hover {
        background:#FD8D14;
    }
`

const StyledFormControl = styled(FormControl)`
    margin-top:10px;
    display: flex;
    flex-direction: row;
`

const InputTextField = styled(InputBase)`
    flex:1;
    margin: 0 30px;
    font-size: 28px;
`

const Textarea = styled(TextareaAutosize)`
    width:100%;
    margin-top:50px;
    font-size:20px;
    border: none;

    &:focus-visible{
        outline:none;
    }
`;

const initialPost = {
    title:'',
    description:'',
    picture:'',
    username:'',
    categories:'',
    createdDate: new Date()
}

const Update = () => {
    // const url ="https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg";

    const [post, setPost] = useState(initialPost);

    const [file, setFile] = useState('');

    const {account} = useContext(DataContext);

    const location = useLocation();

    const navigate = useNavigate();

    const {id} = useParams();

    const url = post.picture? post.picture: "https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const getImage =async () => {
            try{
                if(file){
                    console.log('Selected File:', file)
                    const data = new FormData();
                    data.append('name',file.name);
                    data.append('file', file);

                    //API Call
                    const response = await API.uploadFile(data);
                    post.picture = response.data;
                }
            }catch(error){
                console.error("Error in getImage function:", error);
            }
        }
        getImage();
        // console.log(location.search);
        post.categories= location.search?.split('=')[1] || 'All';
        post.username = account.username;
    },[file]);

    const handleChange = (e) =>{
        setPost({...post,[e.target.name]: e.target.value});
    }

    const updateBlogPost = async() => {
       let response=await API.updatePost(post);
       if(response.isSuccess){
            navigate(`/details/${id}`);
       }
    }

    return(
        <Container>
            <Image src={url} alt="post"/>

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action"/>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{display:'none'}}
                    onChange={(e) =>setFile(e.target.files[0])}
                />

                <InputTextField placeholder="Title" value={post.title} onChange={(e) => handleChange(e)} name="title"/>
                <StyledButton variant="contained" onClick={()=>updateBlogPost()}>Update</StyledButton>
                
            </StyledFormControl>

            <Textarea
                minRows={5}
                placeholder="Tell your story..."
                onChange={(e) => handleChange(e)}
                name="description"
                value={post.description}
            />

        </Container>
    )
}

export default Update;

