import { Flex, Center, Text } from "@chakra-ui/react";
import { useQueryResult } from "../../store/context";

export interface CharachterProps {
  openModel: () => void;
  id: number;
  image: string;
  name: string;
}

const Charachter = ({ id, image, openModel, name }: CharachterProps) => {
  const { getCharachter } = useQueryResult().characterData;
  return (
    <Flex
      onClick={() => {
        getCharachter({ variables: { characterId: id } });
        openModel();
      }}
      flex={"1"}
      maxW={300}
      cursor="pointer"
      borderRadius={4}
      bgImage={`url(${image})`}
      height={200}
      minW={["100%", 200]}
      bgPosition="top"
      bgSize="cover"
      justifyContent="center"
      alignItems="flex-end"
    >
      <Center bgColor="rgba(22,21,21,0.7)" width="100%" height="25%" px={2}>
        <Text
          fontWeight="bold"
          textAlign="center"
          fontSize="lg"
          color="primary.500"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {name}
        </Text>
      </Center>
    </Flex>
  );
};

export default Charachter;
