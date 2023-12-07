import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import styles from './aboutPage1.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@/components/themeToggle/ThemeToggle';

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <h1 className={styles.header}>About Us</h1>
            <h2 id="our-story">Our Story</h2>
            <p>
                Welcome to [Your Company Name], where [brief description of what
                your company does or offers]. Our journey began [insert year or
                time frame], and since then, we have been committed to [state
                your mission or purpose].
            </p>
            <h2 id="our-mission">Our Mission</h2>
            <p>
                At [Your Company Name], we strive to [state your mission]. We
                believe in [core belief or value] and are dedicated to [goals or
                objectives]. Our mission is to [describe the broader impact or
                purpose of your business].
            </p>
            <h2 id="our-values">Our Values</h2>
            <h3 id="integrity">Integrity</h3>
            <p>
                We uphold the highest standards of integrity in all our actions.
                Transparency, honesty, and fairness guide everything we do.
            </p>
            <h3 id="innovation">Innovation</h3>
            <p>
                We embrace creativity and strive for continuous improvement. We
                are committed to staying ahead in a rapidly evolving
                [industry/niche].
            </p>
            <h3 id="customer-centric">Customer-Centric</h3>
            <p>
                Our customers are at the heart of our business. We are dedicated
                to understanding their needs and delivering solutions that
                exceed expectations.
            </p>
            <h2 id="meet-the-team">Meet the Team</h2>
            <h3 id="-founder-ceo-name-">[Founder/CEO Name]</h3>
            <p>
                [Founder/CEO Name] is the visionary behind [Your Company Name].
                With [mention years of experience], they have led the company
                from its inception, driving growth and innovation.
            </p>
            <h3 id="-team-member-1-">[Team Member 1]</h3>
            <p>
                [Short bio and role of Team Member 1, including their expertise
                and contributions to the company.]
            </p>
            <h3 id="-team-member-2-">[Team Member 2]</h3>
            <p>
                [Short bio and role of Team Member 2, including their expertise
                and contributions to the company.]
            </p>
            <p>[Continue adding team members as necessary.]</p>
            <h2 id="our-achievements">Our Achievements</h2>
            <p>
                [Highlight key milestones, awards, or accomplishments that
                demonstrate your company&#39;s success and credibility.]
            </p>
            <h2 id="join-us-on-our-journey">Join Us on Our Journey</h2>
            <p>
                We are always on the lookout for passionate individuals who
                share our vision. If you are interested in joining the [Your
                Company Name] team, check out our [Careers page/Job openings]
                for current opportunities.
            </p>
            <h2 id="contact-us">Contact Us</h2>
            <p>
                Have questions or want to learn more about [Your Company Name]?
                Feel free to reach out to us at [contact email/phone number].
            </p>
            <p>
                Thank you for being a part of our story at [Your Company Name].
            </p>
            <p>
                [Optional: Include images, videos, or infographics to make the
                page visually appealing.]
            </p>
        </div>
    );
};

export default AboutUs;
