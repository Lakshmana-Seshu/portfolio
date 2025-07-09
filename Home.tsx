/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Facebook, Instagram, Twitter, BookOpen, Paperclip, GraduationCap, Menu, X, MapPin, Phone, Mail } from 'lucide-react';

const projects = [
  {
    title: 'SRI PARVATI SAMETHA SOMESHWARA SWAMI',
    description: 'This website provides information about a Shiva temple in India.',
    imageUrl: './assets/Shivatemple.png',
    link: 'https://sriparvatisamethas.wixstudio.com/thanelankashivalyam',
  },
  {
    title: 'BOOK MY TABLE',
    description: 'This project is a guide exploring dining experiences and restaurant culture.',
    imageUrl: './assets/bookmytable.png',
    link: 'https://lakshmanaseshudako.wixstudio.io/bookmytable',
  },
  {
    title: 'MY PORTFOLIO',
    description: 'A personal portfolio website showcasing my skills, projects, and experience.',
    imageUrl: './assets/portfilo.png',
    link: '#',
  },
];

const education = [
    {
        title: 'Secondary Education',
        institution: 'Sri Sri Sri Shridhi Sai High School, Mummidivaram, Andhra Pradesh.',
        graduated: 'Graduated: 2015 - 2021',
        details: "It's been a while since I've completed my program at Sri Sri Sri Shridhi Sai High School.",
        icon: 'books'
    },
    {
        title: 'Diploma in Computer Science',
        institution: 'Gunter Engineering College, Gunter, Andhra Pradesh.',
        graduated: 'Graduated: 2024',
        details: 'Graduated with honors, focusing on Web Development and Software Engineering.',
        percentage: 'Percentage of marks: 77.66%',
        icon: 'paperclip'
    },
    {
        title: 'Bachelor of Technology in Cyber Security with IoT',
        institution: 'SASI Institute of Technology & Engineering, Tadepalligudem, Andhra Pradesh.',
        graduated: 'Graduated: 2027 (Ongoing)',
        details: 'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management.',
        icon: 'gradcap'
    }
];

const skills = [
  {
    category: "Web Development",
    list: "HTML, CSS, JavaScript, Bootstrap"
  },
  {
    category: "Programming Languages",
    list: "Java, Python"
  },
  {
    category: "Designing",
    list: "Adobe Photoshop, Canvas, Figma, Wix Studio"
  }
];

const experience = {
    company: 'WindStream Energy Technologies India Pvt Ltd.',
    duration: 'Duration : 6 Months',
    description: "This is to certify that Dakoju Lakshmana Seshu, a Diploma student in the 3rd year 6th semester at Guntur Engineering College, has successfully completed an industrial training internship at Windstream Energy Technologies India Pvt. Ltd. As part of the internship program, gained hands-on experience and practical exposure in product design, contributing to various projects and enhancing technical and creative skills.",
    website: "https://www.windstream.tech/",
    logo: './assets/WindStream HD Logo (2).png'
};

const socialLinks = {
    hero: [
        { href: 'https://github.com/Lakshmana-Seshu', icon: Github, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/lakshmana-seshu-dakoju-89184429b/', icon: Linkedin, label: 'LinkedIn' },
        { href: 'https://www.instagram.com/seshu_dakoju.009?igsh=MWNncGpreTU5YXZvMg==', icon: Instagram, label: 'Instagram' },
        { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    ],
    footer: [
        { href: 'https://www.instagram.com/seshu_dakoju.009?igsh=MWNncGpreTU5YXZvMg==', icon: Instagram, label: 'Instagram' },
        { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
        { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
        { href: 'https://www.linkedin.com/in/lakshmana-seshu-dakoju-89184429b/', icon: Linkedin, label: 'LinkedIn' },
    ]
}

const useTypingEffect = (words, options) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const { typeSpeed, deleteSpeed, delaySpeed } = options;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            const updatedText = isDeleting
                ? currentWord.substring(0, text.length - 1)
                : currentWord.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), delaySpeed);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);
    return text;
};

const EducationIcon = ({ icon }) => {
    switch (icon) {
        case 'books': return <BookOpen size={30} className="card-icon" />;
        case 'paperclip': return <Paperclip size={30} className="card-icon" />;
        case 'gradcap': return <GraduationCap size={30} className="card-icon" />;
        default: return null;
    }
};

