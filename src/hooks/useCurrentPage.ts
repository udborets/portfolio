import { signal } from "@preact/signals";
import { useRouter } from "next/router";

const currentPage = signal("");

const useCurrentPage = () => {
  const { asPath } = useRouter();
  currentPage.value = asPath;
  function updateCurrentPage(newPage: string) {
    currentPage.value = newPage;
  }
  return { currentPage, updateCurrentPage };
};

export default useCurrentPage;
