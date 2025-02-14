# ComETS-Site-Web


## Proposed Modifications
If you have any modifications proposal please add it to the list below and When approved implement and push to a new branch named "ComETS-NameOfModif"

## TO DO
- Mobile Responsiveness
    - Prototypes
      - Atlas Page
        - Could be done after deploiment (not necessarily ugly)
- Add Atlas Logo once made
    - A faire apres le deploiement
- Add Team Page with every member and their info/depart./linkedIn
    - A faire apres le deploiement
- Rajouter Captcha sur contact form 
    - A faire apres le deploiement



##### DONE 
- Change Contact us form token to comets token 
  - Uncomment before deployment DONE
- Change Images in Home Page for slider and Innovation
- View documentation on "vueper-slides" to fix image sizing in slider 
  - Changed to vue3-carousel
- Change Image in Halley Page for Side image of Halley
- Add Novasteel Logo in sponsors page 
- (Maybe) Change Sponsor Logo sizing to logo Specific sizing for more uniformity
-  Routing page sponsors 22-23  24-25 (Same as prototype routing page so that we can see the different sponsors) 
   - Pas appliquer tant qu'on a pas la liste des sponsors 24-25<

- Mobile Responsiveness DONE
    - Navbar
    - Home Page
    - Contact Us (Map sizing mobile + all page Tablet)
    - Sponsors Page (Sponsors image Sizing for Phones + Partner Plan for phones)
        - Sponsors Page (Sponsors image Sizing for Ipad)
    - Prototypes
      - Halley Page
      - Routing Page

## Important Notice

All modifications are to be pushed to a personal branch then merge-requests to the "master" branch. Gitlab Pages is still under tests with branch "main" DO NOT PUSH TO MAIN. 

If you have experience with Gitlab Pages please contact LOG LEAD on discord server to discuss next steps for deployment. 

## Recommended to Follow setup below for development

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

!!! V Volar is deprecated and has been removed from the project it is no longer needed

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
