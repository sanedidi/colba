import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { CustomContainer } from "../Container";
import Wrapper from "../Wrapper";
import { AccordionClose, AccordionOpen } from "@/assets/icons";

const ACC = [
  {
    id: 1,
    title: "Ingliz tilini 0 dan o'rganish uchun qancha vaqt talab qilinadi?",
    text: "Agarda barcha berilgan vazifalar o'z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so'zlashishga, to'laqonli ravishda eshitib tushunish, o'qish, fikrlarni",
  },
  {
    id: 2,
    title: "Uyga vazifa qattiq nazoratga olinganmi?",
    text: "Agarda barcha berilgan vazifalar o'z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so'zlashishga, to'laqonli ravishda eshitib tushunish, o'qish, fikrlarni",
  },
  {
    id: 3,
    title: "Ingliz tilini bilaman, qancha muddatda IELTS topshira olaman?",
    text: "Agarda barcha berilgan vazifalar o'z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so'zlashishga, to'laqonli ravishda eshitib tushunish, o'qish, fikrlarni",
  },
  {
    id: 4,
    title: "Qaysi kursga mos kelishimni qanday bilaman?",
    text: "Agarda barcha berilgan vazifalar o'z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so'zlashishga, to'laqonli ravishda eshitib tushunish, o'qish, fikrlarni",
  },
  {
    id: 5,
    title: "Kurs uchun kitob sotib olishim kerakmi?",
    text: "Agarda barcha berilgan vazifalar o'z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so'zlashishga, to'laqonli ravishda eshitib tushunish, o'qish, fikrlarni",
  },
  {
    id: 6,
    title: "Kurs uchun kitob sotib olishim kerakmi?",
    text: "Agarda barcha berilgan vazifalar o'z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so'zlashishga, to'laqonli ravishda eshitib tushunish, o'qish, fikrlarni",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box id="faq" className={styles.faq}>
      <CustomContainer>
        <Wrapper column>
          <Flex gap={30} flexDir={"column"}>
            <Flex
              className={styles.faq__title}
              gap={3}
              justifyContent="center"
              alignItems="center"
            >
              <Text as={"h2"}>Ko'p</Text>
              <Flex alignItems="center" gap={3}>
                <div className={styles.faq__textGradient}>
                  <span>so'raladigan</span>
                </div>
              </Flex>
              <Text as={"h2"}>savollar</Text>
            </Flex>
            <Grid
              className={styles.faq__grid}
              gap={10}
              gridTemplateColumns={"1fr 1fr"}
            >
              {ACC.map((item, index) => (
                <Box
                  borderRadius={"20px"}
                  key={index}
                  className={styles.faqItem}
                >
                  <Flex
                    className={styles.faqItemTrigger}
                    onClick={() => toggleItem(index)}
                    borderTopRadius={"20px"}
                    borderRadius={openIndex !== index ? "20px" : ""}
                  >
                    <Flex
                      alignItems={"center"}
                      w={"100%"}
                      justifyContent={"space-between"}
                    >
                      <Text className={styles.faq__accordion_title}>
                        {item.title}
                      </Text>
                      {openIndex === index ? (
                        <AccordionClose />
                      ) : (
                        <AccordionOpen />
                      )}
                    </Flex>
                  </Flex>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden", position: "relative" }}
                  >
                    <Box borderBottomRadius={"20px"} bgColor={"#fff"} p={3}>
                      <Text>{item.text}</Text>
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Grid>
          </Flex>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default FAQ;
