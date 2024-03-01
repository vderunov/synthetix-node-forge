import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  Skeleton,
  Spinner,
  Grid,
  GridItem,
} from '@chakra-ui/react';
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
      w="100%"
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
      {dapps.length > 0 ? (
        <Grid templateColumns="repeat(3, 1fr)" gap={2} mb={2}>
          {dapps.map((dapp) => (
            <GridItem key={dapp.id}>
              <DappButton dapp={dapp} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Skeleton height={8} />
      )}
    </Box>
  );
}
