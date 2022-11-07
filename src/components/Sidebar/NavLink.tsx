import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

interface PropsNavLink extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: PropsNavLink) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" color="pink.400" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
