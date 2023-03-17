import { useDispatch, useSelector } from "react-redux";

import { setCurrentPage } from "@/store/slices/pageSlice";
import { Store } from "@/store/store";

export const usePage = () => {
  const { page } = useSelector((store: Store) => store);
  const dispatch = useDispatch();
  function setCurrent(current: string) {
    dispatch(setCurrentPage({ current: current }));
  }
  return { page, setCurrent };
};
