import { IosButton } from './Buttons';
import { MacButton } from './Buttons';

export default function CallToAction() {
    return (
        <section className='tw:min-h-96 tw:px-10 tw:my-44 tw:lg:mt-2 tw:flex tw:flex-col tw:justify-center tw:text-center tw:sm:px-tab-px tw:lg:px-desktop-px-sm tw:min-xl:px-desktop-px-lg'>
            <div className="tw:text-center">
                <h2 className="tw:text-3xl tw:font-semibold sub-title-text">Clipboard for iOS and Mac OS</h2>
                <p className="tw:mt-5 subheading-p-text sub-title-p-text">
                Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                and you’re ready to start adding to your clipboard.
                </p>  
            </div>
            <div className='tw:flex tw:flex-col tw:justify-center tw:items-center tw:gap-8 tw:mt-14 tw:lg:flex-row'>
                <IosButton />
                <MacButton />   
            </div>
        </section>
    );
}