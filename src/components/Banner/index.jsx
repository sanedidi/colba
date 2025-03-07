import React from "react";
import styles from "./styles.module.scss";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import Link from "next/link";
import Request from "./Request";

const Banner = () => {
  return (
    <Box className={styles.banner}>
      <CustomContainer>
        <Wrapper column className={styles.banner__wrapper}>
          <Center
            alignItems={"center"}
            justifyContent={"center"}
            className={styles.banner__content}
            flexDir={"column"}
          >
            <Flex className={styles.banner__text}>
              <Text as={"h2"}>
                KIMYO VA BIOLOGIYAGA
                <Flex alignItems={"center"} gap={3}>
                  <div className={styles.banner__textGradient}>
                    <span>IXTISOSLASHGAN</span>
                  </div>
                  MAKTAB
                </Flex>
              </Text>
              <Text className={styles.banner__description}>
                Birinchi kundanoq farzandingizning iste'dodi qaysi <br />{" "}
                yo'nalishdaligini tekshiramiz: kreativ, analitik yoki
                ishbilarmon
              </Text>
            </Flex>
            <Flex className={styles.banner__btns} gap={10}>
              <Request />
              <Button variant={"outline"} className={styles.banner__btn2}>
                Batafsil
              </Button>
            </Flex>
          </Center>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default Banner;