export default function Home() {
    const typedText = useTypingEffect(["UI Designer", "Video Editor","Designer"], {
        typeSpeed: 150,
        deleteSpeed: 100,
        delaySpeed: 3000,
    });
    
    const [activeLink, setActiveLink] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { threshold: 0.4, rootMargin: "-80px 0px -80px 0px" } // Adjust for header
        );

        const sections = document.querySelectorAll('section, footer#contact');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header height
                behavior: 'smooth'
            });
        }
        setMenuOpen(false);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Here you would handle form submission, e.g., send data to a backend or service.
        alert('Thank you for your message!');
        e.target.reset();
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Project' },
        { id: 'education', label: 'Educations' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div className="portfolio-container">
            <header className="navbar">
                <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>Portfolio.</a>
                 <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                         <a 
                            key={link.id} 
                            href={`#${link.id}`} 
                            className={activeLink === link.id ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, `#${link.id}`)}
                         >
                           {link.label}
                         </a>
                    ))}
                </nav>
            </header>

            <main>
                <section id="home" className="home">
                    <div className="home-content">
                        <h3>Hello</h3>
                        <h1>DAKOJU LAKSHMANA <span>SESHU</span></h1>
                        <h3 className="subtitle">I'm <span className="typing-text">{typedText}</span><span className="cursor">|</span></h3>
                        <div className="home-social">
                            {socialLinks.hero.map(social => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                        <div className="home-buttons">
                            <a href="#about" className="btn" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                            <a href="#projects" className="btn btn-outline" onClick={(e) => handleNavClick(e, '#projects')}>Project</a>
                        </div>
                    </div>
                    <div className="home-image">
                        <img src=".\assets\animate.png" alt="3D character illustration of a person sitting" />
                    </div>
                </section>

                <section id="about" className="about fade-in-section">
                    <h2 className="section-title">About</h2>
                    <div className="about-image">
                        <img src=".\assets\seshu.jpg" alt="Lakshmana Seshu Dakoju" />
                    </div>
                    <div className="about-content">
                        <h2>Hi, I'm Lakshmana Seshu Dakoju</h2>
                        <p>I am a web developer with a passion for creating beautiful and functional websites. With a background in computer science and a keen eye for design, I strive to build websites that not only look great but also provide an excellent user experience.</p>
                    </div>
                </section>

                <section id="projects" className="projects fade-in-section">
                    <h2 className="section-title">Project</h2>
                    <div className="project-container">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="card-image">
                                    <img src={project.imageUrl} alt={project.title} />
                                </div>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">Website</a>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section id="education" className="education fade-in-section">
                    <h2 className="section-title">Educations</h2>
                    <div className="education-container">
                        {education.map((edu, index) => (
                            <div key={index} className="education-box">
                                <EducationIcon icon={edu.icon} />
                                <h3>{edu.title}</h3>
                                <p>{edu.institution}</p>
                                <p className="graduated">{edu.graduated}</p>
                                {edu.percentage && <p className="graduated">{edu.percentage}</p>}
                                <p className="details">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="skills" className="skills fade-in-section">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <h3>{skill.category}</h3>
                                <p>{skill.list}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section id="experience" className="experience fade-in-section">
                    <h2 className="section-title">Experience</h2>
                    <div className="experience-content">
                        <div className="experience-text">
                           <h2>{experience.company}</h2>
                           <p className="duration">{experience.duration}</p>
                           <p>{experience.description}</p>
                           <a href={experience.website} target="_blank" rel="noopener noreferrer" className="btn">Website</a>
                        </div>
                        <div className="experience-logo">
                            <img src={experience.logo} alt="WindStream Logo" />
                        </div>
                    </div>
                </section>
            </main>

            <footer id="contact" className="footer">
                <h2 className="section-title">Contact Me</h2>
                 <div className="contact-container">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.</p>
                        <div className="info-item">
                            <p><strong><MapPin size={16} /> Location:</strong> 5-25 Nittala vari vedi, Thanelanka, East Godavari, Andhra Pradesh. 533216</p>
                        </div>
                        <div className="info-item">
                            <p><strong><Phone size={16} /> Phone:</strong> +91 7013210117</p>
                        </div>
                        <div className="info-item">
                            <p><strong><Mail size={16} /> Email:</strong> lakshmanaseshudakoju@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            {socialLinks.footer.map(social => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea rows={6} placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </footer>
            <div className="copyright-footer">
                <p>&copy; {new Date().getFullYear()} Lakshmana Seshu Dakoju. All Rights Reserved.</p>
            </div>
        </div>
    );
}