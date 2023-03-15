import { signal } from "@preact/signals";

export const currentPage = signal("/");
export function updateCurrentPage(newPage: string) {
  currentPage.value = newPage;
}
