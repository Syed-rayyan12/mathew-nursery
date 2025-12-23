

const CookiePolicy = () => {
    return (
        <section className="w-full h-[80vh] relative flex justify-center"
            style={{
                backgroundImage: "url('/images/about-banner.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full px-24 flex flex-col gap-4">
                    {/* Tag Heading */}

                    <img src="/images/cloud.png" className='h-16 object-cover absolute -top-14 left-92' alt="" />
                    {/* Heading */}
                    <h2 className="text-[66px] font-heading font-medium text-white leading-tight">
                        Cookie  <span className="text-secondary">Policy</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-white text-lg leading-relaxed">
                        we uses cookies to improve your experience on our website.<br /> This policy  explains what cookies are and how we use them.
                    </p>


                    {/* Search Box */}

                </div>
            </div>
        </section>
    )
}

export default CookiePolicy; 