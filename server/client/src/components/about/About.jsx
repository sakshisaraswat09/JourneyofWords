
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Us</Typography>
                <Text variant="h5">Welcome to Journey of Words, where we bring stories to life and connect a global community of creators, readers, and enthusiasts. We're passionate about creating a platform that fosters creativity, knowledge sharing, and vibrant interactions.<br /><br />
                    <Text variant="h4">Our Mission</Text>
                <Text variant="h5">At Journey of Words, our mission is to empower individuals to share their stories, insights, and experiences with the world. We believe that everyone has a unique perspective to offer, and our platform is a space where your voice can shine.</Text><br />
                <Text variant="h4">Who We Are</Text>
                <Text variant="h5">We are a diverse team of creators, developers, and innovators who share a common love for storytelling and community. Our journey began with a simple idea: to create a space where writers, bloggers, and content creators can showcase their work, and readers can explore an array of topics, from travel and technology to fashion and food.</Text><br />
                <Text variant="h4">What We Offer</Text>
                <Text variant="h5">Content Creation: Our platform provides a user-friendly interface for bloggers and writers to craft and share their articles. Whether it's compelling text, captivating images, or engaging multimedia, we've got it covered.

                Community Building: Journey of Words is more than just a platform; it's a community. Readers can explore a diverse range of blogs, connect with authors, and actively engage through comments and reactions.

                Content Categorization: To enhance your browsing experience, we allow users to categorize content, making it easy to find the topics that resonate with your interests.</Text><br />
                <Text variant="h4">Join Our Journey</Text>
                <Text variant="h5">We invite you to join us in this exciting journey of creativity, learning, and connection. Become a part of our global community, and let your voice be heard. Together, we can make Journey of Words a hub for meaningful conversations and valuable content.

                Whether you're a writer looking to share your stories or a reader in search of inspiration, Journey of Words is here to empower you. We're excited to have you on board, and we can't wait to see the incredible content and interactions that will unfold.</Text>
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>   */}
                         send me an Email 
                        <Link href="sakshisaraswat215@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;