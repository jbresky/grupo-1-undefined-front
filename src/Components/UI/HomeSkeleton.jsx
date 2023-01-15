import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const HomeSkeleton = () => {
    return (
        <Box m={'auto'} p={200} w={'100%'} boxShadow='lg' border={'0'} bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
        </Box>
    )
}

export default HomeSkeleton