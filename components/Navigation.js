import React from "react";
import NextLink from "next/link";
import { Flex, Link, Avatar, Icon, Button, Menu, MenuList, MenuItem, MenuButton, MenuDivider } from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
import { RiUser3Line, RiSettings2Line, RiHome2Line } from 'react-icons/ri';

import { useAuth } from '@/lib/auth';

const AuthMenu = ({ user, logout }) => {
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Button}
        rightIcon={
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
            </svg>
          </Icon>
        }
      >
        {user.username}
      </MenuButton>
      <MenuList>
        <NextLink href={`/`} passHref>
          <MenuItem icon={<RiHome2Line />}>Home</MenuItem>
        </NextLink>
        <NextLink href={`/user/${user.username}`} passHref>
          <MenuItem icon={<RiUser3Line />}>Profile</MenuItem>
        </NextLink>
        <NextLink href={`/user/${user.username}/settings`}>
          <MenuItem icon={<RiSettings2Line />}>Settings</MenuItem>
        </NextLink>
        <MenuDivider />
        <MenuItem as="a" onClick={() => logout()}>
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
} 


const AuthNav = ({ user, logout }) => (
  <>
    <AuthMenu user={user} logout={logout} />
  </>
);

const GuestNav = (
    <>
        <NextLink href="/signin" passHref>
            <Button variant="ghost" mr={2}>
                Sign In
            </Button>
        </NextLink>
        <NextLink href="/signup" passHref>
            <Button bg="primary.indigo" color="whiteAlpha.900" border="2px solid transparent">
                Sign Up
            </Button>
        </NextLink>
    </>
)

const Navigation = () => {
  const { user, logout }  = useAuth();
  return (
    <>
      <Flex
        backgroundColor="white"
        mb={[8, 12]}
        w="full"
        borderTop="5px solid"
        borderColor="primary.indigo"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          maxW="1250px"
          m="0 auto"
          w="full"
          px={5}
          h="12vh"
          //   border="1px solid red"
        >
          <Flex align="center" display={{ base: 'none', md: 'flex' }}>
            <NextLink href="/" passHref>
              <Link mr={2} fontWeight="bold" fontSize="xl">
                Paprback
              </Link>
            </NextLink>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="5xl"
            mx={{ base: '0', md: 10 }}
          >
            <SearchBar />
          </Flex>
          <Flex justifyContent="center" alignItems="center" ml={[4, null, 0]}>
            {user ? <AuthNav logout={logout} user={user} /> : GuestNav}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navigation;
