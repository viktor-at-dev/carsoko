import './bottom.css'

export default function Bottom() {
    return (
        // aria-label tells screen readers exactly what this group of information is
        <section className="showroom-info-section" aria-label="Showroom and Location Information">
            <div className="showroom-info-container">
                
                <h1>Cars for Sale in Nairobi Kenya – Carsoko Premium Showroom</h1>

                <div className="info-grid">
                    {/* tabIndex="0" allows users navigating with keyboard 'Tab' keys to focus on and read the cards */}
                    <div className="info-card" tabIndex="0">
                        <h2>Visit Our Nairobi Location</h2>
                        <p>Nairobi offers the largest selection of vehicles for sale in Kenya. Browse our inventory online or visit our showroom at Limuru road next to Village Market. We stock everything from affordable cars in Kenya to premium SUVs.</p>
                    </div>

                    <div className="info-card" tabIndex="0">
                        <h2>Nationwide Delivery Available</h2>
                        <p>While we are based in Nairobi, we offer delivery of vehicles for sale in Kenya to Mombasa, Nakuru, Eldoret, Kisumu, and all major cities. We have coordinated logistics with transparent transportation costs.</p>
                    </div>

                    <div className="info-card featured-card" tabIndex="0">
                        <h2>Premium Brands from a Trusted Car Dealer</h2>
                        <ul className="brand-list" aria-label="Available premium vehicle categories">
                            <li><strong>German Excellence:</strong> Mercedes-Benz, BMW, and Porsche are some of our certified used cars for sale in Kenya with verified service history.</li>
                            <li><strong>Japanese Premium:</strong> Toyota Land Cruiser, Lexus RX, and Honda are quality vehicles built for Kenyan roads.</li>
                        </ul>
                    </div>
                </div>

                <div className="trade-in-section" tabIndex="0">
                    <h2>Experience Quality You Can Trust</h2>
                    <h3>Trade-In Program Available</h3>
                    <p>Competitive valuations for your current vehicle. We handle all paperwork and provide written appraisals valid for seven days. You can browse our certified inventory online or schedule a private consultation. Contact us today to discover why the majority of Kenyan buyers choose Carsoko for premium cars for sale.</p>
                </div>

                {/* role="note" semantic tag signals screen readers that this is supplementary callout text */}
                <div className="featured-banner" role="note" tabIndex="0">
                    <strong>Featured Vehicles:</strong> All cars inspected, certified, and backed by our quality guarantee.
                </div>
                
            </div>
        </section>
    )
}