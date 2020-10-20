import Card from '../components/Card';
import Box from '../components/Box';
import {reversednewcat} from '../components/palette';
import styled from 'styled-components'

export default function HomePage() {
  return (
<div>
    <Box display='flex' flexDirection='row' fontSize={1}>
      blahhhhh
    <Card bg="#000000">hi hi hi hi</Card>
    <Card>hey</Card>
    <Card>hello</Card>
    </Box>

    {reversednewcat}

    </div>
  );
};