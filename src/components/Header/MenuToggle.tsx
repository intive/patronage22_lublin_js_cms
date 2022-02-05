import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { MouseEventHandler } from "react";
interface MenuToggleProps {
  toggle: MouseEventHandler;
  isOpen: boolean;
}

export default function MenuToggle(props: MenuToggleProps) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={props.toggle}>
      <Button size={"lg"} variant={"solid"}>
        {props.isOpen ? (
          <CloseIcon color={"blue.900"} />
        ) : (
          <HamburgerIcon color="blue.900" />
        )}
      </Button>
    </Box>
  );
}
