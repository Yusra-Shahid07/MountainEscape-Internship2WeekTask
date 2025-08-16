import React, { useState } from "react";

export default function Policies() {
  const [activeTab, setActiveTab] = useState("privacy");

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      style={{
        ...styles.tabButton,
        ...(isActive ? styles.activeTab : styles.inactiveTab)
      }}
    >
      {label}
    </button>
  );

  const PolicySection = ({ title, children }) => (
    <div style={styles.policySection}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  );

  const PolicySubsection = ({ title, children }) => (
    <div style={styles.subsection}>
      <h3 style={styles.subsectionTitle}>{title}</h3>
      {children}
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.mainTitle}>Our Policies</h1>
          <p style={styles.headerSubtitle}>
            Your privacy and trust matter to us. Please review our policies to understand how we protect and serve you.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={styles.tabContainer}>
        <div style={styles.tabNav}>
          <TabButton
            id="privacy"
            label="Privacy Policy"
            isActive={activeTab === "privacy"}
            onClick={setActiveTab}
          />
          <TabButton
            id="terms"
            label="Terms & Conditions"
            isActive={activeTab === "terms"}
            onClick={setActiveTab}
          />
          <TabButton
            id="cookies"
            label="Cookie Policy"
            isActive={activeTab === "cookies"}
            onClick={setActiveTab}
          />
        </div>
      </div>

      {/* Content Area */}
      <div style={styles.contentArea}>
        <div style={styles.contentWrapper}>
          
          {/* Privacy Policy Tab */}
          {activeTab === "privacy" && (
            <div style={styles.tabContent}>
              <div style={styles.lastUpdated}>
                Last updated: August 14, 2025
              </div>
              
              <PolicySection title="Privacy Policy">
                <p style={styles.paragraph}>
                  At Mountain Escape, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <PolicySubsection title="1. Information We Collect">
                  <p style={styles.paragraph}>
                    <strong>Personal Information:</strong> When you book tours, contact us, or subscribe to our newsletter, we may collect personal information such as your name, email address, phone number, postal address, and payment information.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Usage Data:</strong> We automatically collect information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on our site.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Location Data:</strong> With your consent, we may collect location information to provide location-based services and recommendations.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="2. How We Use Your Information">
                  <ul style={styles.list}>
                    <li>To process and fulfill your tour bookings and reservations</li>
                    <li>To communicate with you about your bookings and provide customer support</li>
                    <li>To send you marketing communications about our services (with your consent)</li>
                    <li>To improve our website and services based on your feedback and usage patterns</li>
                    <li>To ensure the security and integrity of our website and services</li>
                  </ul>
                </PolicySubsection>

                <PolicySubsection title="3. Information Sharing and Disclosure">
                  <p style={styles.paragraph}>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul style={styles.list}>
                    <li>With trusted service providers who assist us in operating our business</li>
                    <li>When required by law or to protect our legal rights</li>
                    <li>In connection with a business merger, acquisition, or sale of assets</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </PolicySubsection>

                <PolicySubsection title="4. Data Security">
                  <p style={styles.paragraph}>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="5. Your Rights">
                  <p style={styles.paragraph}>
                    You have the right to access, update, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us using the information provided below.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="6. Contact Us">
                  <p style={styles.paragraph}>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />Email: privacy@mountainescape.com
                    <br />Phone: +92-XXX-XXXXXXX
                    <br />Address: Mountain Escape HQ, Liberty Market, Gulberg, Lahore, Pakistan
                  </p>
                </PolicySubsection>
              </PolicySection>
            </div>
          )}

          {/* Terms & Conditions Tab */}
          {activeTab === "terms" && (
            <div style={styles.tabContent}>
              <div style={styles.lastUpdated}>
                Last updated: August 14, 2025
              </div>
              
              <PolicySection title="Terms and Conditions">
                <p style={styles.paragraph}>
                  Welcome to Mountain Escape. These Terms and Conditions govern your use of our website and services. By accessing our website or booking our services, you agree to be bound by these terms.
                </p>

                <PolicySubsection title="1. Acceptance of Terms">
                  <p style={styles.paragraph}>
                    By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our services.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="2. Booking and Payments">
                  <p style={styles.paragraph}>
                    <strong>Booking Confirmation:</strong> A booking is confirmed only after we receive full payment and send you a confirmation email.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Payment Terms:</strong> Full payment is required at the time of booking unless otherwise specified. We accept major credit cards and bank transfers.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Pricing:</strong> All prices are listed in Pakistani Rupees (PKR) and are subject to change without notice until booking is confirmed.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="3. Cancellation and Refund Policy">
                  <ul style={styles.list}>
                    <li><strong>30+ days before departure:</strong> Full refund minus 10% processing fee</li>
                    <li><strong>15-29 days before departure:</strong> 50% refund</li>
                    <li><strong>7-14 days before departure:</strong> 25% refund</li>
                    <li><strong>Less than 7 days:</strong> No refund unless due to our cancellation</li>
                  </ul>
                </PolicySubsection>

                <PolicySubsection title="4. Travel Insurance">
                  <p style={styles.paragraph}>
                    We strongly recommend that all travelers purchase comprehensive travel insurance. Mountain Escape is not responsible for any losses, injuries, or damages that may occur during your trip.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="5. Health and Safety">
                  <p style={styles.paragraph}>
                    Participants must be in good physical health and inform us of any medical conditions. Mountain activities involve inherent risks, and participants engage at their own risk.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="6. Force Majeure">
                  <p style={styles.paragraph}>
                    Mountain Escape shall not be liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to natural disasters, weather conditions, government restrictions, or other unforeseeable events.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="7. Limitation of Liability">
                  <p style={styles.paragraph}>
                    Our liability is limited to the amount paid for our services. We are not responsible for any indirect, incidental, or consequential damages arising from your use of our services.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="8. Governing Law">
                  <p style={styles.paragraph}>
                    These terms are governed by the laws of Pakistan. Any disputes shall be resolved through the courts of Lahore, Punjab, Pakistan.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="9. Contact Information">
                  <p style={styles.paragraph}>
                    For questions regarding these terms, please contact us at:
                    <br />Email: legal@mountainescape.com
                    <br />Phone: +92-XXX-XXXXXXX
                  </p>
                </PolicySubsection>
              </PolicySection>
            </div>
          )}

          {/* Cookie Policy Tab */}
          {activeTab === "cookies" && (
            <div style={styles.tabContent}>
              <div style={styles.lastUpdated}>
                Last updated: August 14, 2025
              </div>
              
              <PolicySection title="Cookie Policy">
                <p style={styles.paragraph}>
                  This Cookie Policy explains how Mountain Escape uses cookies and similar technologies when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them.
                </p>

                <PolicySubsection title="1. What Are Cookies?">
                  <p style={styles.paragraph}>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="2. Types of Cookies We Use">
                  <p style={styles.paragraph}>
                    <strong>Essential Cookies:</strong> These cookies are necessary for our website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Functionality Cookies:</strong> These cookies remember your preferences and choices to provide you with a more personalized experience.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Marketing Cookies:</strong> These cookies are used to deliver advertisements that are relevant to you and your interests.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="3. Why We Use Cookies">
                  <ul style={styles.list}>
                    <li>To ensure our website functions properly and securely</li>
                    <li>To remember your preferences and settings</li>
                    <li>To analyze website traffic and improve user experience</li>
                    <li>To provide personalized content and recommendations</li>
                    <li>To measure the effectiveness of our marketing campaigns</li>
                    <li>To prevent fraud and enhance security</li>
                  </ul>
                </PolicySubsection>

                <PolicySubsection title="4. Third-Party Cookies">
                  <p style={styles.paragraph}>
                    We may allow third-party service providers to place cookies on our website for analytics, advertising, and other purposes. These third parties have their own privacy policies and cookie practices.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Common Third-Party Services:</strong>
                  </p>
                  <ul style={styles.list}>
                    <li>Google Analytics - for website analytics</li>
                    <li>Google Maps - for location services</li>
                    <li>Social media platforms - for social sharing features</li>
                    <li>Payment processors - for secure payment processing</li>
                  </ul>
                </PolicySubsection>

                <PolicySubsection title="5. Managing Your Cookie Preferences">
                  <p style={styles.paragraph}>
                    You can control and manage cookies in several ways:
                  </p>
                  <ul style={styles.list}>
                    <li><strong>Browser Settings:</strong> Most browsers allow you to view, delete, and block cookies through their settings</li>
                    <li><strong>Cookie Banner:</strong> Use our cookie consent banner to customize your preferences</li>
                    <li><strong>Opt-out Links:</strong> Use third-party opt-out tools for advertising cookies</li>
                  </ul>
                  <p style={styles.paragraph}>
                    Please note that disabling certain cookies may affect the functionality of our website.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="6. Cookie Retention">
                  <p style={styles.paragraph}>
                    <strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser.
                  </p>
                  <p style={styles.paragraph}>
                    <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them. The retention period varies depending on the cookie's purpose.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="7. Updates to This Policy">
                  <p style={styles.paragraph}>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                  </p>
                </PolicySubsection>

                <PolicySubsection title="8. Contact Us">
                  <p style={styles.paragraph}>
                    If you have any questions about our use of cookies, please contact us at:
                    <br />Email: cookies@mountainescape.com
                    <br />Phone: +92-XXX-XXXXXXX
                    <br />Address: Mountain Escape HQ, Liberty Market, Gulberg, Lahore, Pakistan
                  </p>
                </PolicySubsection>
              </PolicySection>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// const styles = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#0f172a',
//     color: '#ffffff'
//   },
//   header: {
//     background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
//     padding: '80px 20px',
//     textAlign: 'center',
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   headerContent: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     position: 'relative',
//     zIndex: 2
//   },
//   mainTitle: {
//     fontSize: '4rem',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//     background: 'linear-gradient(135deg, #ffffff, #ff8da1)',
//     backgroundClip: 'text',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     lineHeight: '1.2'
//   },
//   headerSubtitle: {
//     fontSize: '1.4rem',
//     color: '#cbd5e1',
//     lineHeight: '1.6',
//     margin: '0'
//   },
//   tabContainer: {
//     backgroundColor: '#1e293b',
//     padding: '20px 0',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
//   },
//   tabNav: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '0',
//     maxWidth: '800px',
//     margin: '0 auto',
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: '50px',
//     padding: '8px',
//     flexWrap: 'wrap'
//   },
//   tabButton: {
//     padding: '15px 30px',
//     border: 'none',
//     borderRadius: '25px',
//     fontSize: '16px',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     flex: '1',
//     minWidth: '150px'
//   },
//   activeTab: {
//     backgroundColor: '#ff8da1',
//     color: '#ffffff',
//     boxShadow: '0 4px 15px rgba(255, 141, 161, 0.3)'
//   },
//   inactiveTab: {
//     backgroundColor: 'transparent',
//     color: '#cbd5e1'
//   },
//   contentArea: {
//     padding: '60px 20px',
//     maxWidth: '1000px',
//     margin: '0 auto'
//   },
//   contentWrapper: {
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '20px',
//     padding: '40px',
//     border: '1px solid rgba(255, 255, 255, 0.1)'
//   },
//   tabContent: {
//     animation: 'fadeIn 0.5s ease-in-out'
//   },
//   lastUpdated: {
//     fontSize: '14px',
//     color: '#94a3b8',
//     textAlign: 'right',
//     marginBottom: '30px',
//     fontStyle: 'italic'
//   },
//   policySection: {
//     marginBottom: '40px'
//   },
//   sectionTitle: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     color: '#ff8da1',
//     marginBottom: '20px',
//     borderBottom: '2px solid rgba(255, 141, 161, 0.3)',
//     paddingBottom: '10px'
//   },
//   subsection: {
//     marginBottom: '30px'
//   },
//   subsectionTitle: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginBottom: '15px',
//     position: 'relative',
//     paddingLeft: '20px'
//   },
//   paragraph: {
//     fontSize: '16px',
//     lineHeight: '1.7',
//     color: '#e2e8f0',
//     marginBottom: '15px',
//     textAlign: 'justify'
//   },
//   list: {
//     fontSize: '16px',
//     lineHeight: '1.7',
//     color: '#e2e8f0',
//     paddingLeft: '20px',
//     marginBottom: '15px'
//   }
// };






const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#052e16', // Change karo
    color: '#ffffff'
  },
  header: {
    background: 'linear-gradient(135deg, #064e3b 0%, #052e16 100%)', // Change karo
    padding: '80px 20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  headerContent: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  },
  mainTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #ffffff, #10b981)', // Change karo
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1.2'
  },
  headerSubtitle: {
    fontSize: '1.4rem',
    color: '#d1fae5', // Change karo
    lineHeight: '1.6',
    margin: '0'
  },
  tabContainer: {
    backgroundColor: '#064e3b', // Change karo
    padding: '20px 0',
    borderBottom: '1px solid rgba(16, 185, 129, 0.2)' // Change karo
  },
  tabNav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'rgba(16, 185, 129, 0.1)', // Change karo
    borderRadius: '50px',
    padding: '8px',
    flexWrap: 'wrap'
  },
  tabButton: {
    padding: '15px 30px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    flex: '1',
    minWidth: '150px'
  },
  activeTab: {
    backgroundColor: '#10b981', // Change karo
    color: '#ffffff',
    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)' // Change karo
  },
  inactiveTab: {
    backgroundColor: 'transparent',
    color: '#a7f3d0' // Change karo
  },
  contentArea: {
    padding: '60px 20px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  contentWrapper: {
    backgroundColor: 'rgba(16, 185, 129, 0.08)', // Change karo
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    border: '1px solid rgba(16, 185, 129, 0.15)' // Change karo
  },
  tabContent: {
    animation: 'fadeIn 0.5s ease-in-out'
  },
  lastUpdated: {
    fontSize: '14px',
    color: '#86efac', // Change karo
    textAlign: 'right',
    marginBottom: '30px',
    fontStyle: 'italic'
  },
  policySection: {
    marginBottom: '40px'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#10b981', // Change karo
    marginBottom: '20px',
    borderBottom: '2px solid rgba(16, 185, 129, 0.4)', // Change karo
    paddingBottom: '10px'
  },
  subsection: {
    marginBottom: '30px'
  },
  subsectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#d1fae5', // Change karo
    marginBottom: '15px',
    position: 'relative',
    paddingLeft: '20px'
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#dcfce7', // Change karo
    marginBottom: '15px',
    textAlign: 'justify'
  },
  list: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#dcfce7', // Change karo
    paddingLeft: '20px',
    marginBottom: '15px'
  }
};