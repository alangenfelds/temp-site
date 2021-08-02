module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "MEMX Site",
    description: "MEMX web portal",
  },
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    PARALLEL_SOURCING: false,
    DEV_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-plugin-ffmpeg",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-remark-videos`,
      options: {
        pipelines: [
          {
            name: "vp9",
            transcode: (chain) =>
              chain
                .videoCodec("libvpx-vp9")
                .noAudio()
                .outputOptions(["-crf 20", "-b:v 0"]),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: "webm",
          },
          {
            name: "h264",
            transcode: (chain) =>
              chain.videoCodec("libx264").noAudio().videoBitrate("1000k"),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: "mp4",
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: "./src/pages/",
    //   },
    //   __key: "pages",
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/persons`,
      },
    },
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {},
    },
  ],
};
