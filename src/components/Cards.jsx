
function Cards() {
    return (
        <div className="tw:flex tw:flex-col tw:gap-14 tw:my-10 tw:lg:text-left">
            <div className="">
                <h3 className="tw:font-semibold tw:mb-4 tw:text-[1.35rem] cards-title">Quick Search</h3>
                <p className="cards-p-text">Easily search your snippets by content, category, web address, application, and more.</p>
            </div>

            <div>
                <h3 className="tw:font-semibold tw:mb-4 tw:text-[1.35rem] cards-title">iCloud Sync</h3>
                <p className="cards-p-text">Instantly saves and syncs snippets across all your devices.</p>
            </div>

            <div>
                <h3 className="tw:font-semibold tw:mb-4 tw:text-[1.35rem] cards-title">Complete History</h3>
                <p className="cards-p-text">Retrieve any snippets from the first moment you started using the app.</p>
            </div>
        </div>
    );
}

function CardsWithImage() {
    return (
        <div className="tw:flex tw:flex-col tw:gap-14 tw:my-30 tw:lg:flex-row">
            <div className="tw:flex tw:flex-col tw:items-center tw:lg:w-1/3">
                <div className="tw:mb-10"><img src="/icon-blacklist.svg" alt="" /></div>
                <h3 className="tw:font-semibold tw:mb-4 tw:text-[1.35rem] cards-title">Create blacklists</h3>
                <p className="cards-p-text">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>

            <div className="tw:flex tw:flex-col tw:items-center tw:lg:w-1/3">
                <div className="tw:mb-10"><img src="/icon-text.svg" alt="" /></div>
                <h3 className="tw:font-semibold tw:mb-4 tw:text-[1.35rem] cards-title">Plain text snippets</h3>
                <p className="cards-p-text">Remove unwanted formatting from copied text for a consistent look.</p>
            </div>

            <div className="tw:flex tw:flex-col tw:items-center tw:lg:w-1/3">
                <div className="tw:mb-10"><img src="/icon-preview.svg" alt="" /></div>
                <h3 className="tw:font-semibold tw:mb-4 tw:text-[1.35rem] cards-title">Sneak preview</h3>
                <p className="cards-p-text">Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
        </div>
    )
}

export { Cards, CardsWithImage };