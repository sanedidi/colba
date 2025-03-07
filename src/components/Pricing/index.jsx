import React from "react";
import styles from "./styles.module.scss";
import { Box, Flex, Text } from "@chakra-ui/react";
import clsx from "clsx";
const CARDS = [
  {
    id: 1,
    title: "Belgilangan fanlardan imtihon",
    description:
      "Farzandingizni imtihon qilib, uni aqliy salohiyatini sinovdan o'tkazamiz",
  },
  {
    id: 2,
    title: "Psixolog bilan suhbat",
    description:
      "Og’zaki suhbat jarayonida asosan bolaning IQ darajasi, axloqi va tasavvur qobiliyatlarini tekshiramiz",
  },
  {
    id: 3,
    title: "Kerakli hujjatlarni taqdim etish",
    description:
      "Yuqoridagi bosqichlardan muvaffaqqiyatli o’tgan o'quvchilar hujjat topshirish jarayoniga o'tishlari mumkin bo'ladi",
  },
];
const Pricing = () => {
  return (
    <Box className={styles.pricing}>
      <Box className={styles.pricing__content}>
        <Flex
          className={styles.pricing__title}
          gap={3}
          justifyContent={"center"}
          alignItems={"center"}
          as={"h2"}
        >
          QABUL
          <Flex alignItems={"center"} gap={3}>
            <div className={styles.pricing__textGradient}>
              <span>JARAYONLARI</span>
            </div>
          </Flex>
        </Flex>

        <Box className={styles.pricing__container}>
          {CARDS.map((card, index) => (
            <Flex
              position={"relative"}
              className={styles[`pricing__card${index + 1}`]}
            >
              <Flex key={card.id} className={styles.pricing__card}>
                <Box className={styles.pricing__card__title}>
                  <Text>{card.title}</Text>
                </Box>
                <Box className={styles.pricing__card__description}>
                  <Text>{card.description}</Text>
                </Box>
              </Flex>
              <Box className={styles.pricing__number}>{index + 1}</Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
