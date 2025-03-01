function FirstSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36">
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-2xl tw:font-bold">Keep track of your Snippets</h2>
                <p className="tw:mt-5">
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
                </p>  
            </div>
            <div></div>
        </section>
    )
}

function SecondSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36">
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-2xl tw:font-bold">Access Clipboard anywhere</h2>
                <p className="tw:mt-5">
                Whether you’re on the go, or at your computer, you can access all your Clipboard 
                snippets in a few simple clicks.
                </p>  
            </div>
            <div></div>
        </section>
    )
}

function ThirdSection() {
    return (
        <section className="tw:min-h-96 tw:px-10 tw:mt-36">
            <div className="tw:text-center">
                <h2 className="w-font-bold tw:text-2xl tw:font-bold">Supercharge your workflow</h2>
                <p className="tw:mt-5">
                We’ve got the tools to boost your productivity.
                </p>  
            </div>
            <div></div>
        </section>
    )
}

export {FirstSection, SecondSection, ThirdSection}