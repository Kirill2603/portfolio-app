import React, { useState, useEffect } from 'react'
import {
  Box,
  Image,
  IconButton,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { MEDIA_QUERIES } from '../constants'
import { ThumbnailGallery } from './ThumbnailGallery'

interface ImageSliderProps {
  images: string[]
  projectTitle: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  projectTitle, 
  autoPlay = false, 
  autoPlayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  return (
    <>
      <Box position="relative" borderRadius="lg" overflow="hidden" bg="gray.100">
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} - изображение ${currentIndex + 1}`}
          width="100%"
          height={isLargerThan768 ? "550px" : "400px"}
          objectFit="cover"
          cursor="pointer"
          transition="transform 0.2s"
          _hover={{ transform: 'scale(1.02)' }}
        />
        
        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <IconButton
              aria-label="Предыдущее изображение"
              icon={<ChevronLeftIcon />}
              position="absolute"
              left="2"
              top="50%"
              transform="translateY(-50%)"
              size="sm"
              bg="blackAlpha.600"
              color="white"
              _hover={{ bg: 'blackAlpha.800' }}
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            />
            <IconButton
              aria-label="Следующее изображение"
              icon={<ChevronRightIcon />}
              position="absolute"
              right="2"
              top="50%"
              transform="translateY(-50%)"
              size="sm"
              bg="blackAlpha.600"
              color="white"
              _hover={{ bg: 'blackAlpha.800' }}
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            />
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <Box
            position="absolute"
            bottom="2"
            right="2"
            bg="blackAlpha.600"
            color="white"
            px="2"
            py="1"
            borderRadius="md"
            fontSize="sm"
          >
            {currentIndex + 1} / {images.length}
          </Box>
        )}

        {/* Dots indicator */}
        {images.length > 1 && (
          <Flex
            position="absolute"
            bottom="2"
            left="50%"
            transform="translateX(-50%)"
            gap="1"
          >
            {images.map((_, index) => (
              <Box
                key={index}
                w="8px"
                h="8px"
                borderRadius="full"
                bg={index === currentIndex ? 'white' : 'whiteAlpha.500'}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{ bg: 'white' }}
                onClick={(e) => {
                  e.stopPropagation()
                  goToImage(index)
                }}
              />
            ))}
          </Flex>
        )}
      </Box>
    </>
  )
}
