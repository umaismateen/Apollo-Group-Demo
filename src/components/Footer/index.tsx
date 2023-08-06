import React, { useMemo } from "react";
import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socials = useMemo(
    () => [
      {
        name: "LinkedIn",
        icon: <FaLinkedin size={"2rem"} />,
        link: "https://www.linkedin.com/in/umaisch/",
      },
      {
        name: "Github",
        icon: <FaGithub size={"2rem"} />,
        link: "https://github.com/umaismateen",
      },
      {
        name: "Instagram",
        icon: <FaInstagram size={"2rem"} />,
        link: "https://www.instagram.com/chaudhary_umais/",
      },
      {
        name: "Facebook",
        icon: <FaFacebook size={"2rem"} />,
        link: "https://www.facebook.com/umais.chaudary/",
      },
    ],
    []
  );

  return (
    <Center py={10} bg="white">
      <VStack>
        <Text fontWeight="bold" textAlign="center">
          Contact me on any of the following social platforms
        </Text>
        <HStack mt={4} spacing={10}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </HStack>
      </VStack>
    </Center>
  );
};

export default Footer;
