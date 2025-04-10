import { Cards, CardsWithImage} from './Cards'

function FirstSection() {
    const cardContent = {
            
    };
    
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36 tw:sm:px-tab-px tw:lg:px-[] tw:min-xl:px-desktop-px-lg">
            <div className="tw:text-center">
                <h2 className="tw:text-3xl tw:font-semibold sub-title-text">Keep track of your Snippets</h2>
                <p className="tw:mt-5 subheading-p-text sub-title-p-text tw:max-lg:mb-20">
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
                </p>  
            </div>

            <div className='tw:lg:flex tw:lg:items-center tw:lg:justify-between tw:lg:my-24'>
                {/* <div className="tw:my-20 tw:lg:w-1/2 tw:bg-black tw:lg:h-[1020px] tw:hidden"></div> */}
                <img src="/image-computer.png" alt="" className='tw:w-full tw:lg:-ml-85 tw:xl:-ml-120'/>

                <div className="tw:text-center tw:lg:w-1/2 tw:lg:ml-20">
                    <Cards />
                </div>
            </div>
        </section>
    )
}

function SecondSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36 tw:sm:px-tab-px tw:lg:px-desktop-px-sm tw:min-xl:px-desktop-px-lg">
            <div className="tw:text-center">
                <h2 className="tw:text-3xl tw:font-semibold sub-title-text">Access Clipboard anywhere</h2>
                <p className="tw:mt-5 subheading-p-text sub-title-p-text">
                Whether you’re on the go, or at your computer, you can access all your Clipboard 
                snippets in a few simple clicks.
                </p>  
            </div>

            <div className="tw:my-32 tw:mt-16 tw:lg:flex tw:justify-center">
                <img src="/image-devices.png" alt="" />
            </div>
        </section>
    )
}

function ThirdSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:sm:px-tab-px tw:lg:px-desktop-px-sm tw:min-xl:px-desktop-px-lg">
            <div className="tw:text-center">
                <h2 className="tw:text-3xl tw:font-semibold sub-title-text">Supercharge your workflow</h2>
                <p className="tw:mt-5 subheading-p-text sub-title-p-text">
                We’ve got the tools to boost your productivity.
                </p>
                
                <CardsWithImage />
            </div>

            <div className="tw:flex tw:flex-col tw:gap-20 tw:items-center tw:my-30 tw:lg:mt-48 tw:lg:flex-row tw:lg:flex-wrap tw:justify-center tw:lg:gap-x-32 tw:lg:gap-y-20 tw:min-xl:flex-nowrap">
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