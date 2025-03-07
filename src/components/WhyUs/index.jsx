import React from "react";
import styles from "./styles.module.scss";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import { EleagueIcon, MedalIcon, PotentialIcon } from "@/assets/icons";
import whyus_img from "@/assets/img/whyus.png";
const WhyUs = () => {
  const ITEM = [
    {
      id: 1,
      icon: <PotentialIcon />,
      title: "Bolaning asl potensialini kashf qilamiz",
      text: "Har bir bolaning o'z dunyosi bor, va bizning dasturimiz uning shu dunyosidagi qobiliyati, kuchli jihatlari va qiziqishlarini yanada rivojlantirishga qaratilgan",
    },
    {
      id: 2,
      icon: <MedalIcon />,
      title: "Farzandingizning o'qishga bo'lgan qiziqishini uyg'otamiz",
      text: "O'quv jadvalimiz bolani bilim olishga bo'lgan qiziqishini paydo qiladi va uni hayotning barcha jabhalarida muvaffaqiyatga erishishi uchun tayyorlaydi",
    },
    {
      id: 3,
      icon: <EleagueIcon />,
      title: "Kelajakka tayyorlaymiz",
      text: "Bizning o'quvchilarimiz har tomonlama yetuk, o'ziga ishonadigan individual shaxs sifatida va kelajakdagi muqarrar to'siq va imkoniyatlarga tayyor holatda yetishib chiqishadi",
    },
    {
      id: 4,
      icon: <EleagueIcon />,
      title: "Qadriyatlarni shakllantiramiz",
      text: "-sinfdan boshlab zararli odatlarni bartaraf etib, foydali odatlarni shakllantiramiz. Duo olish, kattalarga hurmat, erta turish, sport va ovqatlanish odoblarini vazifa qilib beramiz va doimiy ota-onalar bilan birgalikda nazorat qilamiz",
    },
  ];
  return (
    <Box id="afzalliklar" className={styles.whyus}>
      <CustomContainer>
        <Wrapper gap={"30px"} column>
          <Text className={styles.whyus__title} as={"h2"}>
            Nima uchun <Text as={"span"}> bizning maktab </Text>
          </Text>
          <Flex gap={3} gridTemplateColumns={"3fr 1fr"}>
            <Grid
              className={styles.whyus__items}
              gap={2}
              gridTemplateColumns={"1fr 1fr"}
            >
              {ITEM.map((item) => (
                <Flex
                  gap={"12px"}
                  h={"100%"}
                  w={"100%"}
                  className={styles.whyus__item}
                  flexDir={"column"}
                >
                  <Box className={styles.whyus__icon}>{item.icon}</Box>
                  <Flex
                    className={styles.whyus__text}
                    gap={"12px"}
                    flexDir={"column"}
                  >
                    <Text as={"h2"}> {item.title} </Text>
                    <Text as={"p"}> {item.text} </Text>
                  </Flex>
                </Flex>
              ))}
            </Grid>
            <Image
              className={styles.whyus__img}
              borderRadius={"24px"}
              height={"100%"}
              w={"60%"}
              src={whyus_img.src}
              alt=""
            />
          </Flex>
          <Button size={"xl"} className={styles.whyus__button}>
            Ariza qoldirish
          </Button>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default WhyUs;
