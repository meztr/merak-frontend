/* eslint-disable react/prop-types */
import { Box, Heading } from 'reflexbox';

function HeroWithBackground({ title }) {
    return (
        <Box
            sx={{
                px: 4,
                py: 6,
                backgroundImage: 'url(https://source.unsplash.com/random/1024x768?school)',
                backgroundSize: 'cover',
                borderRadius: 0,
                color: 'white',
                bg: 'gray'
            }}>
            <Heading textAlign="center" fontSize={[5, 6]}>
                {title}
            </Heading>
        </Box>
    );
}

export default HeroWithBackground;
