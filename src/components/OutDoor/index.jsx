import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.scss";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import out1 from "../../assets/img/out1.png";
import out2 from "../../assets/img/out2.png";
import out3 from "../../assets/img/out3.png";
const Card = ({ title, li, img }) => (
  <Flex className={styles.card}>
    <Flex flexDir={"column"} className={styles.card__text}>
      <Text className={styles.card__title} as="h3">
        {title}
      </Text>
      <ul>
        {li.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Flex>
    <Image src={img} />
  </Flex>
);
const INFO = [
  {
    id: 1,
    title: "Kampirliklar",
    li: ["Shaxmat/shashka", "taekwondo", "Qizlar uchun gimnastika", "Futbol"],
    img: out1.src,
  },
  {
    id: 2,
    title: "TADBIRLAR",
    li: [
      "Psixologimiz har oy ota-onalar bilan bog'lanib fikr almashishadi",
      "Kurator boshlang'ich sinf ota-onalari bilan aloqada bo'ladi",
    ],
    img: out2.src,
  },
  {
    id: 3,
    title: "Madaniy sayohatlar",
    li: [
      "Psixologimiz har oy ota-onalar bilan bog'lanib fikr almashishadi",
      "Kurator boshlang'ich sinf ota-onalari bilan aloqada bo'ladi",
    ],
    img: out3.src,
  },
];

const OutDoor = () => {
  return (
    <Box className={styles.outdoor}>
      <CustomContainer>
        <Wrapper gap={"30px"} column>
          <Text className={styles.outdoor__title} as="h2">
            DARSDAN TASHQARI <Text as={"span"}> MASHG'ULOTLAR </Text>
          </Text>
          <Grid
            className={styles.outdoor__grid}
            templateColumns="repeat(3, 1fr)"
            gap={2}
          >
            {INFO.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                li={item.li}
                img={item.img}
              />
            ))}
          </Grid>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default OutDoor;
