import { ChangeEvent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;

/* How to type a function
const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {}

How to type an object

INTERFACE

 interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}

interface IchangeHandlerProps {
  onChangeHandler: (a: string) => void;
} 

TYPE
 type ISearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
} */
