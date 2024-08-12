Please note I have done the following beyond the initial ask:

- implemented CK Editor for the body field in the blog post
- implemented some basic metadata fields/seo in Strapi and next/head on blog posts
- configured the next app for SSR

To run you will need to first launch strapi and create a token for the NextJs app that give it access to both the blog-post and video collections. Note the token and create a .env.local file in the NextJs app with the following values:

STRAPI_API_URL=http://localhost:1337/api
STRAPI_API_TOKEN=[the token you just created]

Then create at least one blog post and at least one video with all the relevant fields populated as I did not take the time to build in much fault tolerance, something that would be present in production code from me normally.

Please note there are a few bugs, mostly things I left unfinished in the interest of time. Specifically I did not get the video-player working locally, though you will see data is passed through and the individual pages load.

