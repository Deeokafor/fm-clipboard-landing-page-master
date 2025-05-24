function IosButton() {
    return (
        <a href="#" className="tw:bg-clipboard-strong-cyan tw:font-semibold tw:text-white tw:py-4 tw:px-8 tw:rounded-full tw:w-80 tw:text-center tw:border-b-4 tw:border-black/20 tw:shadow-xl tw:shadow-clipboard-strong-cyan/30 tw:lg:w-70 buttons-text tw:active:opacity-80">
            Download for iOS
        </a>
    )
}

function MacButton() {
    return (
        <a href="#" className="tw:bg-clipboard-light-blue tw:font-semibold tw:text-white tw:py-4 tw:px-8 tw:rounded-full tw:w-80 tw:text-center tw:border-b-4 tw:border-black/20 tw:shadow-xl tw:shadow-clipboard-light-blue/30 tw:lg:w-70 buttons-text tw:active:opacity-80">
            Download for Mac
        </a>
    )
}

export {IosButton, MacButton}