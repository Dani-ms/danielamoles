# About
A template for starting static website with Gatsby.js using PostCSS and Sass.

# Development
Simply run  `yarn develop` and open `http://localhost:8000`.

# Building your site
To build your site run `yarn build`.

If you want to check the result locally run `yarn serve` to start server and open `http://localhost:9000`.

# Deploying to GitHub pages
1. Set `pathPrefix` in your `gatsby-config.js` file. It must correspond with the name of your GitHub repository. *Example:* `https://github.com/username/project-name` - your `pathPrefix` should be `/project-name`.
2. Then just run `yarn deploy` command to build the site and publish it to `gh-pages` branch of your repo.
3. Visit `https://username.github.io/project-name/`.
