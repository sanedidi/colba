import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Button,
  createListCollection,
  Flex,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles.module.scss";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { toaster } from "@/components/ui/toaster";

const Request = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [subject, setSubject] = useState("");
  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  });
  const handleSubmit = async () => {
    if (!name || !phone || !subject) {
      toaster.create({
        title: "Iltimos, barcha maydonlarni to'ldiring!",
        type: "error",
      });
      return;
    }

    const botToken = "7849565092:AAE-O_erPSPfuor5qiOauUVvoyW_nbVLuhU";
    const chatId = "-4760988287";

    const message = `📩 *Yangi so'rov:*\n👤 *F.I.Sh:* ${name}\n📞 *Telefon:* ${phone}\n📚 *Fan turi:* ${subject}`;

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
        description: "Tez orada bog'lanamiz!",
        type: "success",
      });

      setName("");
      setPhone("+998");
      setSubject("");
      setOpen(false);
    } catch (error) {
      toaster.create({
        title: "Xatolik yuz berdi!",
        description: "Aloqa uchun +998 93 584 29 39",
        type: "error",
      });
      console.error(error);
    }
  };

  return (
    <DialogRoot
      placement={"center"}
      size={"lg"}
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogTrigger asChild>
        <Button className={styles.banner__btn1}>Ariza qoldirish</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ariza qoldirish</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Flex flexDir={"column"} gap={4}>
            <Flex flexDir={"column"} className={styles.row}>
              <Text>F.I.Sh</Text>
              <Input
                placeholder="F.I.Sh"
                value={name}
                size={"lg"}
                onChange={(e) => setName(e.target.value)}
                className={styles.questions__input}
              />
            </Flex>
            <Flex flexDir={"column"} className={styles.row}>
              <Text>Telefon raqam</Text>
              <Input
                placeholder="+998 99 123 45 67"
                value={phone}
                size={"lg"}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.startsWith("998")) {
                    value = "+" + value;
                  } else {
                    value = "+998" + value;
                  }
                  if (value.length > 4)
                    value = value.slice(0, 4) + " " + value.slice(4);
                  if (value.length > 7)
                    value = value.slice(0, 7) + " " + value.slice(7);
                  if (value.length > 11)
                    value = value.slice(0, 11) + " " + value.slice(11);
                  setPhone(value);
                }}
                maxLength={16}
                className={styles.questions__input}
              />
            </Flex>
            <Flex flexDir={"column"} className={styles.row}>
              <Text>Fan turi</Text>
              <SelectRoot
                zIndex={"999"}
                size={"lg"}
                collection={frameworks}
                onValueChange={(value) => setSubject(...value.value)}
              >
                <SelectTrigger>
                  <SelectValueText placeholder="Fan turi" />
                </SelectTrigger>
                <SelectContent zIndex={"9999"}>
                  {frameworks.items.map((movie) => (
                    <SelectItem item={movie} key={movie.value}>
                      {movie.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </Flex>
          </Flex>
        </DialogBody>
        <DialogFooter>
          <Grid w={"100%"} gap={3} gridTemplateColumns={"1fr 1fr"}>
            <DialogActionTrigger asChild>
              <Button className={styles.modal_cancel}>Bekor qilish</Button>
            </DialogActionTrigger>
            <Button className={styles.modal_submit} onClick={handleSubmit}>
              Ariza yuborish
            </Button>
          </Grid>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default Request;
