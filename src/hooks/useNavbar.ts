import { useDispatch, useSelector } from "react-redux";

import { setIsNavbarActive } from "@/store/slices/navbarSlice";
import { Store } from "@/store/store";

export const useNavbar = () => {
  const { navbar } = useSelector((store: Store) => store);
  const dispatch = useDispatch();
  function setIsActive(isActive: boolean) {
    dispatch(setIsNavbarActive({ isActive: isActive }));
  }
  return { setIsActive, navbar };
};
