import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk colors
				cyber: {
					'neon-blue': '#00f3ff',
					'neon-pink': '#ff00ff',
					'neon-purple': '#b300ff',
					'dark': '#0d0f12',
					'dark-blue': '#0a1929',
					'grid': '#1a1c25',
					'accent-pink': '#ff2957',
					'accent-blue': '#004e92',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 8px #00f3ff, 0 0 12px #00f3ff',
						boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)' 
					},
					'50%': { 
						textShadow: '0 0 16px #00f3ff, 0 0 20px #00f3ff', 
						boxShadow: '0 0 15px rgba(0, 243, 255, 0.8)' 
					},
				},
				'data-flow': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '200% 0%' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'data-flow': 'data-flow 15s linear infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(26, 28, 37, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 28, 37, 0.8) 1px, transparent 1px)',
				'gradient-glow': 'linear-gradient(90deg, #00f3ff, #0052ff, #00f3ff)',
				'gradient-pink-purple': 'linear-gradient(135deg, #ff00ff 0%, #b300ff 100%)',
				'gradient-blue': 'linear-gradient(90deg, #004e92, #00f3ff)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
