import { Box, Center, Image, Heading, Stack, Text } from "@chakra-ui/core";
import CoreShell from "@/components/CoreShell"
import Shelves from "@/components/Profile/Shelves"
import UserContent from '@/components/Profile/UserContent';
import ShelfContainer from '@/components/Profile/ShelfContainer';
import PreviousShelf from '@/components/Profile/PreviousShelf';
import CTA from '@/components/Profile/CTA';
import s from '@/styles/Sidebar.module.css';


const AuthProfile = ({ shelf, u, username }) => {
  return (
    <>
      <CoreShell>
        <Box className={s.withSidebar}>
          <Box>
            <Box className={s.sidebar}>
              <UserContent 
                bio={u.bio} 
                firstName={u.firstName} 
                lastName={u.lastName} 
                birthday={u.birthday} 
                location={u.location} 
                username={username} 
              />
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

export default AuthProfile;