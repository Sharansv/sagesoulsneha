import React, { useRef, useEffect, useState } from 'react';

export default function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.15,
  className = '',
  style = {}
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const animations = {
    fadeInUp: {
      hidden: { opacity: 0, transform: 'translateY(50px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeInLeft: {
      hidden: { opacity: 0, transform: 'translateX(-50px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    fadeInRight: {
      hidden: { opacity: 0, transform: 'translateX(50px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    scaleIn: {
      hidden: { opacity: 0, transform: 'scale(0.85)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  const anim = animations[animation] || animations.fadeInUp;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(!visible ? anim.hidden : anim.visible),
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}
