function Footer() {
    return(
        <footer className="tw-bg-clipboard-grayish-blue tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-96 tw-py-14">
            <div className="tw-w-16">
                <img src="public/logo.svg" alt=""/>
            </div>

            <div className="tw-capitalize">
                <ul className="tw-text-center tw-grid tw-gap-7 tw-my-12">
                    <li>FAQs</li>
                    <li>contact us</li>
                    <li >privacy policy</li>
                    <li>press kit</li>
                    <li>installation guide</li>
                </ul>
            </div>

            <div className="tw-flex tw-gap-14 tw-items-center">
                <a href="">
                    <img src="public/icon-facebook.svg" alt="" />
                </a>
                <a href="">
                    <img src="public/icon-twitter.svg" alt="" />
                </a>
                <a href="">
                    <img src="public/icon-instagram.svg" alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;