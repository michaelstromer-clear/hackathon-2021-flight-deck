import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import VenueList from 'components/VenueList';
import CategoryList from 'components/CategoryList';
import { venues } from 'lib/venues';
import { categories } from 'lib/categories';

export default function Venues() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4">Venues</Typography>
      </Box>
      <CategoryList categories={categories} />
      <VenueList venues={venues} />
    </Container>
  );
}
