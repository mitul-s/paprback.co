import { Box, Center, Image, Heading, Stack, Text } from '@chakra-ui/react';
import CoreShell from '@/components/CoreShell';
import Shelves from '@/components/Profile/Shelves';
import UserContent from '@/components/Profile/UserContent';
import ShelfContainer from '@/components/Profile/ShelfContainer';
import PreviousShelf from '@/components/Profile/PreviousShelf';
import CTA from '@/components/Profile/CTA';
import s from '@/styles/Sidebar.module.css';
import Shelf from 'pages/user/[username]/shelves/[shelf]';

const AuthProfile = ({ u, id, username }) => {
  return (
    <>
      <CoreShell>
        <Box className={s.withSidebar}>
          <Box>
            <Box className={s.sidebar}>
              <UserContent
                bio={u.bio}
                firstName={u.first_name}
                lastName={u.last_name}
                birthday={u.birthday}
                location={u.location}
                username={username}
              />
            </Box>
            <Box className={s.notSidebar}>
              <Box>
                <ShelfContainer
                  id={id}
                  heading="Currently Reading"
                  description="This is a book"
                  shelfMap="currently_reading"
                  listLength="2"
                  username={username}
                  auth={true}
                />
                <ShelfContainer
                  id={id}
                  heading="To Read"
                  description="This is a book"
                  shelfMap="want_to_read"
                  listLength="3"
                  username={username}
                  auth={true}
                />
                <ShelfContainer
                  id={id}
                  heading="Finished"
                  description="This is a book"
                  shelfMap="previously_read"
                  listLength="4"
                  username={username}
                  auth={true}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </CoreShell>
    </>
  );
};

export default AuthProfile;
