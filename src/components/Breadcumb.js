import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BreadCumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home Page
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Solution
      </Link>
    </Breadcrumbs>
  );
}

export default BreadCumbs;