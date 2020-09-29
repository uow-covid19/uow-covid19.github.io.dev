# University COVID-19 Trackers

Single-page React app intending to collect together COVID-19 data relevant to university students and staff into a glancable dashboard.

### Installation
* Clone the repository and navigate to it.
* Run `npm install` to install your packages.
* Run `npm start` to begin the development server.

### How to add a university 
* Use [this link](https://www.arcgis.com/apps/webappviewer/index.html?id=47574f7a6e454dc6a42c5f6912ed7076) to find the areas you wish to addd to the dashboard. note down the MSOA Codes.
* Run the development server and adjust `src/settings.js` to include the correct names and locations.
* Once you're happy, move the file to `src/regions/` and rename it to the region name `e.g. src/regions/{region}.js`
* Copy `package.json` as `src/packages/{region}.json` and add the correct `homepage` value (e.g. `"homepage": "{region}/"`)
* Add the region name to `.github/workflows/allsites.yaml` file, like so:
```yaml
jobs:
  build-sites:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        regions: ['warwick', 'liverpool', 'manchester', '{region}']
    # ...
```
* Raise a PR. Once merged, your site will appear under `uow-covid19.github.io/{region}/

### Contributing

Contributions are more than welcome in the form of PRs.  



This work is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0). 
