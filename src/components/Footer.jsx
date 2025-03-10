function Footer() {
    return(
        <footer className="tw:bg-clipboard-grayish-blue/30 tw:flex tw:flex-col tw:items-center tw:justify-center tw:min-h-96 tw:py-14 tw:lg:flex-row tw:lg:items-start tw:lg:justify-between tw:lg:px-56">
            <div className="tw:w-16 tw:lg:w-2/12 tw:bg-rose-700">
                <img src="/logo.svg" alt="" className="tw:lg:size-16"/>
            </div>

            <div className="tw:capitalize tw:bg-green-400 tw:lg:w-4/12">
                <ul className="tw:text-center tw:grid tw:gap-7 tw:my-12 tw:font-medium tw:lg:grid-cols-3 tw:lg:text-left">
                    <li>FAQs</li>
                    <li>contact us</li>
                    <li >privacy policy</li>
                    <li>press kit</li>
                    <li>installation guide</li>
                </ul>
            </div>

            <div className="tw:flex tw:gap-14 tw:items-center">
                <a href="">
                    <img src="/icon-facebook.svg" alt="" />
                </a>
                <a href="">
                    <img src="/icon-twitter.svg" alt="" />
                </a>
                <a href="">
                    <img src="/icon-instagram.svg" alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;