import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Head from "next/head"
import { googlefetch } from '@/utils/fetch';

import CoreShell from "@/components/CoreShell";
import FullSpinner from '@/components/FullSpinner';
import { Cover, DetailBox, Titles, ShelfButtonsContainer } from "@/components/BookDetails"
import s from "@/styles/Sidebar.module.css"

import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import ShareBox from "@/components/BookDetails/ShareBox";

const BookDetail = () => {

    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(`${googlefetch}/${id}`, fetcher, {
      revalidateOnFocus: false
    });

    if(!data) {
      return <FullSpinner />
    }

    if(error || data.error) {
      return (
        <CoreShell>
          <h1>There was an error!</h1>
        </CoreShell>
      );
    }
    
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