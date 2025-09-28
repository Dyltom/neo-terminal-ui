/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
  			matrix: {
  				black: '#0a0a0a',
  				dark: '#001100',
  				green: {
  					'100': '#00ff41',
  					'200': '#00cc33',
  					'300': '#009926',
  					'400': '#006619',
  					'500': '#003d0f'
  				},
  				amber: '#ffb000',
  				red: '#ff0040'
  			},
  			border: 'hsl(var(--border, 142 76% 36%))',
  			input: 'hsl(var(--input, 142 76% 36%))',
  			ring: 'hsl(var(--ring, 142 76% 36%))',
  			background: 'hsl(var(--background, 0 0% 4%))',
  			foreground: 'hsl(var(--foreground, 142 100% 50%))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary, 142 100% 50%))',
  				foreground: 'hsl(var(--primary-foreground, 0 0% 4%))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary, 142 50% 30%))',
  				foreground: 'hsl(var(--secondary-foreground, 142 100% 50%))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive, 0 100% 50%))',
  				foreground: 'hsl(var(--destructive-foreground, 0 0% 4%))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted, 142 30% 15%))',
  				foreground: 'hsl(var(--muted-foreground, 142 60% 50%))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent, 39 100% 50%))',
  				foreground: 'hsl(var(--accent-foreground, 0 0% 4%))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover, 0 0% 4%))',
  				foreground: 'hsl(var(--popover-foreground, 142 100% 50%))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card, 120 100% 4%))',
  				foreground: 'hsl(var(--card-foreground, 142 100% 50%))'
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius, 0)',
  			md: 'calc(var(--radius, 0) - 2px)',
  			sm: 'calc(var(--radius, 0) - 4px)'
  		},
  		fontFamily: {
  			mono: [
  				'Share Tech Mono',
  				'Courier New',
  				'monospace'
  			],
  			terminal: [
  				'var(--terminal-font)',
  				'Share Tech Mono',
  				'Courier New',
  				'monospace'
  			]
  		},
  		boxShadow: {
  			'glow-green': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
  			'glow-green-soft': '0 0 5px #00ff41, 0 0 10px #00ff41',
  			'glow-amber': '0 0 10px #ffb000, 0 0 20px #ffb000',
  			'glow-red': '0 0 10px #ff0040, 0 0 20px #ff0040',
  			terminal: 'var(--glow-green-soft), inset 0 0 20px rgba(0, 255, 65, 0.1)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: 0
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
  					height: 0
  				}
  			},
  			'flicker': {
  				'0%': {
  					opacity: '0.97'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0.98'
  				}
  			},
  			'scanlines': {
  				'0%': {
  					backgroundPosition: '0 0'
  				},
  				'100%': {
  					backgroundPosition: '0 10px'
  				}
  			},
  			'blink': {
  				'0%, 49%': {
  					opacity: '1'
  				},
  				'50%, 100%': {
  					opacity: '0'
  				}
  			},
  			'typing': {
  				from: {
  					width: '0'
  				},
  				to: {
  					width: '100%'
  				}
  			},
  			'boot-sequence': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.8)'
  				},
  				'50%': {
  					opacity: '0.5'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'glitch': {
  				'0%, 100%': {
  					transform: 'translate(0)',
  					filter: 'hue-rotate(0deg)'
  				},
  				'20%': {
  					transform: 'translate(-2px, 2px)',
  					filter: 'hue-rotate(90deg)'
  				},
  				'40%': {
  					transform: 'translate(2px, -2px)',
  					filter: 'hue-rotate(180deg)'
  				},
  				'60%': {
  					transform: 'translate(-2px, -2px)',
  					filter: 'hue-rotate(270deg)'
  				},
  				'80%': {
  					transform: 'translate(2px, 2px)',
  					filter: 'hue-rotate(360deg)'
  				}
  			},
  			'pulse': {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.05)'
  				}
  			},
  			'slideUp': {
  				from: {
  					transform: 'translateX(-50%) translateY(100%)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateX(-50%) translateY(0)',
  					opacity: '1'
  				}
  			},
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'flicker': 'flicker 0.15s infinite',
  			'scanlines': 'scanlines 8s linear infinite',
  			'blink': 'blink 1s infinite',
  			'typing': 'typing 2s steps(40, end)',
  			'boot-sequence': 'boot-sequence 1s ease-out',
  			'glitch': 'glitch 0.3s infinite',
  			'pulse': 'pulse 2s infinite',
  			'slideUp': 'slideUp 0.3s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}