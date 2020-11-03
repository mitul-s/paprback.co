import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Head from "next/head"
import { googlefetch } from '@/utils/fetch';

import CoreShell from "@/components/CoreShell";
import FullSpinner from '@/components/FullSpinner';
import { Cover, DetailBox, Titles, ShelfButtonsContainer } from "@/components/BookDetails"
import s from "@/styles/Sidebar.module.css"

import { Box, HStack } from "@chakra-ui/core";
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
          img: data.volumeInfo.imageLinks.small ? data.volumeInfo.imageLinks.small.replace('http://', 'https://') : '',
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
        <CoreShell>
          <Box className={s.withSidebar}>
            <Box>
              <Box className={s.sidebar}>
                <Cover img={book.img} title={book.title} />
                <ShareBox />
              </Box>
              <Box className={s.notSidebar}>
                <Titles
                  title={book.title}
                  subtitle={book.subtitle}
                  authors={book.authors}
                />
                <HStack my={4} spacing={4}>
                  <ShelfButtonsContainer book={data} />
                </HStack>
                <DetailBox desc={book.desc} detail={book.detail} />
              </Box>
            </Box>
          </Box>
        </CoreShell>
      </>
    );
}

export default BookDetail;