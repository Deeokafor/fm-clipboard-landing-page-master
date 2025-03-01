import { IosButton } from './Buttons';
import { MacButton } from './Buttons';

export default function Hero() {
    return (
        <header className="tw:min-h-96 tw:px-10">
            <div className="tw:flex tw:flex-col tw:items-center tw:justify-center tw:text-center tw:py-14">
                <img src="/logo.svg" className='tw:my-14'/>
                <h1 className="tw:font-bold tw:text-3xl">A history of everything you copy</h1>
                <p className="tw:mt-5">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
            </div>
            <div className='tw:grid tw:justify-center tw:gap-8 tw:my-5 '>
                <IosButton />
                <MacButton />
            </div>
        </header>
    )
}