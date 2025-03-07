import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from "./styles.module.scss";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import {
  FaceBookIcon,
  FooterLogo,
  InstagramIcon,
  TelegramIcon,
} from "@/assets/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <CustomContainer>
        <Wrapper column>
          <Flex
            className={styles.footer__main}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <Flex
              className={styles.footer__left}
              gap={"24px"}
              flexDir={"column"}
            >
              <FooterLogo />
              <Text as={"h2"}>
                Biz bilan o'zingizga qulay <br /> tarzda bog'laning{" "}
              </Text>
            </Flex>
            <Flex gap={10} className={styles.footer__right}>
              <Box className={styles.footer__map}>
                <YMaps>
                  <Map
                    defaultState={{
                      center: [41.332592, 69.217429],
                      zoom: 15,
                    }}
                    width="100%"
                    height="100%"
                  >
                    <Placemark geometry={[41.332592, 69.217429]} />
                  </Map>
                </YMaps>
              </Box>
              <Flex justifyContent={"space-between"} flexDir={"column"}>
                <Flex
                  gap={"20px"}
                  flexDir={"column"}
                  className={styles.footer__items}
                >
                  <Text>Telefon:</Text>
                  <Link href={"tel:+998 93 584 29 39"}>+998 93 584 29 39</Link>
                </Flex>
                <Flex
                  gap={"20px"}
                  flexDir={"column"}
                  className={styles.footer__items}
                >
                  <Text>Ijtimoiy tarmoqlar:</Text>
                  <Flex gap={5}>
                    <TelegramIcon />
                    <FaceBookIcon />
                    <a
                      target="_blank"
                      href="https://www.instagram.com/colba_talim_markazi/"
                    >
                      <InstagramIcon />
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
