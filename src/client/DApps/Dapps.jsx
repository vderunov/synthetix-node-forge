import React from 'react';
import { Box, Button, Heading, Image, Link, Spinner, Flex, Skeleton } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
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
    >
      {dapp.label}
    </Button>
  );
}

export function Dapps() {
  const { data: dapps } = useDapps();
  return (
    <Box pt="4" px="4" pb="4">
      <Box flex="1" p="0">
        <Heading mb="3" size="sm">
          Available DApps:
        </Heading>
        <Flex direction="row" gap={2} justifyContent="start" mb="2" flexWrap="wrap">
          {dapps.length > 0 ? (
            dapps.map((dapp) => <DappButton key={dapp.id} dapp={dapp} />)
          ) : (
            <Skeleton w="full" height={8} />
          )}
        </Flex>
      </Box>
    </Box>
  );
}
