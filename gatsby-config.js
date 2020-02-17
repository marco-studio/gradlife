module.exports = {
  siteMetadata: {
    title: `Grad Life by the Horns`,
    description: `Grad Life by the Horns is a podcast covering every element of graduate life. From the existential dread that accompanies the last few months of university, to entering the graduate wasteland jobless and £30,000 in debt, this bi-weekly show will offer practical advice and comforting stories to help ease your stress. Covering topics such as mental health, job applications, CV and cover letter tips, budgeting, and finding your passion – nothing is off limits! So, tune in every other week to hear us chat to graduates, students and experts about everything it takes to help you Grad Life by the Horns!`,
    author: `By BECKI HILLS AND SOPHIE SCULLY`,
    twitter: ``,
    instagram: `https://www.instagram.com/gradlifebythehorns/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1479242472?ct=podlink&mt=2`,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9ncmFkbGlmZWJ5dGhlaG9ybnMubGlic3luLmNvbS9yc3M=`,
    pocket: `https://pca.st/itunes/1479242472`,
    spotify: `https://open.spotify.com/show/6Py9zSI3n8ChYMS5zDNZg1`,
    overcast: `https://overcast.fm/itunes1479242472`,
    castbox: `https://castbox.fm/vic/1479242472`,
    castro: `https://castro.fm/itunes/1479242472`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Fgradlifebythehorns.libsyn.com%2Frss`,
    stitcher: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://gradlifebythehorns.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
