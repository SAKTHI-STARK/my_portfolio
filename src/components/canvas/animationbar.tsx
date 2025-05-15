import React, { useState, useEffect } from 'react';

function AnimatedBar() {
  const [heightClass, setHeightClass] = useState('h-0');
  const baseHeightSmall = 'h-40';
  const baseHeightLarge = 'sm:h-80';

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeightClass(baseHeightLarge);
    }, 50);
    return () => clearTimeout(timer);
  }, [baseHeightLarge]);

  return (
    <div
      className={`w-1 violet-gradient origin-bottom transition-height duration-1000 ease-out ${heightClass}`}
    />
  );
}

export default AnimatedBar;