import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href='/'>
            <a>Sobre nós</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Login</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            Faça quizzes e simulados e 
            {'\n'}
            <span className="text-orange-400">divirta-se respondendo perguntas!</span>
          </>
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
