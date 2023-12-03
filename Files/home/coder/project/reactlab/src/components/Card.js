import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
 <VStack p={4} boxShadow="md" rounded="md" bg="white">
  <Image src={imageSrc} alt={title} boxSize="100px" />
  <Heading size="md">{title}</Heading>
  <Text>{description}</Text>
  <HStack justifyContent="flex-end" w="full">
    <FontAwesomeIcon icon={faArrowRight} />
  </HStack>
</VStack>
  return null;
};

export default Card;
