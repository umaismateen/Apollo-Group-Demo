import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const skills = ["React", "TypeScript", "GraphQL", "Apollo", "Chakra UI"];

const HeroSection = () => (
  <Box
    bgImage="/images/hero-section-background.png"
    bgPosition="center"
    bgSize="cover"
    py="20%"
  >
    <Container variant="page">
      <Flex
        flexDirection="column"
        position="relative"
        top={[-4, -12]}
        justifyItems="center"
        alignItems="center"
      >
        <Heading textAlign="center" fontSize={{ base: 10, sm: "sm", md: "md" }}>
          Hey Morty, This guy can do it all!
        </Heading>
        <Heading
          lineHeight={1}
          textAlign="center"
          my={[1, 2]}
          as="h1"
          fontSize={{ base: "xl", sm: "3xl", md: "5xl" }}
        >
          Front-end Developer
        </Heading>
        <Heading mt={0} textAlign="center" fontSize={{ base: 6, sm: "xs" }}>
          {skills.join(" - ")}
        </Heading>
      </Flex>
    </Container>
  </Box>
);

export default HeroSection;
