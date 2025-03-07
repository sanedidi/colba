import React from "react";
import styles from "./styles.module.scss";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import command1 from "@/assets/img/command1.png";
import command2 from "@/assets/img/command2.png";
import command3 from "@/assets/img/command3.png";
const DATA = [
  {
    id: 1,
    name: "dONIYOR NASRIDDINOV",
    text: "Colba ta'lim markazi asoschisi",
    img: command1.src,
  },
  {
    id: 2,
    name: "Jahongir Nasriddinov",
    text: "Colba ta'lim markazi asoschisi",
    img: command2.src,
  },
  {
    id: 3,
    name: "Sardorbek hayitboyev",
    text: "Colba ta'lim markazi asoschisi",
    img: command3.src,
  },
];
const Command = () => {
  return (
    <Box className={styles.command}>
      <CustomContainer>
        <Wrapper gap={10} column>
          <Text className={styles.command__title} as="h2">
            BIZNING <Text as={"span"}> JAMOA </Text>
          </Text>
          <Flex
            overflow={"scroll"}
            gap={"10px"}
            className={styles.command__cards}
          >
            {DATA.map((item) => (
              <Flex
                gap={"24px"}
                w={"100%"}
                flexDir={"column"}
                key={item.id}
                className={styles.command__card}
              >
                <Flex gap={1} flexDir={"column"}>
                  <Text as={"h2"}> {item.name} </Text>
                  <Text as={"p"}> {item.text} </Text>
                </Flex>
                <Image h={"100%"} src={item.img} />
              </Flex>
            ))}
          </Flex>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default Command;
