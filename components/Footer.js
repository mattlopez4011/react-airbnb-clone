import React from 'react';

const Footer = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600"}>
            <div className={"space-y-4 text-xs text-gray-800"}>
                <h5 className={"font-bold"}>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className={"space-y-4 text-xs text-gray-800"}>
                <h5 className={"font-bold"}>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>MattDev</p>
            </div>

            <div className={"space-y-4 text-xs text-gray-800"}>
                <h5 className={"font-bold"}>HOST</h5>
                <p>Try hosting</p>
                <p>AirCover</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
            </div>

            <div className={"space-y-4 text-xs text-gray-800"}>
                <h5 className={"font-bold"}>ABOUT</h5>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
            </div>
        </div>
    );
};

export default Footer;