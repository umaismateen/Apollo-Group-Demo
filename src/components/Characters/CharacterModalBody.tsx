import {
  Flex,
  Heading,
  Image,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useQueryResult } from "../../store/context";

const CharacterModalBody = () => {
  const { characterData } = useQueryResult();

  const { character, loading: characterLoading } = characterData;

  return (
    (character || characterLoading) && (
      <>
        <ModalOverlay />
        <ModalContent bgColor="gray.700">
          <ModalHeader>
            {characterLoading ? (
              <Skeleton height={10} width={40} />
            ) : (
              character.name
            )}
          </ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody pb={6}>
            {characterLoading ? (
              <Skeleton height={120} />
            ) : (
              <>
                <Flex gap={4} width="100%">
                  <Image src={character.image} height={120} borderRadius={4} />
                  <Flex flexDirection="column">
                    <Heading fontSize="md">
                      Gender:{" "}
                      <Text fontWeight={"500"} display="inline">
                        {character.gender}
                      </Text>
                    </Heading>
                    <Heading fontSize="md">
                      Specie:{" "}
                      <Text fontWeight={"500"} display="inline">
                        {character.species}
                      </Text>
                    </Heading>
                    <Heading fontSize="sm">Description:</Heading>
                    <Text fontWeight={"500"} fontSize="sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vestibulum ut neque eget auctor.
                    </Text>
                  </Flex>
                </Flex>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </>
    )
  );
};

export default CharacterModalBody;
