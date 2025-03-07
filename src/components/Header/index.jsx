import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { CallIcon, Logo } from "@/assets/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useIsClient } from "usehooks-ts";
import { CustomContainer } from "../Container";
import Link from "next/link";
import Wrapper from "../Wrapper";

const LINKS = [
  { label: "Colba haqida", href: "#about" },
  { label: `O'quv tizim`, href: "#sd" },
  { label: "Afzalliklar", href: "#afzalliklar" },
  { label: "Natijalar", href: "#Natijalar" },
  { label: "FAQ", href: "#faq" },
  { label: `O'quv markaz`, href: "#markaz" },
  { label: `Vacancy`, href: "#Vacancy" },
];

const Header = () => {
  const isClient = useIsClient();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!isClient) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      let currentActive = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentActive = entry.target.id;
        }
      });

      if (currentActive) {
        setActiveSection(`#${currentActive}`);
        window.history.replaceState(null, "", `#${currentActive}`);
      } else {
        setActiveSection(null);
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    LINKS.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isClient]);

  if (!isClient) return null;

  return (
    <Box className={styles.header}>
      <CustomContainer>
        <Wrapper justifyContent="space-between" row>
          <Flex className={styles.header__content}>
            <Link className={styles.header__logo} href="/">
              <Logo />
            </Link>
            <Flex className={styles.header__links}>
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.header__link} ${
                    activeSection === link.href ? styles.active : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </Flex>
          </Flex>
          <Button
            as="a"
            href="tel:+998935842939"
            className={styles.header__button}
            variant="outline"
          >
            <CallIcon />
            +998 93 584 29 39
          </Button>
        </Wrapper>
      </CustomContainer>
    </Box>
  );
};

export default Header;
