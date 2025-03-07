import React from "react";
import styles from "./styles.module.scss";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import { EleagueIcon, MedalIcon, PotentialIcon } from "@/assets/icons";
const DATA = [
  {
    id: 1,
    icon: <PotentialIcon />,
    number: "10000",
    text: "Markazimizni bitirgan o'quvchilar soni",
  },
  {
    id: 2,
    icon: <EleagueIcon />,
    number: "15",
    text: "Yildan beri faoliyat yuritamiz",
  },
  {
    id: 3,
    icon: <MedalIcon />,
    number: "1900+",
    text: "Hozirda tahsil olayotgan o'quvchilar soni",
  },
  {
    id: 4,
    icon: <PotentialIcon />,
    number: "95%",
    text: "O'quvchilarning o'qishga kirish ko'rsatkichlari nisbati",
  },
];

const Numbers = () => {
  return (
    <Box className={styles.num}>
      <CustomContainer>
        <Wrapper gap={10} column>
          <Text className={styles.num__title} as="h2">
            COLBA <Text as={"span"}> RAQAMLARDA </Text>
          </Text>
          <Box className={styles.num__container}>
            {DATA.map((item, index) => (
              <Flex
                borderRadius={"24px"}
                p={"24px"}
                gap={5}
                bgColor={"#0DE3CE1F"}
                className={styles[`num__item${index + 1}`]}
                flexDir={"column"}
              >
                <Box className={styles.num__icon}>{item.icon}</Box>
                <Flex flexDir={"column"} className={styles.num__cont}>
                  <Text as={"h2"}> {item.number}</Text>
                  <Text>{item.text}</Text>
                </Flex>
              </Flex>
            ))}
          </Box>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default Numbers;
