/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':['Poppins','sans-serif']
    },
    colors:{
      cblue:'#2F527B',
      cblue2:'#1D355D',
      cpurple:'rgba(96, 102, 208, 0.80)',
      cgreen:'#60BF88',
      cred:'#EA8282',
      corange:'#F9A826'
    }
    },
  },
  plugins: [],
}