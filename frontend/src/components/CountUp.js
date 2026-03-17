import { useState, useEffect, useRef } from 'react';

export default function CountUp({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Parse the numeric part from the end value
  const numericEnd = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, ''), 10) : end;
  const hasSuffix = typeof end === 'string' ? end.replace(/[0-9]/g, '') : suffix;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || isNaN(numericEnd)) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericEnd));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [started, numericEnd, duration]);

  // For non-numeric values like "1:1", just show them directly
  if (isNaN(numericEnd)) {
    return <span ref={ref}>{prefix}{end}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}{started ? count : 0}{hasSuffix || suffix}
    </span>
  );
}
