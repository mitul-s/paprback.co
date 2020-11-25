import CoreShell from "@/components/CoreShell"
import UserContent from '@/components/Profile/UserContent';
import CTA from '@/components/Profile/CTA';
import { Box } from "@chakra-ui/react"
import s from '@/styles/Sidebar.module.css';
import { useAuth } from "@/lib/auth";
import ShelfContainer from "../ShelfContainer";


const GuestProfile = ({ u, id, username }) => {
    
    const { user } = useAuth();

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
                {user ? '' : <CTA />}
              </Box>
              <Box className={s.notSidebar}>
                <ShelfContainer
                  id={id}
                  heading="Currently Reading"
                  description="A list of books that you're reading at the moment"
                  shelfMap="currently_reading"
                  listLength="2"
                  username={username}
                />
                <ShelfContainer
                  id={id}
                  heading="To Read"
                  description="Some books you have saved to read for later"
                  shelfMap="want_to_read"
                  listLength="3"
                  username={username}
                />
                <ShelfContainer
                  id={id}
                  heading="Finished"
                  description="Books you've already read. Keep going!"
                  shelfMap="previously_read"
                  listLength="6"
                  username={username}
                />
              </Box>
            </Box>
          </Box>
        </CoreShell>
      </>
    );
}

export default GuestProfile;