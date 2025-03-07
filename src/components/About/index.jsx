import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.scss";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import { Row } from "@/assets/icons";
import Colba from "@/assets/img/about_img.png";
const aboutText = [
  "Colba ta'lim markazi - 2010 yilda o'z faoliyatini boshlagan va hozirgi kunda kimyo va biologiyaga ixtisoslashgan O'zbekistondagi eng katta o'quv markaz.",
  "Markazimiz tabiiy fanlarga ixtisoslashgan va 2018-yildan boshlab majburiy fanlarni (Matematika, Tarix, Ona tili) ham o'qitib kelmoqda. Colba Ta'lim Markazining Toshkent shahrida 2 ta filiali mavjud.",
];

const subjects = [
  { title: "Chuqurlashtirilgan fanlar", items: ["Kimyo", "Biologiya"] },
  {
    title: "Chuqurlashtirilgan fanlar",
    items: ["Boshlang'ich sinfda: o'zbek va rus tillarida"],
  },
];

const About = () => {
  return (
    <Box id="about" className={styles.about}>
      <CustomContainer>
        <Wrapper>
          <Flex gap={"40px"}>
            <Flex flexDir={"column"} className={styles.about__left}>
              <Flex flexDir={"column"} className={styles.about__left_top}>
                <Text as={"h2"}>
                  Biz <Text as={"span"}>haqimizda</Text>
                </Text>
                <Flex
                  gap={"24px"}
                  flexDir={"column"}
                  className={styles.about__left_top_text}
                >
                  {aboutText.map((text, index) => (
                    <Text key={index}>{text}</Text>
                  ))}
                </Flex>
              </Flex>
              <Flex className={styles.about__left_bottom}>
                {subjects.map((subject, index) => (
                  <Flex
                    gap={"16px"}
                    key={index}
                    flexDir={"column"}
                    className={styles.about__left_bottom_items}
                  >
                    <Text as={"h2"}>{subject.title}</Text>
                    <Flex
                      gap={"16px"}
                      alignItems={"center"}
                      className={styles.about__left_bottom_item}
                    >
                      {subject.items.map((item, i) => (
                        <Text key={i}>{item}</Text>
                      ))}
                    </Flex>
                  </Flex>
                ))}
                <Box className={styles.about__icon}>
                  <Row />
                </Box>
              </Flex>
            </Flex>
            <Image
              src={Colba.src}
              alt="Colba ta'lim markazi binosi"
              className={styles.about__right}
            />
          </Flex>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default About;
