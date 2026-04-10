import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        maiores ea porro dignissimos? Voluptate quibusdam quasi ad at adipisci
        quia ex eaque sint totam qui! Minus ad dolor voluptas. Saepe.
      </p>
    </>
  );
}
