import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface PropsProfile {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: PropsProfile) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jose da Silva</Text>
          <Text color="gray.300" fontSize="small">
            josedasilva@email.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="jose_da_silva" />
    </Flex>
  );
}
