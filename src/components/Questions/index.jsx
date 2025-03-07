import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Input,
  InputAddon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CustomContainer } from "../Container";
import questions1 from "@/assets/img/questions1.png";
import questions2 from "@/assets/img/questions2.png";
import Wrapper from "../Wrapper";
import { UZBIcon } from "@/assets/icons";
import { toaster } from "../ui/toaster";

const Questions = ({ top }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const inputSize = useBreakpointValue({ base: "md", md: "2xl" });
  const handleSubmit = async () => {
    if (!name || !phone) {
      toaster.create({
        title: "Iltimos, barcha maydonlarni to'ldiring!!",
        type: "error",
      });
      return;
    }

    const botToken = "7849565092:AAE-O_erPSPfuor5qiOauUVvoyW_nbVLuhU";
    const chatId = "-4760988287";

    const message = `\`\`\`📩 Yangi so'rov:👤 Ism: ${name}📞 Telefon:${phone}\`\`\``;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      toaster.create({
        title: "So'rov yuborildi!",
        description: "Tez orada boglanamiz!",
        type: "success",
      });

      setName("");
      setPhone("");
    } catch (error) {
      toaster.create({
        title: "Xatolik yuz berdi!",
        description: "Aloqa uchun +998 93 584 29 39",
        type: "error",
      });
      alert("");
      console.error(error);
    }
  };

  return (
    <Box
      bgImage={`url(${top ? questions1.src : questions2.src})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos={"center"}
      className={styles.questions}
      id="question"
    >
      <CustomContainer>
        <Wrapper column>
          <Grid
            className={styles.questions__grid}
            alignItems="center"
            h="80vh"
            gridTemplateColumns="1fr 1fr"
          >
            <Flex gap="16px" alignItems="self-start" flexDir="column">
              <Flex
                className={styles.questions__gradient}
                gap={3}
                justifyContent="center"
                alignItems="center"
                as="h2"
              >
                Savollaringiz
                <Flex alignItems="center" gap={3}>
                  <div className={styles.questions__textGradient}>
                    <span>bormi?</span>
                  </div>
                </Flex>
              </Flex>
              <Text className={styles.questions__description}>
                Ma'lumotlaringizni to'ldiring, tez orada operatorlarimiz siz
                bilan bog'lanishadi
              </Text>
              <Flex className={styles.questions__inputs}>
                <Input
                  size={inputSize}
                  placeholder="Ism familya"
                  className={styles.questions__input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Group attached>
                  <InputAddon size={"md"} className={styles.questions__icon}>
                    <UZBIcon />
                  </InputAddon>
                  <Input
                    p={"0"}
                    size={inputSize}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");

                      if (value.startsWith("998")) {
                        value = "+" + value;
                      } else {
                        value = "998" + value;
                      }
                      if (value.length > 4)
                        value = value.slice(0, 4) + " " + value.slice(4);
                      if (value.length > 7)
                        value = value.slice(0, 7) + " " + value.slice(7);
                      if (value.length > 11)
                        value = value.slice(0, 11) + " " + value.slice(11);

                      setPhone(value);
                    }}
                    value={phone}
                    maxLength={16}
                    className={styles.questions__input}
                    placeholder={"+998 99 123 45 67"}
                  />
                </Group>

                <Button
                  size="2xl"
                  className={styles.questions__button}
                  variant="outline"
                  onClick={handleSubmit}
                >
                  Ma'lumotlarni jo'natish
                </Button>
              </Flex>
            </Flex>
            <div className={styles.questions__empty} />
          </Grid>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default Questions;
