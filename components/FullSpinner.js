import CoreShell from "./CoreShell"
import { Spinner } from "@chakra-ui/react";

export default function FullSpinner() {
    return (
      <CoreShell display="flex" alignItems="center" justifyContent="center" h="50vh">
        <Spinner size="lg" />
      </CoreShell>
    )
}