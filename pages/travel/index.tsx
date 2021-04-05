import { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import VenueList from 'components/VenueList';

export default function Venues() {

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4">Venues</Typography>
      </Box>
      <VenueList />
    </Container>
  );
}
