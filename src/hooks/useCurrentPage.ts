import { signal } from "@preact/signals";
import { useRouter } from "next/router";

const useCurrentPage = () => {
  const { asPath } = useRouter();
  const currentPage = signal(asPath);
  function updateCurrentPage(newPage: string) {
    currentPage.value = newPage;
  }
  return { currentPage, updateCurrentPage };
};

export default useCurrentPage;
