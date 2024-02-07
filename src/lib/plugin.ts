import plugin from "tailwindcss/plugin";
import defaultTheme from "../theme/default";
import { CSSRuleObject } from "tailwindcss/types/config";

const themesMap: {
  [key: string]: CSSRuleObject;
} = {
  default: defaultTheme,
};

export const meldPlugin = (theme = "default") => {
  return plugin(
    // 1. Add CSS variable definition to the base layer
    function ({ addBase }) {
      addBase(themesMap[theme]);
      addBase({
        "*": {
          "@apply border-primary": {},
        },
        body: {
          "@apply bg-primary text-primary": {},
        },
      });
    },

    // 2. Extend the tailwind theme with "themable" utility
    {
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        colors: {
          inherit: "inherit",
          transparent: "transparent",
          current: "currentColor",
          white: "hsl(var(--white))",
          black: "hsl(var(--black))",

          utility: {
            gray: {
              50: "hsl(var(--gray-50))",
              100: "hsl(var(--gray-100))",
              200: "hsl(var(--gray-200))",
              300: "hsl(var(--gray-300))",
              400: "hsl(var(--gray-400))",
              500: "hsl(var(--gray-500))",
              600: "hsl(var(--gray-600))",
              700: "hsl(var(--gray-700))",
              800: "hsl(var(--gray-800))",
              900: "hsl(var(--gray-900))",
              950: "hsl(var(--gray-950))",
            },
            brand: {
              50: "hsl(var(--brand-50))",
              100: "hsl(var(--brand-100))",
              200: "hsl(var(--brand-200))",
              300: "hsl(var(--brand-300))",
              400: "hsl(var(--brand-400))",
              500: "hsl(var(--brand-500))",
              600: "hsl(var(--brand-600))",
              700: "hsl(var(--brand-700))",
              800: "hsl(var(--brand-800))",
              900: "hsl(var(--brand-900))",
              950: "hsl(var(--brand-950))",
            },
            danger: {
              50: "hsl(var(--danger-50))",
              100: "hsl(var(--danger-100))",
              200: "hsl(var(--danger-200))",
              300: "hsl(var(--danger-300))",
              400: "hsl(var(--danger-400))",
              500: "hsl(var(--danger-500))",
              600: "hsl(var(--danger-600))",
              700: "hsl(var(--danger-700))",
              800: "hsl(var(--danger-800))",
              900: "hsl(var(--danger-900))",
              950: "hsl(var(--danger-950))",
            },
            warning: {
              50: "hsl(var(--warning-50))",
              100: "hsl(var(--warning-100))",
              200: "hsl(var(--warning-200))",
              300: "hsl(var(--warning-300))",
              400: "hsl(var(--warning-400))",
              500: "hsl(var(--warning-500))",
              600: "hsl(var(--warning-600))",
              700: "hsl(var(--warning-700))",
              800: "hsl(var(--warning-800))",
              900: "hsl(var(--warning-900))",
              950: "hsl(var(--warning-950))",
            },
            success: {
              50: "hsl(var(--success-50))",
              100: "hsl(var(--success-100))",
              200: "hsl(var(--success-200))",
              300: "hsl(var(--success-300))",
              400: "hsl(var(--success-400))",
              500: "hsl(var(--success-500))",
              600: "hsl(var(--success-600))",
              700: "hsl(var(--success-700))",
              800: "hsl(var(--success-800))",
              900: "hsl(var(--success-900))",
              950: "hsl(var(--success-950))",
            },
            info: {
              50: "hsl(var(--info-50))",
              100: "hsl(var(--info-100))",
              200: "hsl(var(--info-200))",
              300: "hsl(var(--info-300))",
              400: "hsl(var(--info-400))",
              500: "hsl(var(--info-500))",
              600: "hsl(var(--info-600))",
              700: "hsl(var(--info-700))",
              800: "hsl(var(--info-800))",
              900: "hsl(var(--info-900))",
              950: "hsl(var(--info-950))",
            },
          },
        },

        extend: {
          backgroundColor: {
            inherit: "inherit",
            transparent: "transparent",
            current: "currentColor",
            primary: "hsl(var(--background-primary))",
            secondary: "hsl(var(--background-secondary))",
            tertiary: "hsl(var(--background-tertiary))",
            quarterary: "hsl(var(--background-quarterary))",
            brand: "hsl(var(--background-brand))",
            success: "hsl(var(--background-success))",
            danger: "hsl(var(--background-danger))",
            info: "hsl(var(--background-info))",
            foreground: {
              primary: {
                DEFAULT: "hsl(var(--foreground-primary))",
                hover: "hsl(var(--foreground-primary--hover))",
              },
              secondary: {
                DEFAULT: "hsl(var(--foreground-secondary))",
                hover: "hsl(var(--foreground-secondary--hover))",
              },
              tertiary: {
                DEFAULT: "hsl(var(--foreground-tertiary))",
                hover: "hsl(var(--foreground-tertiary--hover))",
              },
              quarterary: {
                DEFAULT: "hsl(var(--foreground-quarterary))",
                hover: "hsl(var(--foreground-quarterary--hover))",
              },
              quinary: {
                DEFAULT: "hsl(var(--foreground-quinary))",
                hover: "hsl(var(--foreground-quarterary--quinary))",
              },
              brand: {
                DEFAULT: "hsl(var(--foreground-brand))",
                secondary: "hsl(var(--foreground-brand--secondary))",
                tertiary: "hsl(var(--foreground-brand--tertiary))",
                quarterary: "hsl(var(--foreground-brand--quarterary))",
                hover: "hsl(var(--foreground-brand--hover))",
              },
              success: {
                DEFAULT: "hsl(var(--foreground-success))",
                secondary: "hsl(var(--foreground-success--secondary))",
                tertiary: "hsl(var(--foreground-success--tertiary))",
                quarterary: "hsl(var(--foreground-success--quarterary))",
                hover: "hsl(var(--foreground-success--hover))",
              },
              info: {
                DEFAULT: "hsl(var(--foreground-info))",
                secondary: "hsl(var(--foreground-info--secondary))",
                tertiary: "hsl(var(--foreground-info--tertiary))",
                quarterary: "hsl(var(--foreground-info--quarterary))",
                hover: "hsl(var(--foreground-info--hover))",
              },
              danger: {
                DEFAULT: "hsl(var(--foreground-danger))",
                secondary: "hsl(var(--foreground-danger--secondary))",
                tertiary: "hsl(var(--foreground-danger--tertiary))",
                quarterary: "hsl(var(--foreground-danger--quarterary))",
                hover: "hsl(var(--foreground-danger--hover))",
              },
              warning: {
                DEFAULT: "hsl(var(--foreground-warning))",
                secondary: "hsl(var(--foreground-warning--secondary))",
                tertiary: "hsl(var(--foreground-warning--tertiary))",
                quarterary: "hsl(var(--foreground-warning--quarterary))",
                hover: "hsl(var(--foreground-warning--hover))",
              },
            },
          },
          textColor: {
            inherit: "inherit",
            transparent: "transparent",
            current: "currentColor",
            primary: {
              DEFAULT: "hsl(var(--text-primary))",
              inverted: "hsl(var(--text-primary--inverted))",
            },
            secondary: {
              DEFAULT: "hsl(var(--text-secondary))",
              inverted: "hsl(var(--text-secondary--inverted))",
            },
            tertiary: {
              DEFAULT: "hsl(var(--text-tertiary))",
              inverted: "hsl(var(--text-tertiary--inverted))",
            },
            disabled: "hsl(var(--text-disabled))",
            white: "hsl(var(--text-white))",
            placeholder: "hsl(var(--text-placeholder))",
            brand: {
              DEFAULT: "hsl(var(--text-brand))",
              hover: "hsl(var(--text-brand--hover))",
              focused: "hsl(var(--text-brand--focused))",
            },
            success: {
              DEFAULT: "hsl(var(--text-success))",
              hover: "hsl(var(--text-success--hover))",
              focused: "hsl(var(--text-success--focused))",
            },
            danger: {
              DEFAULT: "hsl(var(--text-danger))",
              hover: "hsl(var(--text-danger--hover))",
              focused: "hsl(var(--text-danger--focused))",
            },
            warning: {
              DEFAULT: "hsl(var(--text-warning))",
              hover: "hsl(var(--text-warning--hover))",
              focused: "hsl(var(--text-warning--focused))",
            },
            info: {
              DEFAULT: "hsl(var(--text-info))",
              hover: "hsl(var(--text-info--hover))",
              focused: "hsl(var(--text-info--focused))",
            },
          },
          borderColor: {
            inherit: "inherit",
            transparent: "transparent",
            current: "currentColor",
            primary: "hsl(var(--border-primary))",
            secondary: "hsl(var(--border-secondary))",
            tertiary: "hsl(var(--border-tertiary))",
            brand: {
              DEFAULT: "hsl(var(--border-brand))",
              solid: "hsl(var(--border-brand--solid))",
            },
            success: "hsl(var(--border-success))",
            warning: "hsl(var(--border-warning))",
            info: "hsl(var(--border-info))",
            danger: "hsl(var(--border-danger))",
          },
          ringColor: {
            white: "hsl(var(--white))",
            primary: "hsl(var(--outline-primary))",
            secondary: "hsl(var(--outline-secondary))",
            tertiary: "hsl(var(--outline-tertiary))",
            quarterary: "hsl(var(--outline-quarterary))",
            brand: "hsl(var(--outline-brand))",
            success: "hsl(var(--outline-success))",
            info: "hsl(var(--outline-info))",
            warning: "hsl(var(--outline-warning))",
            danger: "hsl(var(--outline-danger))",
          },
          outlineColor: {
            primary: "hsl(var(--outline-primary))",
            secondary: "hsl(var(--outline-secondary))",
            tertiary: "hsl(var(--outline-tertiary))",
            quarterary: "hsl(var(--outline-quarterary))",
            brand: "hsl(var(--outline-brand))",
            success: "hsl(var(--outline-success))",
            info: "hsl(var(--outline-info))",
            warning: "hsl(var(--outline-warning))",
            danger: "hsl(var(--outline-danger))",
          },
          ringOffsetColor: {
            background: "inherit",
          },
          keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
            "collapsible-down": {
              from: { height: "0" },
              to: { height: "var(--radix-collapsible-content-height)" },
            },
            "collapsible-up": {
              from: { height: "var(--radix-collapsible-content-height)" },
              to: { height: "0" },
            },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "collapsible-down": "collapsible-down 0.2s ease-in-out",
            "collapsible-up": "collapsible-up 0.2s ease-in-out",
          },
        },
      },
    }
  );
};
