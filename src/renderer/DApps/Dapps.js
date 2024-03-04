import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Image, Link, Skeleton, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useDapps } from './useDapps';

function DappButton({ dapp }) {
  return (
    <Button
      as={Link}
      href={dapp.url}
      target="_blank"
      aria-label={dapp.label}
      variant="outline"
      colorScheme="teal"
      leftIcon={<Image src={dapp.icon} alt={dapp.label} width="1em" />}
      rightIcon={dapp.url ? <ExternalLinkIcon /> : <Spinner size="xs" />}
      isDisabled={!dapp.url}
      _hover={{ textDecoration: 'none' }}
      flexGrow={1}
    >
      {dapp.label}
    </Button>
  );
}

export function Dapps() {
  const { data: dapps } = useDapps();
  return (
    <Box p="4">
      <Heading mb="3" size="sm">
        Available DApps:
      </Heading>
      <Flex gap={2} mb="2" flexWrap="wrap">
        {dapps.length > 0 ? (
          dapps.map((dapp) => <DappButton key={dapp.id} dapp={dapp} />)
        ) : (
          <Skeleton w="full" height={8} />
        )}
      </Flex>
    </Box>
  );
}
