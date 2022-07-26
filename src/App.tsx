import { Header, Stage } from '~/common/components';
import { ContactBlock } from '~/common/components/Blocks/ContactBlock';
import { ExamplesBlock } from '~/common/components/Blocks/ExamplesBlock';
import { Footer } from '~/common/components/Footer';
import { InfoBlock } from '~/common/components/Blocks/InfoBlock';
import { PresentationBlock } from '~/common/components/Blocks/PresentationBlock';
import { ServicesBlock } from '~/common/components/Blocks/ServicesBlock';
import { StagesBlock } from '~/common/components/Blocks/StagesBlock';

export const App = () => {

  return (
    <div>
      <Header />
      <main>
        <PresentationBlock />
        <ServicesBlock />
        <StagesBlock/>
        <ExamplesBlock/>
        <InfoBlock/>
        <ContactBlock/>
      </main>
      <Footer/>
    </div>
  );
};

