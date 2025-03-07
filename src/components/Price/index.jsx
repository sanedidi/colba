import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import styles from "./styles.module.scss";
const DATA = [
  {
    id: 1,
    price: "4 900 000 <span>  SO'M </span> ",
    text: "1-4 O'ZBEK SINFLAR UCHUN",
  },
  {
    id: 2,
    price: "5 480 000 <span>SO'M  </span> ",
    text: "QOLGAN BARCHA SINFLAR UCHUN",
  },
];
const Price = () => {
  return (
    <Box className={styles.price}>
      <CustomContainer>
        <Wrapper column>
          <Flex gap={10} flexDir={"column"}>
            <Text className={styles.price__title}>NARXLARIMIZ:</Text>
            <Grid
              className={styles.price__cards}
              gridTemplateColumns={"1fr 1fr"}
              gap={"10px"}
            >
              {DATA.map((item) => (
                <Flex
                  flexDir={"column"}
                  className={styles.price__card}
                  key={item.id}
                >
                  <Text
                    as={"h2"}
                    dangerouslySetInnerHTML={{ __html: item.price }}
                  />
                  <Text as={"p"}>{item.text}</Text>
                </Flex>
              ))}
            </Grid>
          </Flex>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default Price;
