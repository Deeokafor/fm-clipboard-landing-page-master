import { Cards, CardsWithImage} from './Cards'

function FirstSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36 tw:lg:px-52">
            
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-2xl tw:font-bold">Keep track of your Snippets</h2>
                <p className="tw:mt-5 tw:opacity-80">
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
                </p>  
            </div>

            <div className='tw:lg:flex tw:lg:items-center'>
                <div className="tw:my-20 tw:flex-shrink-0">
                    <img src="/image-computer.png" alt="" className='tw:w-full tw:max-w-full'/>
                </div>

                <div className="tw:text-center tw:lg:ml-10">
                    <Cards />
                </div>
            </div>
        </section>
    )
}

function SecondSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36 tw:lg:px-52">
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-2xl tw:font-bold">Access Clipboard anywhere</h2>
                <p className="tw:mt-5 tw:opacity-80">
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
        <section className="tw:min-h-96 tw:px-10 tw:lg:px-52">
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-2xl tw:font-bold">Supercharge your workflow</h2>
                <p className="tw:mt-5 tw:opacity-80">
                We’ve got the tools to boost your productivity.
                </p>
                
                <CardsWithImage />
            </div>

            <div className="tw:flex tw:flex-col tw:gap-20 tw:items-center tw:my-30 tw:lg:flex-row tw:justify-center tw:lg:my-56 tw:lg:gap-40">
                <img src="/logo-google.png"  className="tw:w-40"/>
                <img src="/logo-ibm.png"  className="tw:w-32"/>
                <img src="/logo-microsoft.png"  className="tw:w-44"/>
                <img src="/logo-hp.png" className="tw:w-44"/> 
                <img src="/logo-vector-graphics.png"  className="tw:w-32"/>
            </div>
        </section>
    )
}

export {FirstSection, SecondSection, ThirdSection}