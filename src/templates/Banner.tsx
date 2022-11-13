import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

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
