'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
const Links = ({ nav }) => {
  const pathname = usePathname();

  const isActive =
    pathname === nav.path ||
    (nav.exact === false && pathname.startsWith(nav.path));

  return (
    <motion.li
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Link
        href={nav.path}
        target={nav.target || '_self'}
        className={`relative inline-block text-white hover:text-[#D2F34C] font-semibold transition-colors ${
          isActive
            ? 'bg-linear-to-r from-[#632ee3] to-[#892CDC] bg-clip-text text-transparent border-b-2 border-[#D2F34C]'
            : ''
        }`}
      >
        <span>{nav.name}</span>

        {/* Animated underline on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-[#9f62f2]"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />

        {/* Optional: Show underline when active (extra flair) */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-[#D2F34C]"
            layoutId={`underline-${nav.name}`} // optional smooth shared transition
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    </motion.li>
  );
};

export default Links;
