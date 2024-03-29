// Option 3

// const purgecss = [
//   '@fullhuman/postcss-purgecss',
//   {
//     // Specify the paths to all of the template files
//     content: [
//       './pages/**/*.{js,jsx,ts,tsx}',
//       './components/**/*.{js,jsx,ts,tsx}',
//     ],
//     // This is the function used to extract class names from the templates
//     defaultExtractor: (content) => {
//       // Capture as liberally as possible, including things like `h-(screen-1.5)`
//       const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
//       // Capture classes within other delimiters like .block(class="w-1/2") in Pug
//       const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
//       return broadMatches.concat(innerMatches);
//     },
//   },
// ];

// module.exports = {
//   plugins: [
//     "tailwindcss",
//     process.env.NODE_ENV === 'production' ? purgecss : undefined,
//     "postcss-preset-env",
//   ],
// };

// Option 2 -> https://stackoverflow.com/questions/62345671/nextjs-with-global-css-import-fail-in-production-mode

module.exports = {
    plugins: ['tailwindcss', 'postcss-preset-env']
};
