
import { Background } from './components/Background';
import { Header } from './components/Header';
import { PartyDetails } from './components/PartyDetails';
import { Countdown } from './components/Countdown';
import { FadeIn } from './components/animations/FadeIn';

function App() {
  return (
    <Background>
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <FadeIn delay={1000}>
          <Countdown />
        </FadeIn>
        
        <FadeIn delay={1200}>
          <PartyDetails />
        </FadeIn>
      

        <FadeIn delay={1600}>
          <footer className="text-center mt-20 text-gray-400">
            <p>Con amor,</p>
            <p className="text-2xl font-script mt-2 text-amber-300">Betsy Aguilar</p>
          </footer>
        </FadeIn>
      </div>
    </Background>
  );
}

export default App;