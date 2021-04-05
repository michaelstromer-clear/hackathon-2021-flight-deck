import { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HealthPassTimeline from '../../components/healthpasstimeline/HealthPassTimeline';

import VenueList from 'components/VenueList';

export default function Venues() {

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4">Health</Typography>
      </Box>
      <Box my={4}>
          <HealthPassTimeline/>
      </Box>
      <VenueList />
    </Container>
  );
}
