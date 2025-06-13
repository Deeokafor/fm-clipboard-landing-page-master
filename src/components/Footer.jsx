function Footer() {
    return(
        <footer className="tw:bg-clipboard-grayish-blue/25 tw:flex tw:flex-col tw:items-center tw:justify-center tw:min-h-96 tw:py-14 tw:lg:flex-row tw:lg:items-center tw:lg:justify-between tw:lg:min-h-0 tw:lg:py-7 tw:sm:px-tab-px tw:lg:px-desktop-px-sm tw:min-xl:px-desktop-px-lg">
            <div className="tw:w-16 tw:lg:w-16">
                <img src="/logo.svg" alt="" className="tw:lg:size-auto"/>
            </div>

            <div className="tw:capitalize tw:lg:w-6/12">
                <ul className="tw:text-center tw:grid tw:gap-7 tw:my-12 tw:font-medium tw:lg:grid-flow-col tw:lg:grid-rows-2 tw:lg:mt- tw:lg:text-left">
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">FAQs</li>
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">contact us</li>
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">privacy policy</li>
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">press kit</li>
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">installation guide</li>
                </ul>
            </div>

            <div className="tw:flex tw:gap-14 tw:items-center tw:lg:gap-9">
                <a href="">
                    <img src="/public/icon-facebook.svg" alt="" className="tw:hover:bg-grey"/>
                </a>
                <a href="">
                    <img src="/public/icon-twitter.svg" alt=""/>
                </a>
                <a href="">
                    <img src="/public/icon-instagram.svg" alt=""/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;