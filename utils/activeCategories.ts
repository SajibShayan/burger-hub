"use client";
import { useEffect } from 'react';

const useSectionHighlight = () => {


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll<HTMLElement>('section');
      const navItems = document.querySelectorAll<HTMLLIElement>('nav li');

      console.log("hello bokku...", navItems, "here is section   ", sections);

      if (scrollPosition >= 100) {
        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;

          if (sectionTop <= scrollPosition) {
            navItems.forEach(item => item.classList.remove('active'));
            if (navItems[index]) {
              navItems[index].classList.add('active');
              navItems[index].scrollIntoView({ behavior: "smooth", inline: "center" });

            }
          }
        });
      } else {
        navItems.forEach(item => item.classList.remove('active'));
        if (navItems[0]) {
          navItems[0].classList.add('active');
          navItems[0].scrollIntoView({ behavior: "smooth", inline: "center" });
        }
      }
    };

     // Function to handle the click event on nav links
     const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A') {
        event.preventDefault(); // Prevent default link behavior

        const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav a');
        navLinks.forEach(link => link.classList.remove('active'));

        target.classList.add('active');
        target.scrollIntoView({ behavior: "smooth", inline: "center" });

        // Smoothly scroll to the corresponding section
        const sectionId = target.getAttribute('href')?.substring(1);
        const section = document.getElementById(sectionId ?? '');
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Add event listeners
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });


    window.addEventListener('scroll', handleScroll);

    // Trigger scroll event immediately to set initial state
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
};

export default useSectionHighlight;
