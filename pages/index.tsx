import React from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import Map from "./maps";
import Link from 'next/link';

export default function Index() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/travel">
            <Button variant="contained" color="primary">
              Go to the venues page
            </Button>
          </Link>
          <Map height={1000} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
