import { Box, Image, Link, Text, Icon } from "@chakra-ui/react"
import NextLink from "next/link"

const BookCard = ({ book, portrait, children, ...rest }) => {

    const colors = ['red.100', 'orange.100', 'green.100', 'teal.100', 'blue.100', 'purple.100', 'pink.100']
    const color = colors[Math.floor(Math.random() * colors.length)];


    const b = {
      id: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors ? book.volumeInfo.authors : '',
      ratings: {
        count: book.volumeInfo.ratingsCount,
        avg: book.volumeInfo.averageRating
      },
      img: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail.replace('http://', 'https://')
        : ''
    };

    return (
      <>
        <Box
          rounded="md"
          bg="white"
          display={{ md: !portrait ? 'flex' : '' }}
          {...rest}
        >
          <Box
            flexShrink="0"
            bg={color}
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight={{ base: 250, md: 200 }}
            // shadow="sm"
            rounded="md"
          >
            <Image
              width={{ md: portrait ? '' : 40 }}
              height={{ md: 175 }}
              objectFit="contain"
              src={b.img}
              alt="Woman paying for a purchase"
              fallbackSrc={`https://via.placeholder.com/175x200?text=${b.title}`}
            />
          </Box>
          <Box
            mt={{ base: !portrait ? 2 : '', md: portrait ? 0 : 0 }}
            ml={{ md: !portrait ? 6 : '' }}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            p={4}
            minWidth="0"
            w="full"
          >
            {/* <NextLink href={`/book/${id}-${title.replace(/ /g, "-").replace(/[!,.:]/g, "")}`}> */}
            <NextLink href={`/book/${b.id}`} passHref>
              <Link
                display="block"
                fontSize="xl"
                lineHeight="normal"
                fontWeight="bold"
                mt={{ md: portrait ? 0 : 3 }}
              >
                {b.title}
                {portrait ? '' : b.subtitle ? `: ${b.subtitle}` : ''}
              </Link>
            </NextLink>
            <Text mt={1} color="gray.600" fontSize="md">
              {b.authors ? 'by' : ''}{' '}
              {b.authors.length
                ? b.authors.map((a, i) => (
                    <span key={i}>{(i ? ', ' : '') + a}</span>
                  ))
                : ''}
            </Text>
            {b.ratings.count > 0 ? (<Text
              mt={2}
              color="gray.500"
              fontSize="sm"
              display="flex"
              placeItems="center"
            >
              <Icon mr={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                    fill="rgba(0,0,0,1)"
                  />
                </svg>
              </Icon>
              {b.ratings.avg} ({b.ratings.count} Ratings)
            </Text>) : ''}
            {children}
          </Box>
        </Box>
      </>
    );
}

export default BookCard;