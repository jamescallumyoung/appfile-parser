<div align="center">
  <h1><code>appfile-parser</code></h1>

  <p>
    <strong> Conveniently install a list of apps in one go.</strong>
  </p>

  <p>
    <a href="https://www.npmjs.com/package/@jych/appfile-parser" target=_blank">
   	   <img
   	     alt="npm package"
   	     src="https://img.shields.io/npm/v/@jych/appfile-parser?style=flat-square"
   	   />
    </a>
    <a href="./LICENSE" target="_blank">
      <img
        alt="License: MIT"
        src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"
      />
    </a>
  </p>

</div>

This package contains the `appfile-parser` binary, a CLI tool to manage the installation of
Appfiles.

The Appfile format is a Brewfile-like text file containing a list of apps that can be installed using one of the supported package managers. `appfile-parser` enables you to install all of the listed apps in a single command.

Mixing apps from different package managers is supported (and even encouraged!), so you can focus on
_what_ you want, not _where_ it comes from.

# Usage

First, install this package with `npm` or `yarn`:

```shell script
# npm
npm install --global @jych/appfile-parser

# yarn
yarn global add @jych/appfile-parser
```

Next, create an Appfile such as:

```
apt nvim
apt firefox
snap insomnia
brew macdown
```

Finally, run `appfile-parser` to install the listed apps:

```shell script
appfile-parser install path/to/the.appfile
```

# Contributing

Contributions, issues and feature requests are welcome! Feel free to check the
[issues page](https://github.com/jamescallumyoung/appfile-parser/issues) for an idea of where to get
started. Contributors must follow the [contributing guide](./CONTRIBUTING.md) and
[code of conduct](./CODE_OF_CONDUCT.md).

# License

Copyright © 2020 [James Young](https://github.com/jamescallumyoung).<br />
This project is MIT licensed. See [LICENSE](LICENSE) for more details.
