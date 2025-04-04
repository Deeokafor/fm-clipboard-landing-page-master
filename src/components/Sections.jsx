import { Cards, CardsWithImage} from './Cards'

function FirstSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36 tw:lg:px-desktop-px-sm">
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-3xl tw:font-bold">Keep track of your Snippets</h2>
                <p className="tw:mt-5 subheading-p-text">
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
                </p>  
            </div>

            <div className='tw:lg:flex tw:lg:items-center'>
                <div className="tw:my-20 tw:flex-shrink-0 tw:lg:w-1/2">
                    <img src="/image-computer.png" alt="" className='tw:w-full tw:max-w-full'/>
                </div>

                <div className="tw:text-center tw:lg:ml-1 tw:lg:w-1/2 tw:lg:pr-20">
                    <Cards />
                </div>
            </div>
        </section>
    )
}

function SecondSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36 tw:lg:px-desktop-px-sm">
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-3xl tw:font-bold">Access Clipboard anywhere</h2>
                <p className="tw:mt-5 subheading-p-text">
                Whether you’re on the go, or at your computer, you can access all your Clipboard 
                snippets in a few simple clicks.
                </p>  
            </div>

            <div className="tw:my-36 tw:lg:flex tw:justify-center   ">
                <img src="/image-devices.png" alt="" />
            </div>
        </section>
    )
}

function ThirdSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:lg:px-desktop-px-sm">
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-3xl tw:font-bold">Supercharge your workflow</h2>
                <p className="tw:mt-5 subheading-p-text">
                We’ve got the tools to boost your productivity.
                </p>
                
                <CardsWithImage />
            </div>

            <div className="tw:flex tw:flex-col tw:gap-20 tw:items-center tw:my-30 tw:lg:flex-row tw:lg:flex-wrap tw:justify-center tw:lg:gap-x-32 tw:lg:gap-y-20 tw:min-xl:flex-nowrap">
                <img src="/logo-google.png"  className="tw:w-40"/>
                <img src="/logo-ibm.png"  className="tw:w-32 tw:h-10"/>
                <img src="/logo-microsoft.png"  className="tw:w-40 tw:h-8"/>
                <img src="/logo-hp.png" className="tw:w-40"/> 
                <img src="/logo-vector-graphics.png"  className="tw:w-32"/>
            </div>
        </section>
    )
}

export {FirstSection, SecondSection, ThirdSection}