import React, { useState } from 'react'
import {
  Box,
  Image,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react'

interface ThumbnailGalleryProps {
  images: string[]
  currentIndex: number
  onImageSelect: (index: number) => void
  projectTitle: string
}

export const ThumbnailGallery: React.FC<ThumbnailGalleryProps> = ({
  images,
  currentIndex,
  onImageSelect,
  projectTitle,
}) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  if (images.length <= 1) return null

  return (
    <Flex
      gap={2}
      overflowX="auto"
      pb={2}
      css={{
        '&::-webkit-scrollbar': {
          height: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray.400',
          borderRadius: '2px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'gray.500',
        },
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          flexShrink={0}
          w={isLargerThan768 ? "60px" : "50px"}
          h={isLargerThan768 ? "60px" : "50px"}
          borderRadius="md"
          overflow="hidden"
          border="2px solid"
          borderColor={index === currentIndex ? "blue.500" : "transparent"}
          cursor="pointer"
          transition="all 0.2s"
          _hover={{
            borderColor: "blue.300",
            transform: "scale(1.05)",
          }}
          onClick={() => onImageSelect(index)}
        >
          <Image
            src={image}
            alt={`${projectTitle} - миниатюра ${index + 1}`}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      ))}
    </Flex>
  )
}
