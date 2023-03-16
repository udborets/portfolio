import { useRouter } from "next/router";
import { signal } from "@preact/signals";

const useCurrentPage = () => {
  const { asPath } = useRouter();
  const currentPage = signal(asPath);
  function updateCurrentPage(newPage: string) {
    currentPage.value = newPage;
  }
  return { currentPage, updateCurrentPage };
};

export default useCurrentPage;
