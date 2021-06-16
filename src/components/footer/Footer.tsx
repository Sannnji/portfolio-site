import { Box, Stack, Text } from '@chakra-ui/react'
import { Copyright } from './Copyright'

import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" py="12" px={{ base: "5%",  xl: "17%" }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Text>James</Text>
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
)