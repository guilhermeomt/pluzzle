import Link from 'next/link';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../components/layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Planos</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Saiba mais</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contato</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-orange-600">Entrar</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-32 pb-32">
      <HeroOneButton
        title={
          <div className="pt-16">
            Faça quizzes e simulados e{'\n'}
            <span className="text-orange-400">
              divirta-se respondendo perguntas!
            </span>
          </div>
        }
        description="Participe de jogos coletivos e ganhe prêmios!"
        button={
          <Link href="">
            <a>
              <Button xl>Começar agora</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
