import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.scss";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import img from "@/assets/img/whyus.png";
import { ScholarshipsIcon } from "@/assets/icons";
const Scholarships = () => {
  return (
    <Box className={styles.pay}>
      <CustomContainer>
        <Wrapper column>
          <Flex
            alignItems={"center"}
            gap={10}
            flexDir={"column"}
            className={styles.pay__content}
          >
            <Text className={styles.pay__title}>stipendiyalar</Text>
            <Grid
              className={styles.pay__grid}
              gap={5}
              gridTemplateColumns={"2fr 1fr"}
            >
              <Flex
                flexDirection={"column"}
                gap={10}
                alignItems={"center"}
                justifyContent={"center"}
                className={styles.pay__card}
                flexDir={"column"}
              >
                <Text className={styles.pay__text}>
                  5-sinfdan boshlab har oylik moddiy qo'llab-quvvatlov
                  o'quvchilarning mustaqil bo'lib o'sishlari, moliyaviy
                  savodxonliklarini oshirishlari va maktabda arzonroq
                  o'qishlariga yordam beradi.
                </Text>
                <Text className={styles.pay__text}>
                  Stipendiya o'quvchining shaxsiy kartasiga o'tkazib beriladi va
                  uni o'quvchi o'zi xohlagancha tasarruf qilishi mumkin. IELTS
                  va SAT sertifikatiga ega o'quvchilar{" "}
                  <span>deyarli bepulga o'qishadi.</span>
                </Text>
              </Flex>
              <Image
                borderRadius={"24px"}
                objectFit={"cover"}
                height={"400px"}
                w={"100%"}
                className={styles.pay__img}
                src={img.src}
              />
            </Grid>
            <Flex className={styles.pay__bottom}>
              <Flex className={styles.pay__ready} gap={"16px"}>
                <ScholarshipsIcon />
                <Flex flexDir={"column"}>
                  <Text className={styles.pay__bottom_title}>
                    Kelajakka tayyorlaymiz
                  </Text>
                  <Text className={styles.pay__bottom_text}>
                    Bizning o'quvchilarimiz har tomonlama yetuk, o'ziga
                    ishonadigan individual shaxs sifatida va kelajakdagi
                    muqarrar to'siq va imkoniyatlarga tayyor holatda yetishib
                    chiqishadi
                  </Text>
                </Flex>
              </Flex>
              <Box className={styles.pay__button}>
                <Button>Batafsil ma'lumot</Button>
              </Box>
            </Flex>
          </Flex>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default Scholarships;
