import './App.css';
import Hero  from './components/Hero';
import { FirstSection, SecondSection, ThirdSection } from './components/Sections'
import CallToAction from './components/CTA';
import Footer from './components/Footer';

export default function App() {
    return (
        <main>
            <Hero />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <CallToAction />
            <Footer />
        </main>
    )
}