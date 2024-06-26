import { useEffect, useState, useContext } from 'react';


import {Box, Typography, styled} from '@mui/material';
import {Edit, Delete} from '@mui/icons-material';

import { useParams, Link, useNavigate } from 'react-router-dom';

import {API} from '../../service/api.js';
import { DataContext } from '../../context/DataProvider.jsx';

//components
import Comments from './comments/Comments.jsx';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
})

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break: break-word;
`

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const Description = styled(Typography)`
    word-break: break-word;
`


const DetailView = () => {

    const [post, setPost] = useState(null);

    const {id} = useParams();

    const {account} = useContext(DataContext);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
            let response = await API.getPostById(id);
            if(response.isSuccess){
                setPost(response.data);
            }
        }
        fetchData();
    }, []);

    const deleteBlog = async () => {  
        let response = await API.deletePost(post._id);
        if(response.isSuccess){
            navigate('/');
        }
        
    }

    if (!post) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    
    const url = post.picture ? post.picture : 'https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    return (
        <Container>
            <Image src={url} alt='blog'/>

            <Box style={{float:'right'}}>
                {
                    account.username ===post.username && <>
                         <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()}color='error'/>
                    </>
                }
            </Box>

            <Heading>{post.title}</Heading>
            <Author>
                {/* <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                    <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
                {/* </Link> */}
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>
            <Description>{post.description}</Description>
            <Comments post={post}/>
        </Container>
    )
}


export default DetailView;