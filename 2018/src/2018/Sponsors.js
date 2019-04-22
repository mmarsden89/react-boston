import React from 'react';
import Section, { Container } from './components/Layout';
import Link from './components/Link';
import wayfair from './images/wayfair-logo.png';
import ezcater from './images/ezcater.png';
import styled from 'styled-components';

const P = styled.p`
  margin-bottom: 1em;
`;

const Img = styled.img`
  margin: 2em 0;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: 0.25s ease-out;
  &:hover,
  &:focus {
    opacity: 1;
    filter: grayscale(0);
  }
`;

const LinkGroup = styled.p`
  width: 50%;
  display: flex;
  margin-bottom: 2em;
  > * + * {
    margin-left: 20px;
  }
`;

const Sponsors = ({ id }) => (
  <Section title="Sponsors" id={id}>
    <Container>
      <P style={{ fontWeight: 'bold' }}>
        React Boston 2018 is sponsored and hosted by:
      </P>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://tech.wayfair.com/"
      >
        <Img alt="Wayfair" src={wayfair} />
      </a>
      <P>
        We’re the creative builders solving complex business problems through
        the newest and most innovative software in e-commerce.
      </P>
      <LinkGroup>
        <Link openInNewWindow href="https://tech.wayfair.com/">
          tech.wayfair.com
        </Link>
        <Link
          openInNewWindow
          href="https://www.wayfaircareers.com/engineering/"
        >
          wayfaircareers.com/engineering
        </Link>
      </LinkGroup>
    </Container>
    <hr style={{ marginTop: '2em', marginBottom: '2em' }} />
    <Container>
      <P>
        Breakfast and lunch at React Boston 2018 is sponsored by{' '}
        <Link openInNewWindow href="https://www.ezcater.com/">
          ezCater
        </Link>.
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.ezcater.com/"
        >
          <Img alt="ezCater" src={ezcater} style={{ maxWidth: '400px' }} />
        </a>
      </P>
    </Container>
    <hr style={{ marginTop: '2em', marginBottom: '2em' }} />
    <Container>
      <P>
        For information about future sponsorship opportunities, please reach out
        to{' '}
        <Link href="mailto:reactboston2018@gmail.com">
          reactboston2018@gmail.com
        </Link>.
      </P>
    </Container>
  </Section>
);

export default Sponsors;
