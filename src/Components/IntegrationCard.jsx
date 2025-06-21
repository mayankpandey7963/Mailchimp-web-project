import React from 'react'
import {Row, Col, Nav, Image} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";

function IntegrationCard() {

    const integrations = [
        {
            src: "./Canva.jpg",
            alt: "Canva",
            title: "Canva",
            desc: "Create compelling visuals for your marketing."
        },
        {
            src: "./Salesforce__1_.jpg",
            alt: "Mailchimp for Salesforce",
            title: "Mailchimp for Salesforce",
            desc: "Sync your Mailchimp subscribers and Salesforce&reg; leads across platforms."
        },
        {
            src: "./Instagram__1_.jpg",
            alt: "Instagram",
            title: "Instagram",
            desc: "Promote and share your instagram posts in email campaigns.",
        },
        {
            src: "./Google_Analytics2.jpg",
            alt: "Google Analytics",
            title: "Google Analytics",
            desc: "Unlock powerful Insights with campaign, website or landing page data."
        },
        {
            src: "./Logo_Woo_color.png",
            alt: "WooCommerce",
            title: "WooCommerce",
            desc: "Power your e-commerce store with smart marketing features."
        },
        {
            src: "./Shopify__1_.jpg",
            alt: "Shopify",
            title: "Shopify",
            desc: "Sync Shopify customer. Products and purchase data to Mailchimp."
        },
        {
            src: "./Quickbooks.jpg",
            alt: "Quickbooks online",
            title: "Quickbooks online",
            desc: "Bring together your marketing tools and invoice data."
        },
        {
            src: "./Squarespace.jpg",
            alt: "Squarespace Commerce",
            title: "Squarespace Commerce",
            desc: "Market your ecommerce business and drive sales."
        },
        {
            src: "./Zapier.jpg",
            alt: "Zapier",
            title: "Zapier",
            desc: "Automatically pass data between web services without a single line of code."
        }

    ]
  return (
    <div>

        <Row className='px-3 px-md-5 py-4'>
          <Col xs={12} className='mb-4 text-center text-md-start'>
            <h1>Bring in more data, drive more <br /> growth with our integrations</h1>
          </Col>
          
          {integrations.map(({ src, alt, title, desc }, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} className='py-3'>
              <div className='d-flex flex-column flex-md-row gap-3 align-items-start'>
                <Image fluid className='integrated-img' src={src} alt={alt} style={{ maxWidth: '60px' }} />
          
                <div className="socialMediaTexts ps-0 ps-md-2">
                  <Nav.Link href='#'>
                    <strong style={{ fontSize: '14px', fontFamily: 'sans-serif' }}>{title}</strong>
                  </Nav.Link>
                  <span style={{ fontSize: '13px', color: 'grey' }}>{desc}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

      
    </div>
  )
}

export default IntegrationCard
