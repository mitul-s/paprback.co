import { Button } from "@chakra-ui/core";
import { withAuthModal } from '@/components/Auth';
import useShelfAction from '@/utils/hooks/useShelfAction';
import { useAuth } from "@/lib/auth";

export const ShelfButton = ({ text, book, shelf, openAuthModal, ...rest }) => {
    
    const { user } = useAuth();
    
    const { loading, addToShelf } = useShelfAction(user);

    const useShelf = () => {
      if (user) {
        let data = {
          op: 'upsert',
          volume_id: book.id,
          to_shelf: shelf
        };
        addToShelf(data);
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