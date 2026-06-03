import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};

export const useScrollAnimation = (elementRef, options = {}) => {
  const defaults = {
    duration: 0.8,
    ease: 'power2.out',
    ...options
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: defaults.duration,
        ease: defaults.ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [elementRef, defaults]);
};

export const useParallaxScroll = (elementRef, depth = 0.5) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.to(element, {
      y: () => window.innerHeight * depth,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [elementRef, depth]);
};

export const useStaggerAnimation = (containerRef, itemSelector, options = {}) => {
  const defaults = {
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out',
    ...options
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(itemSelector);

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: defaults.duration,
        stagger: defaults.stagger,
        ease: defaults.ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [containerRef, itemSelector, defaults]);
};

export const useHoverAnimation = (elementRef) => {
  const handleMouseEnter = () => {
    gsap.to(elementRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(elementRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return { handleMouseEnter, handleMouseLeave };
};
