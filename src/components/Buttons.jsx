function IosButton() {
    return (
        <a href="#" className="tw:bg-clipboard-strong-cyan tw:text-white tw:py-4 tw:px-8 tw:rounded-full tw:w-80 tw:text-center tw:border-b-4 tw:border-black/20 tw:shadow-xl tw:shadow-clipboard-strong-cyan/30 tw:lg:w-60">
            Download for iOS
        </a>
    )
}

function MacButton() {
    return (
        <a href="#" className="tw:bg-clipboard-light-blue tw:text-white tw:py-4 tw:px-8 tw:rounded-full tw:w-80 tw:text-center tw:border-b-4 tw:border-black/20 tw:shadow-xl tw:shadow-clipboard-light-blue/30 tw:lg:w-60">
            Download for Mac
        </a>
    )
}

export {IosButton, MacButton}