// Import HTML and CSS as strings
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Mow Bro's - Lawn Care & Mowing Services</title>
    <style>
        /* Root Variables */
        :root {
            --primary-green: #1a4d2e;
            --secondary-green: #2d7a4a;
            --light-green: #4a9d6f;
            --accent-yellow: #ffd700;
            --text-dark: #1a1a1a;
            --text-light: #666666;
            --white: #ffffff;
            --light-bg: #f8f8f8;
        }

        /* Global Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: var(--text-dark);
            line-height: 1.6;
            background-color: var(--white);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Navigation */
        .navbar {
            background-color: var(--primary-green);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo h1 {
            color: var(--white);
            font-size: 1.8rem;
            font-weight: 700;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--accent-yellow);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%);
            color: var(--white);
            padding: 80px 0;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            bottom: -50px;
            left: 0;
            right: 0;
            height: 150px;
            background: linear-gradient(to bottom, transparent, var(--light-green));
            clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 100%);
        }

        .hero-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 3rem;
            position: relative;
            z-index: 1;
        }

        .hero-text {
            flex: 1;
        }

        .hero-text h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .hero-text p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.95;
        }

        .cta-button {
            display: inline-block;
            background-color: var(--accent-yellow);
            color: var(--primary-green);
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid var(--accent-yellow);
        }

        .cta-button:hover {
            background-color: transparent;
            color: var(--accent-yellow);
        }

        .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .mower-placeholder {
            font-size: 150px;
            opacity: 0.8;
        }

        /* Services Section */
        .services {
            padding: 80px 0;
            background-color: var(--light-bg);
        }

        .services h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--primary-green);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background-color: var(--white);
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .service-card h3 {
            color: var(--primary-green);
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .service-card p {
            color: var(--text-light);
            line-height: 1.8;
        }

        /* About Section */
        .about {
            padding: 80px 0;
            background-color: var(--white);
        }

        .about h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: var(--primary-green);
        }

        .about > .container > p {
            text-align: center;
            font-size: 1.1rem;
            color: var(--text-light);
            margin-bottom: 3rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .about-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .feature {
            background-color: var(--light-bg);
            padding: 2rem;
            border-left: 4px solid var(--accent-yellow);
            border-radius: 4px;
        }

        .feature h4 {
            color: var(--primary-green);
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }

        .feature p {
            color: var(--text-light);
        }

        /* Contact Section */
        .contact {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%);
            color: var(--white);
        }

        .contact h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .contact-icon {
            font-size: 2.5rem;
        }

        .contact-item h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .contact-item p {
            opacity: 0.95;
        }

        .contact-form {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 8px;
            backdrop-filter: blur(10px);
        }

        .contact-form form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
            padding: 0.75rem;
            border: none;
            border-radius: 4px;
            font-family: inherit;
            font-size: 1rem;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
            color: #999;
        }

        .submit-btn {
            background-color: var(--accent-yellow);
            color: var(--primary-green);
            padding: 0.75rem;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .submit-btn:hover {
            background-color: #ffed4e;
            transform: translateY(-2px);
        }

        /* Footer */
        .footer {
            background-color: var(--primary-green);
            color: var(--white);
            text-align: center;
            padding: 2rem 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-content {
                flex-direction: column;
                text-align: center;
            }

            .hero-text h2 {
                font-size: 2rem;
            }

            .mower-placeholder {
                font-size: 100px;
            }

            .nav-links {
                gap: 1rem;
                font-size: 0.9rem;
            }

            .contact-content {
                grid-template-columns: 1fr;
            }

            .services h2,
            .about h2,
            .contact h2 {
                font-size: 2rem;
            }

            .service-card,
            .feature {
                padding: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .navbar .container {
                flex-direction: column;
                gap: 1rem;
            }

            .nav-links {
                flex-direction: column;
                gap: 0.5rem;
            }

            .hero-text h2 {
                font-size: 1.5rem;
            }

            .hero-text p {
                font-size: 1rem;
            }

            .mower-placeholder {
                font-size: 80px;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <h1>THE MOW BRO'S</h1>
            </div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h2>Professional Lawn Care & Mowing Services</h2>
                <p>Your lawn deserves the best. We're here to keep it looking perfect.</p>
                <a href="#contact" class="cta-button">Get a Free Quote</a>
            </div>
            <div class="hero-image">
                <div class="mower-placeholder">🚜</div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🏠</div>
                    <h3>Residential Mowing</h3>
                    <p>Professional lawn mowing for residential properties. Regular maintenance to keep your lawn healthy and beautiful.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">✂️</div>
                    <h3>Lawn Care</h3>
                    <p>Complete lawn care services including trimming, edging, and debris removal for a pristine finish.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌱</div>
                    <h3>Maintenance Plans</h3>
                    <p>Flexible maintenance plans tailored to your lawn's needs. Weekly, bi-weekly, or monthly services available.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>About Us</h2>
            <p>The Mow Bro's is your trusted partner for professional lawn care and mowing services. With years of experience and a commitment to excellence, we deliver outstanding results for every property.</p>
            <div class="about-features">
                <div class="feature">
                    <h4>Professional Equipment</h4>
                    <p>We use top-of-the-line mowing equipment to ensure quality results.</p>
                </div>
                <div class="feature">
                    <h4>Reliable Service</h4>
                    <p>Consistent, dependable service you can count on every time.</p>
                </div>
                <div class="feature">
                    <h4>Customer Focused</h4>
                    <p>Your satisfaction is our priority. We listen to your needs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-icon">📞</span>
                        <div>
                            <h4>Phone</h4>
                            <p>417 576 4785</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📍</span>
                        <div>
                            <h4>Service Area</h4>
                            <p>Residential & Commercial</p>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 The Mow Bro's. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

export default {
  async fetch(request) {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  },
};