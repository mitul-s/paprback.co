import { Button } from "@chakra-ui/react";
import { withAuthModal } from '@/components/Auth';
import useShelfAction from '@/utils/hooks/useShelfAction';
import { useAuth } from "@/lib/auth";

export const ShelfButton = ({ text, book, shelf, fromShelf, openAuthModal, ...rest }) => {
    
    const { user } = useAuth();
    
    const { loading, addToShelf } = useShelfAction(user);

    const useShelf = () => {
      if (user) {
        let data = {
          op: 'upsert',
          volume_data: { volume_id: book.id, ...book},
          // volume_data: {
          //   id: book.id,
          //   title: book.title,
          //   subtitle: book.subtitle,
          //   authors: book.authors,
          //   description: book.desc,
          //   ratings: book.ratings,
          //   img: book.img,
          //   detail: book.detail,
          // },
          to_shelf: shelf
        };
        addToShelf(data, book, fromShelf);
      } else {
        openAuthModal();
      }
    };

    return (
      <>
        <Button
          isLoading={loading}
          onClick={() => useShelf()}
          {...rest}
        >
          {text}
        </Button>
      </>
    );
}



export default withAuthModal(ShelfButton);