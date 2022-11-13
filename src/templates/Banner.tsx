import Link from 'next/link';

import { Button } from '../components/button/Button';
import { CTABanner } from '../components/cta/CTABanner';
import { Section } from '../components/layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Pronto pra começar?"
      subtitle="Comece com o plano gratuito agora mesmo."
      button={
        <Link href="/login">
          <a>
            <Button>Começar</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
