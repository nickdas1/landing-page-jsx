import ServiceBlock from './ServiceBlock';

export default function ServicesSection() {
    return (
        <div className="services-section">
            <h2>Our Services</h2>
            <div className="services-blocks">
                <ServiceBlock url="https://assets.codepen.io/6060109/agency-service-1.png" title="Web Design" />
                <ServiceBlock url="https://assets.codepen.io/6060109/agency-service-2.png" title="Ecommerce" />
                <ServiceBlock url="https://assets.codepen.io/6060109/agency-service-3.png" title="Automation" />
            </div>
        </div>
    )
}