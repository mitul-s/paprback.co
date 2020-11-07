import { Icon } from "@chakra-ui/core";
import { RiBookmarkLine, RiPushpinLine, RiCheckDoubleLine } from 'react-icons/ri';
import ShelfButton from '@/components/Shelves/ShelfButton';

export const SaveForLater = ({ ...rest }) => (
  <>
    <ShelfButton
      leftIcon={<Icon boxSize={4} mt="-2px" as={RiBookmarkLine} />}
      text="Save for later"
      backgroundColor="blue.100"
      color="blue.500"
      _hover={{ bg: 'purple.600', color: 'whiteAlpha.900' }}
      shelf="want_to_read"
      {...rest}
    />
  </>
);


export const MarkAsFinished = ({ ...rest }) => (
  <>
    <ShelfButton
      leftIcon={<Icon boxSize={4} mt="-2px" as={RiCheckDoubleLine} />}
      text="Mark as finished"
      // rounded="full"
      backgroundColor="green.100"
      color="green.500"
      // _hover={{ bg: 'purple.600', color: 'whiteAlpha.900' }}
      shelf="previously_read"
      {...rest}
    />
  </>
);

export const CurrentlyReading = ({ ...rest }) => (
  <>
    <ShelfButton
      leftIcon={<Icon boxSize={4} mt="-2px" as={RiPushpinLine} />}
      text="Mark as reading"
      // rounded="full"
      backgroundColor="purple.100"
      color="purple.500"
      _hover={{ bg: 'purple.600', color: 'whiteAlpha.900' }}
      shelf="currently_reading"
      {...rest}
    />
  </>
);


export const NakedButton = ({ text, ...rest }) => (
  <>
    <ShelfButton
      text={text}
      {...rest}
    />
  </>
)




export const IconMarkFinished = ({ ...rest }) => (
  <>
    <ShelfButton
      leftIcon={<Icon boxSize={4} mt="-2px" as={RiPushpinLine} />}
      text="Mark as reading"
      rounded="2xl"
      backgroundColor="pink.100"
      color="pink.600"
      _hover={{ bg: 'purple.600', color: 'whiteAlpha.900' }}
      shelf="currently_reading"
      {...rest}
    />
  </>
);

export const IconWantToRead = ({ ...rest }) => (
  <>
    <ShelfButton
      icon={RiPushpinLine}
      text="Mark as reading"
      rounded="2xl"
      backgroundColor="pink.100"
      color="pink.600"
      _hover={{ bg: 'purple.600', color: 'whiteAlpha.900' }}
      shelf="currently_reading"
      {...rest}
    />
  </>
);

export const IconCurrentlyReading = ({ ...rest }) => (
  <>
    <ShelfButton
      icon={RiPushpinLine}
      text="Mark as reading"
      rounded="2xl"
      backgroundColor="pink.100"
      color="pink.600"
      _hover={{ bg: 'purple.600', color: 'whiteAlpha.900' }}
      shelf="currently_reading"
      {...rest}
    />
  </>
);