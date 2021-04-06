import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import VenueList from 'components/VenueList';
import CategoryList from 'components/CategoryList';
import { venues } from 'lib/venuesMapper';
import { categories } from 'lib/categories';
import { Venue } from 'types';

export default function Venues() {
  const [category, setCategory] = useState('');
  const filterVenues =
    (category &&
      venues.filter(
        (venue: Venue) => venue.properties.category.slugName == category
      )) ||
    venues;
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4">Venues</Typography>
      </Box>
      <CategoryList
        categories={categories}
        onSelectCategory={(newCategory: string) => {
          if (category == newCategory) {
            setCategory('');
            return;
          }
          setCategory(newCategory);
        }}
      />
      <VenueList venues={filterVenues} />
    </Container>
  );
}
