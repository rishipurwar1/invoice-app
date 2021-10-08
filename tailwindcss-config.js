module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Spartan", "sans serif"],
      },
      gridTemplateColumns: {
        body: "96px 1fr",
        card: "5rem 9rem 1fr min-content min-content min-content",
      },
      colors: {
        primaryOne: "#1e2139",
        primaryTwo: "#141625",
        secondaryOne: "#9277ff",
        secondaryTwo: "#7C5DFA",
        secondaryThree: "#7e88c3",
        buttonOne: "#ec5757",
        buttonTwo: "#f9fafe",
        badgeOne: "#33d6a0",
        badgeBgOne: "rgba(51, 214, 159, 0.06)",
        badgeBgTwo: "rgba(255, 143, 0, 0.06)",
        badgeBgThree: "rgba(223, 227, 250, 0.06)",
        badgeTwo: "#ff9100",
        neutral: "#dfe3fa",
        borderOne: "#252945",
        body: {
          bg: "#141625",
        },
        sidebar: {
          bg: "#1F2139",
          border: "#494E6E",
        },
        form: {
          bg: "#ffffff",
          fieldBg: "#ffffff",
          fieldBorder: "#DFE3FA",
        },
        logo: {
          primary: "#7C5DFA",
          secondary: "#9277FF",
        },
        btn: {
          primary: {
            bg: "#f9fafe",
            hover: "#dfe3fa",
            text: "#7e88c3",
          },
          secondary: {
            bg: "#363b53",
            hover: "#0c0e16",
            text: "#888eb0",
          },
          tertiary: {
            bg: "#F9FAFE",
            hover: "#DFE3FA",
            text: "#7E88C3",
          },
        },
        invoiceItem: {
          bg: "#ffffff",
        },
        invoiceStatus: {
          bg: "rgba(55, 59, 83, 0.06)",
          text: "#373B53",
        },
        invoiceTable: {
          bg: "#f9fafe",
          footerBg: "#373b53",
        },
        popup: {
          bg: "#ffffff",
        },
        dropdown: {
          bg: "#ffffff",
          shadow: "rgba(72, 84, 159, 0.25)",
        },
        checkbox: {
          bg: "#dfe3fa",
        },
        text: {
          heading: "#0C0E16",
          bodyOne: "#dfe3fa",
          bodyB: "#858BB2",
          formLabel: "#7E88C3",
          link: "#0c0e16",
          linkHover: "#7e88c3",
          placeholder: "rgba(12, 14, 22, .4)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
