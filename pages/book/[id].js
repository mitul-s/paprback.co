import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Head from "next/head"
import { googlefetch } from '@/utils/fetch';

import CoreShell from "@/components/CoreShell";
import { Description, Cover } from "@/components/BookDetail"
import s from "@/styles/Sidebar.module.css"

import { Box, Spinner } from "@chakra-ui/core";

const BookDetail = () => {

    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(`${googlefetch}/${id}`, fetcher, {
      revalidateOnFocus: false
    });

    
    
    if(!data) {
      return <CoreShell><Spinner/></CoreShell>
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
          img: data.volumeInfo.imageLinks.small.replace('http://', 'https://'),
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
        <title>{book.title} | Paprback</title>
      </Head>
      <CoreShell>
        <Box className={s.withSidebar}>
          <Box>
            <Box className={s.sidebar}>
                <Cover img={book.img}/>
            </Box>
            <Box className={s.notSidebar}>
              <Description title={book.title} subtitle={book.subtitle} authors={book.authors} desc={book.desc} detail={book.detail} />
            </Box>
          </Box>
        </Box>
      </CoreShell>
      </>
    );
}

export default BookDetail;