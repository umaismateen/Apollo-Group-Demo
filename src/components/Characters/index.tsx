import { useMemo } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Container,
  Flex,
  Heading,
  Input,
  TagRightIcon,
  InputGroup,
  Modal,
  InputLeftElement,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { useQueryResult } from "../../store/context";
import StyledPagination from "./StyledPagination";
import Charachter, { CharachterProps } from "./Character";
import CharacterModalBody from "./CharacterModalBody";

const Characters = () => {
  const { queryData, refetch } = useQueryResult();
  const { results } = queryData?.data?.characters || { results: [] };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const debounce = useMemo(
    () =>
      function () {
        let timer: any = null;
        return function (e: React.ChangeEvent<HTMLInputElement>) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            refetch({
              filter: {
                name: e.target.value,
              },
            });
          }, 500);
        };
      },
    [refetch]
  );

  const debouncedChangeHandler = useMemo(() => debounce(), [debounce]);

  const renderComponent = () => {
    if (queryData?.loading) {
      return (
        <>
          <Skeleton height={200} flex={"1"} />
          <Skeleton height={200} flex={"1"} />
          <Skeleton height={200} flex={"1"} />
          <Skeleton height={200} flex={"1"} />
        </>
      );
    }
    if (results.length) {
      return results.map((result: CharachterProps) => (
        <Charachter {...result} key={result.id} openModel={onOpen} />
      ));
    }
    return (
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="150px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          No Results Found
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Try to search for another character
        </AlertDescription>
      </Alert>
    );
  };

  return (
    <Box
      bgImage="/images/charachters-section.png"
      bgPosition="top"
      bgSize="contain"
      bgColor="black"
      bgRepeat="no-repeat"
      minH="90vh"
    >
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <CharacterModalBody />
      </Modal>
      <Container variant="page" py={16}>
        <Heading color="green.200" fontSize="3xl">
          Rick And Morty Charachters
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <TagRightIcon color="whiteAlpha.900" />
          </InputLeftElement>
          <Input
            onChange={debouncedChangeHandler}
            focusBorderColor="green.500"
            type="text"
            placeholder="Search Charachter"
            color="whiteAlpha.900"
          />
        </InputGroup>
        <Flex mt={16} flexWrap="wrap" gap={8}>
          {renderComponent()}
        </Flex>
        <StyledPagination />
      </Container>
    </Box>
  );
};

export default Characters;
