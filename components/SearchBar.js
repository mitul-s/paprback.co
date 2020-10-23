import React, { useState, useCallback } from "react";
import _ from "../node_modules/lodash";
import router from "next/router";
import { Icon, InputGroup, Input, InputLeftElement } from "@chakra-ui/core"

const SearchIcon = () => (
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
    </svg>
  </Icon>
);

const SearchBar = () => {

    const push = (q) => router.push(`/search?q=${encodeURIComponent(q)}`);
    const debounced = useCallback(_.debounce(q => push(q), 500), []);
    const handleChange = (e) => {debounced(e.target.value)}

    return (
      <>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input 
            type="text" 
            placeholder="Search for a book..." 
            onChange={(e) => handleChange(e)}
          />
        </InputGroup>
      </>
    );
}

export default SearchBar;