import {SearchItem} from "../interfaces";

type UseDebounceProps = {
  text: string;
  delay: number;
};
type UseSearchBarProps = {
  data: SearchItem[];
};
export {UseSearchBarProps, UseDebounceProps};
