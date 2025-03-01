import { IosButton } from './Buttons';
import { MacButton } from './Buttons';

export default function CallToAction() {
    return (
        <section className='tw:min-h-96 tw:px-10 tw:flex tw:flex-col tw:justify-center tw:text-center'>
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-2xl tw:font-bold">Clipboard for iOS and Mac OS</h2>
                <p className="tw:mt-5">
                Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                and you’re ready to start adding to your clipboard.
                </p>  
            </div>
            <div className='tw:grid tw:justify-center tw:gap-8 tw:my-5'>
                <IosButton />
                <MacButton />   
            </div>
        </section>
    );
}