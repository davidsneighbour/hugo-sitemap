<!--- CARD BEGIN --->

![DNB-Hugo/HEAD](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/HEAD](.github/github-card-light.png#gh-light-mode-only)

<!--- CARD END --->

# GoHugo Component / Sitemap

This is a Hugo theme component with layouts to add a configurable sitemap to your website. Hugo itself has internal templates that add sitemaps, but this component has additional setup options per page.

## Installing

Step 1: enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/davidsneighbour/hugo-sitemap"
```

The next time you run `hugo` it will download the latest version of the module.

## Updating

```shell
hugo mod get -u github.com/davidsneighbour/hugo-sitemap
hugo mod get -u # update all modules
```

## Usage

There is no need to configure anything without having any special needs. Add the module to your repository structure and run it. Once you ran `hugo` you will find a file `sitemap.xml` in your `public` directory. This is the file you want to submit to search engines.

If you are using the [Robots component](https://github.com/davidsneighbour/hugo-robots), then your resulting `robots.txt` will have a pointer to the sitemap file as well.

<!--- COMPONENTS BEGIN --->

# Other [GoHugo](https://gohugo.io/) components by [@davidsneighbour](https://github.com/davidsneighbour/)

<!-- prettier-ignore -->
| Component                                                                     | Description                                                                                                                          |
| :---------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [hugo-auditor](https://github.com/davidsneighbour/hugo-auditor)               |                                                                                                                                      |
| [hugo-debug](https://github.com/davidsneighbour/hugo-debug) :mage_man:        | Debug EVERYTHING in GoHugo.                                                                                                          |
| [hugo-errors](https://github.com/davidsneighbour/hugo-errors)                 | A Hugo module that adds more versatile error pages to a site.                                                                        |
| [hugo-feeds](https://github.com/davidsneighbour/hugo-feeds)                   | Implements various configurable feed formats.                                                                                        |
| [hugo-functions](https://github.com/davidsneighbour/hugo-functions)           | A Hugo theme component with helper functions for other projects.                                                                     |
| [hugo-giscus](https://github.com/davidsneighbour/hugo-giscus)                 | The Giscus comment system layout for GoHugo.                                                                                         |
| [hugo-head](https://github.com/davidsneighbour/hugo-head)                     | A GoHugo theme component that solves the old question of "What tags belong into the `<head>` tag of my website?"                     |
| [hugo-hooks](https://github.com/davidsneighbour/hugo-hooks)                   | Hooks for GoHugo layouts. An easy way for theme developers to let users add to their themes.                                         |
| [hugo-humans](https://github.com/davidsneighbour/hugo-humans)                 | Your site is made by humans. Humans.txt is naming them.                                                                              |
| [hugo-icons](https://github.com/davidsneighbour/hugo-icons)                   | Icons for your Hugo website.                                                                                                         |
| [hugo-internals](https://github.com/davidsneighbour/hugo-internals)           | Better internal templates for GoHugo                                                                                                 |
| [hugo-netlification](https://github.com/davidsneighbour/hugo-netlification)   | a collection of tools that optimize your site on Netlify                                                                             |
| [hugo-opensearch](https://github.com/davidsneighbour/hugo-opensearch)         | configuration for Open Search                                                                                                        |
| [hugo-pictures](https://github.com/davidsneighbour/hugo-pictures)             |                                                                                                                                      |
| [hugo-pwa](https://github.com/davidsneighbour/hugo-pwa)                       | Automatically turns your site into a PWA                                                                                             |
| [hugo-renderhooks](https://github.com/davidsneighbour/hugo-renderhooks)       | render hooks for Markdown markup                                                                                                     |
| [hugo-robots](https://github.com/davidsneighbour/hugo-robots)                 | Add a customizable robots.txt to your website.                                                                                       |
| [hugo-schema](https://github.com/davidsneighbour/hugo-schema)                 |                                                                                                                                      |
| [hugo-search-algolia](https://github.com/davidsneighbour/hugo-search-algolia) |                                                                                                                                      |
| [hugo-security](https://github.com/davidsneighbour/hugo-security)             | Add a security.txt to your site with information about your preferred procedures to notify the developer team about security issues. |
| [hugo-sitemap](https://github.com/davidsneighbour/hugo-sitemap)               |                                                                                                                                      |
| [hugo-social](https://github.com/davidsneighbour/hugo-social)                 |                                                                                                                                      |
| [hugo-workflows](https://github.com/davidsneighbour/hugo-workflows)           | A collection of Github Actions/Workflows to optimise your work with GoHugo.                                                          |
| [hugo-youtube](https://github.com/davidsneighbour/hugo-youtube)               | A shortcode and partial for lite and speedy youtube embeds.                                                                          |

<!--lint disable no-missing-blank-lines -->
<!--- COMPONENTS END --->
