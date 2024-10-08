Wander & Explore! <br>
---
Wander & Explore! is a web application designed to share travel experiences, tips, and destination guides. Users can explore different travel destinations, learn about various cultures, and find inspiration for their next adventures.

### Project Structure<br>
The project is organized as follows:


#### TravelBlog
   **a. index.html**  - The main HTML file for the travel blog <br>
   
   **b. pages**       - Folder containing additional HTML pages <br/>
   - **about.html** - Page providing information about the blog <br>
   - **contact.html** - Contact page for user inquiries<br>
   - **destinations.html** - Page showcasing various travel destinations<br>
   
   **c. css**          - Folder containing all CSS styles<br>
   - **styles.css**    - Main stylesheet for the blog<br>
   
   **d. images**       - Folder for storing image assets<br>
   - **image1.jpg**    - Example image for the blog<br>
   - **image2.jpg**    - Another example image<br>
   
   **e. js**           - Folder for JavaScript files (if any)<br>
   - **script.js**     - Main script file (if applicable)<br>
---

#### How to Run the Project

1. Clone the repository to your local machine using: <br>
git clone https://github.com/Honeegee/TravelBlog.git

2. Navigate to the project directory:<br>
cd TravelBlog

3. Open index.html in a web browser to view the blog.

**Usage**<br>

Navigate through the blog by clicking on the links in the header or footer.<br>
Explore the About page to learn more about the blog's purpose.<br>
Use the Contact page to reach out for inquiries or feedback.<br>

**Technologies Used**
1. HTML5
2. CSS3
3. JavaScript 
---

### TravelBlog Website Style Guide
This style guide outlines the agreed-upon design elements to be used throughout the TravelBlog project. It includes the color scheme, fonts, and common CSS classes to ensure consistency across the website.<br>

**Color Schemes**<br>

**Primary Colors:** <br>

**Primary Color:** #1E1E1F (Dark Grey)<br>
**Secondary Color:** #9A7C50 (Golden Brown)<br>
**Background Color:** #f7ffee (Light Greenish)<br>
**Text Color:** #130101 (Dark Red)<br>

**Header Colors:** <br>

**Header Background:** #04031C (Deep Blue)<br>
**Header Text:** #F0EBCC (Cream)<br>

**Typography** <br>

**Font Families** <br>

**Primary Font:** 'Roboto', sans-serif (Used for body text)<br>
**Heading Font:** 'Playfair Display', serif (Used for headings and brand)<br>

**Font Sizes** <br>

**H1:** 36px<br>
**H2:** 32px<br>
**H3:** 24px<br>

### Layout and Spacing

**Container:** <br>

.container {<br>
    width: 100%;<br>
    max-width: 1200px;<br>
    margin: 0 auto;<br>
    padding: 0 15px;<br>
}<br>

The container class is used to center and restrict the width of the main content.

**Grid System:** <br>

For creating column layouts, the following classes can be used:<br>

.col-4 {<br>
    flex: 0 0 33.333333%;<br>
    max-width: 33.333333%;<br>
}<br>

.col-6 {<br>
    flex: 0 0 50%;<br>
    max-width: 50%;<br>
}<br>

.col-8 {<br>
    flex: 0 0 66.666667%;<br>
    max-width: 66.666667%;<br>
}<br>

**Components and Reusable Classes** <br>

**Navbar** <br>

**Brand Name:** .navbar-brand<br>
**Navigation Links:** .nav-link<br>

**Example usage:** <br>

.nav-link {<br>
    color: var(--secondary-color);<br>
    text-decoration: none;<br>
    transition: all 0.3s ease;<br>
}<br>

**Buttons:** <br>

**Primary Button:** .btn-primary<br>
**Outline Button:** .btn-outline<br>

**Example usage:** <br>

.btn-primary {<br>
    background-color: var(--secondary-color);<br>
    color: white;<br>
}<br>

**Hero Section:** <br>

The hero section contains an image background with centered text:<br>

.hero {<br>
    height: 70vh;<br>
    background-image: url('your-image.jpg');<br>
    display: flex;<br>
    justify-content: center;<br>
    align-items: center;<br>
    color: white;<br>
    position: relative;<br>
}<br>

**Cards:** <br>

For displaying content like blog posts or destination highlights:<br>

.card {<br>
    background-color: white;<br>
    border-radius: 15px;<br>
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);<br>
    margin-bottom: 20px;<br>
    overflow: hidden;<br>
}<br>

**Responsive Design** <br>

Breakpoints are established to ensure the design looks good across devices: <br>

**For medium screens:** max-width 768px<br>

@media (max-width: 768px) {<br>
    .navbar-nav {<br>
        flex-direction: column;<br>
    }<br>
}<br>

**For small screens:** max-width 480p<br>

@media (max-width: 480px) {<br>
    .custom-col-4 {<br>
        flex: 0 0 100%;<br>
    }<br>
}<br>

**Animations** <br>

**For special effects like falling leaves:** <br>

@keyframes falling {<br>
    0% {<br>
        transform: translate3d(0, 0, 0) rotate(0deg);<br>
    }<br>
    100% {<br>
        transform: translate3d(100px, 1000px, 0) rotate(360deg);<br>
    }<br>
}<br>


### Header and Footer Components

**Header:** <br>

html
<header class="custom-header">
    <div class="container">
        <nav class="navbar">
            <a class="navbar-brand" href="#home">Wander & Explore!</a>
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-menu" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="destinations.html">Destinations</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                </ul>
                <form class="search-bar" role="search">
                    <input class="search-input" type="search" placeholder="Search" aria-label="Search">
                    <button class="search-button" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</header>


             Use .navbar-brand for the brand name and .nav-link for navigation links.


**Footer:** <br>

html

<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Wander & Explore!</h3>
                <p>Inspiring your next adventure, one story at a time.</p>
                <h4>Follow Us</h4>
                <ul class="social-icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <ul class="contact-info">
                    <li><a href="mailto:your-email@example.com"><i class="fas fa-envelope"></i> your-email@example.com</a></li>
                    <li><a href="tel:+123456789"><i class="fas fa-phone"></i> +123 456 789</a></li>
                    <li><a href="#"><i class="fas fa-map-marker-alt"></i> 123 Travel Street, Wanderland</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Newsletter</h3>
                <p>Stay updated with our latest adventures!</p>
                <form class="newsletter-form">
                    <input type="email" class="newsletter-input" placeholder="Enter your email" aria-label="Enter your email">
                    <button class="newsletter-button" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <hr class="footer-divider">
        <p class="copyright">&copy; 2024 Wander & Explore. All rights reserved.</p>
    </div>
</footer>





License
This project is licensed under the MIT License. See the LICENSE file for more details.
