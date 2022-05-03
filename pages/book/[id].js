// Helpers
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Head from "next/head"
import { googlefetch } from '@/utils/fetch';

// Internal Components
import CoreShell from "@/components/CoreShell";
import FullSpinner from '@/components/FullSpinner';
import { Cover, DetailBox, Titles, ShelfButtonsContainer } from "@/components/BookDetails"
import ShareBox from "@/components/BookDetails/ShareBox";
import s from "@/styles/Sidebar.module.css"

// External Components
import { Box, Flex, HStack } from "@chakra-ui/react";

const BookDetail = () => {

    // Visit this page to find all details of a book

    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(`${googlefetch}/${id}`, fetcher, {
      revalidateOnFocus: false
    });

    // If the data hasn't loaded yet, display a spinner
    if(!data) {
      return <FullSpinner />
    }

    // If there's any errors, indicate as so
    if(error || data.error) {
      return (
        <CoreShell>
          <h1>There was an error!</h1>
        </CoreShell>
      );
    }
    
    // I assume there's better ways of data formatting, but it wasn't an immediate priority for me
    let book = {};

    if(data) {
        book = {
          id: data.id,
          title: data.volumeInfo.title,
          subtitle: data.volumeInfo.subtitle,
          authors: data.volumeInfo.authors,
          desc: data.volumeInfo.description,
          ratings: {
            count: data.volumeInfo.ratingsCount,
            avg: data.volumeInfo.averageRating
          },
          img: data.volumeInfo.imageLinks.thumbnail ? data.volumeInfo.imageLinks.thumbnail : '',
          detail: {
            pubDate: data.volumeInfo.publishedDate,
            pages: data.volumeInfo.pageCount,
            lang: data.volumeInfo.language
          }
        };
    }


    return (
      <>
        <Head>
          <title>{book.title} // Paprback</title>
        </Head>
        <CoreShell maxW={['100%', null, '75%']}>
        {/* I don't need the sidebar styling here, can be flexbox */}
          <Box className={s.withSidebar} mb={8}>
            <Box>
              <Box className={s.sidebar}>
                <Cover img={book.img} title={book.title} />
              </Box>
              <Box className={s.notSidebar}>
                <Flex h="100%" flexDirection="column" justifyContent="center">
                  <Titles
                    title={book.title}
                    subtitle={book.subtitle}
                    authors={book.authors}
                  />
                  <HStack my={4} spacing={4}>
                    <ShelfButtonsContainer book={book} />
                  </HStack>
                </Flex>
              </Box>
            </Box>
          </Box>

          <DetailBox desc={book.desc} detail={book.detail} />
          <ShareBox />
        </CoreShell>
      </>
    );
}

export default BookDetail;