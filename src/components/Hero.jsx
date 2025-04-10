import { IosButton } from './Buttons';
import { MacButton } from './Buttons';

export default function Hero() {
    return (
        <header className="tw:min-h-96 tw:px-10 tw:bg-[url(/bg-header-mobile.png)] tw:md:bg-cover tw:lg:bg-[url(/bg-header-desktop.png)] tw:bg-contain tw:bg-top tw:bg-no-repeat tw:sm:px-tab-px tw:lg:px-desktop-px-sm tw:min-xl:px-desktop-px-lg tw:xl:py-20">
            <div className="tw:flex tw:flex-col tw:items-center tw:justify-center tw:text-center tw:py-14">
                <img src="/logo.svg" alt="logo" className='tw:my-14 tw:xl:w-40'/>
                <h1 className="tw:font-semibold hero-title-text">A history of everything you copy</h1>
                <p className="tw:mt-5 tw:opacity-60 tw:lg:text-[1.125rem] hero-p-text">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
            </div>
            <div className='tw:grid tw:justify-center tw:gap-8 tw:my-5 tw:md:flex'>
                <IosButton />
                <MacButton />
            </div>
        </header>
    )
}