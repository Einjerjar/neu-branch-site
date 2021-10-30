# NEU Branch Site Project

## Stuff to follow
- `Routes` should be placed under `route_data.js`
- Routes can have a category for link grouping
- If showing a dynamic list of links, prefer importing route_data over hard coding unless completely necessary
- Use `PascalCase` for `components`
  - Capitalize all words, no spaces
  - sample nav = SampleNav
  - admission programs = AdmissionPrograms
- Use `lower_snake_case` for `non component files and folders` like utils and such
  - All lowercase, underscore as spaces
  - sample nav = sample_nav
  - admission programs = admission_programs
- Only `linkable pages` should go in the `/pages` directory
- `Reusable components` should go in the `/components` directory
- Components targeting only one `specific page` can be placed under a subfolder `named after its parent page`.
- Components with `similar or correlated functions/use` can be placed under a subfolder `named after their similar concept` (eg: nav_components).
- Try not to mess to much with configuration files such as the following
  - `windi.config.js`
  - `vite.config.js`
  - `jsconfig.json`
  - `package.json`
  - `package-lock.json`
  - `pnpm-lock.yaml`

## Setup
```sh
git clone https://github.com/Einjerjar/neu-branch-site

cd neu-branch-site

npm install
```

## Dev
```sh
npm run dev
```

## For those using VSCode
For those using VSCode, there should be some recommended extensions that will show up when you first open the project, all of which, except
[Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) are optional

And, while completely optional, it is highly recommended to install both [Windi CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)
and [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) to make css related stuff much easier to deal with (and avoid linting errors :3).