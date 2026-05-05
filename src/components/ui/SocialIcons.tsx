/**
 * Minimal brand-accurate SVG icons for social platforms.
 * Used because lucide-react does not include social brand icons.
 * Replace placeholder social links after PixelNiti social pages are created.
 */

import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 16): SVGProps<SVGSVGElement> => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": true,
});

export function FacebookIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M10 3H8C6.9 3 6 3.9 6 5v2H4.5v2.5H6V14h3V9.5h2l.5-2.5H9V5a.5.5 0 01.5-.5H10V3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="11.3" cy="4.7" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="1" y="3.5" width="14" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 5.8l4 2.2-4 2.2V5.8z" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M13 2.5L9 7.2 13.5 13.5h-3L8 9.8 4.5 13.5H2l4.2-5L2 2.5h3l2.3 3.4L10.5 2.5H13z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5 6.5v5M5 4.5v.5M8 6.5v1.8c0 1.5 1.5 3.2 3.5 3.2V6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type SocialPlatform = "facebook" | "instagram" | "youtube" | "x" | "linkedin";

export const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  x: XIcon,
  linkedin: LinkedinIcon,
} as const;
