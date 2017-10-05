# studs-cli

CLI tools for generating [`studs`][1] themes and components, building [`studs`][1] libraries, and serving styleguides.

## Available Commands

* `studs generate component`: Begins an interactive prompt to generate a new component boilerplate. The new component will import your `theme` and setup an initial registration. It will also add a markdown file for documentation, which will include up-to-date documentation of all your Studs-configurable properties automatically!

* `studs generate bootstrap`: Constructs some scaffolding to jumpstart a component library with `react-studs`. At the time of writing, this is pretty minimal - just a default theme.

* `studs styleguide`: Runs a [`react-styleguidist`][2] powered styleguide GUI so you can peruse and test your components in real-time.

* `studs build`: Builds your styleguide into a set of static files which you can host using Github Pages or your preferred static content provider. Perfect for documenting your library!

[1]: https://github.com/a-type/studs
[2]: https://react-styleguidist.js.org/
