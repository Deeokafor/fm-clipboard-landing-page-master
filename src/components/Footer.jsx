function Footer() {
    return(
        <footer className="tw:bg-clipboard-grayish-blue/25 tw:flex tw:flex-col tw:items-center tw:justify-center tw:min-h-96 tw:py-14 tw:lg:flex-row tw:lg:items-center tw:lg:justify-between tw:lg:min-h-0 tw:lg:py-7 tw:sm:px-tab-px tw:lg:px-desktop-px-sm tw:min-xl:px-desktop-px-lg">
            <div className="tw:w-16 tw:lg:w-16">
                <img src="/logo.svg" alt="" className="tw:lg:size-auto"/>
            </div>

            <div className="tw:capitalize tw:lg:w-6/12">
                <ul className="tw:text-center tw:grid tw:gap-7 tw:my-12 tw:font-medium tw:lg:grid-flow-col tw:lg:grid-rows-2 tw:lg:text-left tw:lg:text-[1.1rem]">
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">FAQs</li>
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">contact us</li>
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">privacy policy</li>
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">press kit</li>
                    <li className="tw:hover:text-clipboard-strong-cyan tw:cursor-pointer">installation guide</li>
                </ul>
            </div>

            <div className="tw:flex tw:gap-14 tw:items-center tw:lg:gap-9">
                <a href="#">
                    {/* <img src="/public/icon-facebook.svg" alt="" className=""/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="tw:active:fill-clipboard-strong-cyan tw:fill-[#4c545c]"><path fill="" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0"/></svg>
                    
                </a>
                <a href="#">
                    {/* <img src="/public/icon-twitter.svg" alt=""/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" className="tw:active:fill-clipboard-strong-cyan tw:fill-[#4c545c]"><path fill="" d="M24 2.557a9.8 9.8 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337.608a9.9 9.9 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.98 13.98 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.9 4.9 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.9 4.9 0 0 1-2.224.084 4.93 4.93 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10 10 0 0 0 24 2.557"/></svg>
                </a>
                <a href="#">
                    {/* <img src="/public/icon-instagram.svg" alt=""/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="tw:active:fill-clipboard-strong-cyan tw:fill-[#4c545c]"><path fill="" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881"/></svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer;