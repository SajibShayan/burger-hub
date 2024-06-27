"use client";
import { useEffect } from 'react';

const useSectionHighlight = () => {


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll<HTMLElement>('section');
      const navItems = document.querySelectorAll<HTMLLIElement>('nav li');
      const nav = document.querySelector<HTMLUListElement>('nav');

      console.log("hello bokku...", navItems.length, "nav lentgth ", nav?.clientWidth);

      if (scrollPosition >= 100) {
        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;

          if (sectionTop <= scrollPosition) {
            navItems.forEach(item => item.classList.remove('active'));
            if (navItems[index]) {
              navItems[index].classList.add('active');

            }
          }
        });
      } else {
        navItems.forEach(item => item.classList.remove('active'));
        if (navItems[0]) {
          navItems[0].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger scroll event immediately to set initial state
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
     
    };
  }, []);
};

export default useSectionHighlight;
