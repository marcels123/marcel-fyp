import type { Config } from 'postcss-load-config';

/**
 * PostCSS Configuration
 * 
 * This file configures PostCSS plugins for CSS processing,
 * including Tailwind CSS and Autoprefixer.
 * 
 * @author [Your Name]
 * @version 1.0.0
 * @since 2024
 */

const config: Config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config; 