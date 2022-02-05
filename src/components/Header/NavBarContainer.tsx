import { Flex } from "@chakra-ui/react";
import React from "react";

interface NavBarContainerProps {
  children?: React.ReactNode;
}

export default function NavBarContainer(props: NavBarContainerProps) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["blue.900", "blue.900"]}
      color={["white", "white"]}
    >
      {props.children}
    </Flex>
  );
}
