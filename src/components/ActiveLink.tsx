import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import test from "node:test";
import { cloneElement, ReactElement } from "react";

interface PropsActiveLink extends LinkProps {
  children: ReactElement;
  shouldMatchHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchHref = false,
  ...rest
}: PropsActiveLink) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }
  if (
    !shouldMatchHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? "white" : "pink.400" })}
    </Link>
  );
}
