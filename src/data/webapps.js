const {
  html,
  css,
  node,
  react,
  mongoDb,
  jest,
  cypress,
  nextjs,
  firebase,
  firestore,
  flow,
  zurbFoundation,
  webpack,
  graphql,
  stripe,
  youtubeAPI,
  bootstrap,
} = getTech()

module.exports = [
  {
    href: 'https://msp-bus-tracker.netlify.com/',
    placeholderImgSrc:
      'https://res.cloudinary.com/sadness/image/upload/h_1,w_1/v1528061749/trevorlitsey.com/msp-bus-tracker.gif',
    imgSrc:
      'https://res.cloudinary.com/sadness/image/upload/v1528061749/trevorlitsey.com/msp-bus-tracker.gif',
    title: 'MspBusTracker.com',
    description: `Single-page application for getting real-time bus departures from Minneapolis/St. Paul Metro Transit.`,
    tech: [html, css, react, node],
  },
  {
    href: 'https://cashflow-calc.netlify.com/',
    placeholderImgSrc:
      'https://res.cloudinary.com/sadness/image/upload/h_1,w_1/v1528061749/trevorlitsey.com/cashflow.gif',
    imgSrc:
      'https://res.cloudinary.com/sadness/image/upload/v1528061749/trevorlitsey.com/cashflow.gif',
    title: 'CashflowCalc.net',
    description: `Serverless single-page application for making cashflow projections. Draft and edit budgets in realtime with coworkers.`,
    tech: [html, css, react, firebase, webpack, jest, cypress],
  },
  {
    href: 'https://youtube-analyzer.now.sh',
    placeholderImgSrc:
      'https://res.cloudinary.com/sadness/image/upload/h_1,w_1/v1525134507/trevorlitsey.com/youtubeanalyzer.gif',
    imgSrc:
      'https://res.cloudinary.com/sadness/image/upload/v1525134507/trevorlitsey.com/youtubeanalyzer.gif',
    title: 'YouTubeAnalyzer.com',
    description: `Server-side rendered React app for gathering Youtube playlist/channel metadata.`,
    tech: [html, css, react, node, youtubeAPI, zurbFoundation, flow],
  },
  {
    href: 'https://boilerplate-boilerplate.netlify.com/',
    placeholderImgSrc:
      'https://res.cloudinary.com/sadness/image/upload/h_1,w_1/v1525134507/trevorlitsey.com/boilerplate.gif',
    imgSrc:
      'https://res.cloudinary.com/sadness/image/upload/v1525134507/trevorlitsey.com/boilerplate.gif',
    title: 'BoilerplateBoilerplate.xyz',
    description: `Drag and drop interface for drafting text documents. Download finished .txt file straight from the browser.`,
    tech: [
      html,
      css,
      bootstrap,
      react,
      node,
      firestore,
      webpack,
      jest,
      cypress,
    ],
  },
]

function getTech() {
  return {
    html: {
      name: 'HTML',
      description: 'Hypertext Markup Language',
      link: 'http://www.w3.org/html/',
    },
    css: {
      name: 'CSS',
      description: 'Cascading Style Sheets',
      link: 'http://www.w3.org/Style/CSS/',
    },
    node: {
      name: 'Node.js',
      description: 'server-side logic',
      link: 'http://nodejs.org',
    },
    react: {
      name: 'React',
      description: 'dynamic and responsive UI',
      link: 'http://reactjs.org',
    },
    mongoDb: {
      name: 'MongoDB',
      description: 'data storage',
      link: 'http://mongodb.com',
    },
    jest: {
      name: 'Jest',
      description: 'unit testing',
      link: 'http://jestjs.io',
    },
    cypress: {
      name: 'Cypress',
      description: 'end-to-end testing',
      link: 'http://cypress.io',
    },
    nextjs: {
      name: 'Next.js',
      description: 'server-side rendering',
      link: 'http://nextjs.org',
    },
    firebase: {
      name: 'Firebase',
      description: 'realtime data storage',
      link: 'http://firebase.google.com',
    },
    firestore: {
      name: 'Firestore',
      description: 'realtime data storage',
      link: 'http://cloud.google.com/firestore/',
    },
    flow: {
      name: 'Flow',
      description: 'static typing',
      link: 'http://flow.org',
    },
    zurbFoundation: {
      name: 'Foundation',
      description: 'responsive UI design',
      link: 'http://foundation.zurb.com',
    },
    webpack: {
      name: 'Webpack',
      description: 'module bundling',
      link: 'http://webpack.js.org',
    },
    graphql: {
      name: 'GraphQL',
      description: 'query language',
      link: 'http://graphql.org',
    },
    stripe: {
      name: 'Stripe',
      description: 'payment processing',
      link: 'http://stripe.com',
    },
    youtubeAPI: {
      name: 'YouTube API',
      description: 'query video data',
      link: 'https://developers.google.com/youtube/',
    },
    bootstrap: {
      name: 'Bootstrap',
      description: 'responsive UI design',
      link: 'http://getbootstrap.com',
    },
  }
}
