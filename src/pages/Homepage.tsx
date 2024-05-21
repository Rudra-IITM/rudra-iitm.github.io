import About from '@/components/about';
import Bio from '@/components/bio';
import Experience from '@/components/experience';
import Spotlight, { SpotlightCard } from '@/components/ui/spotlight';

const Homepage = () => {
  return (
    <Spotlight>
      <SpotlightCard className='bg-slate-950'>
        <div className='md:grid md:grid-cols-2 min-h-screen'>
          <div>
            <Bio className='md:fixed md:top-0 md:left-0 h-full md:w-1/2 overflow-hidden' />
          </div>
          <div className='col-span-1 bg-slate-950 h-screen overflow-y-scroll'>
            <About className='mt-20 mb-8 pl-8 pr-16' />
            <div className='pl-8 pr-16 mb-8'>
              <Experience />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default Homepage;