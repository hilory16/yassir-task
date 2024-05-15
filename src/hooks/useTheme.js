import { useContext } from "react";
import { GlobalContext } from "context/GlobalStore";

export default function useTheme() {
  const globalContext = useContext(GlobalContext);
  const {
    state: { theme },
  } = globalContext;

  return { theme };
}
