import React, { useEffect, useRef, useState } from "react";

// Fades and slides its children in each time they scroll into view
function Reveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    // Trigger as soon as the top edge passes 85% of the screen height, so
    // tall sections don't sit blank while waiting for a percentage to show
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={visible ? "reveal visible" : "reveal"}>
      {children}
    </div>
  );
}

export default Reveal;
