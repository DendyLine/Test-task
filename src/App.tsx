import { Header } from '~/common/components';
import { PresentationBlock } from '~/common/components/Blocks/PresentationBlock';
import { ServicesBlock } from '~/common/components/Blocks/ServicesBlock';

export const App = () => {

  return (
    <div>
      <Header />
      <main>
        <PresentationBlock />
        <ServicesBlock />
      </main>
    </div>
  );
};

