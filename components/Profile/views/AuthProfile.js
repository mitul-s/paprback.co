import { Box, Center, Image, Heading, Stack, Text } from "@chakra-ui/core";
import CoreShell from "@/components/CoreShell"
import Shelves from "@/components/Profile/Shelves"
import UserContent from '@/components/Profile/UserContent';
import ShelfContainer from '@/components/Profile/ShelfContainer';
import PreviousShelf from '@/components/Profile/PreviousShelf';
import CTA from '@/components/Profile/CTA';
import s from '@/styles/Sidebar.module.css';


const AuthProfile = ({ shelf, ...rest }) => {
  return (
    <>
      <CoreShell>
        <Box className={s.withSidebar}>
          <Box>
            <Box className={s.sidebar}>
              <UserContent />
              <CTA />
            </Box>
            <Box className={s.notSidebar}>
              <ShelfContainer shelf={shelf.cr} mt={[-3, null, 12]} />
              <ShelfContainer shelf={shelf.rl} mt={10} />
              <PreviousShelf shelf={shelf.pr} mt={10} />
            </Box>
          </Box>
        </Box>
      </CoreShell>
    </>
  );
}



// const AuthProfile = ({ u, s, loading, username }) => {
//     return (
//       <>
//         <CoreShell>
//           <Center bg="white" minH="20vh" p={5} rounded="xl">
//             <Box textAlign="center">
//               <Box
//                 mb={3}
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//               >
//                 <Image
//                   rounded="100%"
//                   border="3px solid"
//                   borderColor="brand.900"
//                   fallbackSrc="https://via.placeholder.com/150x150"
//                 />
//               </Box>
//               <Stack spacing={0}>
//                 <Heading as="h3" fontSize="xl" lineHeight="xs" mb={0}>
//                   {u.firstName} {u.lastName}
//                 </Heading>
//                 <Text
//                   mt={0}
//                 >
//                   @{username}
//                 </Text>
//               </Stack>
//               <Text>{u.bio}</Text>
//             </Box>
//           </Center>
//           <Shelves
//             title="Currently"
//             subheading="Books you're reading at the moment"
//             shelf={s.cr}
//             shelfType="cr"
//             username={username}
//           />
//           <Shelves
//             title="Up Next"
//             subheading="Here's what's on your reading list"
//             shelf={s.rl}
//             shelfType="rl"
//             username={username}
//           />
//           <Shelves
//             title="Previously"
//             subheading="Books you've read before"
//             shelf={s.pr}
//             portrait={true}
//             username={username}
//           />
//         </CoreShell>
//       </>
//     );
// }

export default AuthProfile;