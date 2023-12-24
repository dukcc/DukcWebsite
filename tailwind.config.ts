import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            "1": "50px",
            "2": "36px",
            "3": "27px",
            body: "18px",
            sub: "13.5px",
        },
        spacing: {
            128: "128px",
            86: "86px",
            72: "72px",
            64: "64px",
            48: "48px",
            32: "32px",
            24: "24px",
            16: "16px",
            12: "12px",
            8: "8px",
            0: "0px",
        },
        fontFamily: {
            sans: ["Outfit"],
        },
        extend: {
            colors: {
                // card colours
                "stroke-1": "rgba(255,255,255,0.075)",
                "stroke-2": "rgba(255,255,255,0.05)",
                // colours
                selected: "#0db7ff",
                "brand-blue": "#0db7ff",
                "brand-blue-2": "#007bff",
                "brand-purple": "#4e00ff",
                red: "#F5254A",
                yellow: "#EACA22",
                green: "#26D958",
                blue: "#072DF6",
                purple: "#A012F6",
            },
            borderRadius: {
                out: "16px",
                in: "9px",
            },
            backdropBlur: {
                main: "32px",
            },
            animation: {
                "spin-slow": "spin 25s linear infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;