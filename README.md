# test-app

This will serve a dummy Vue application that uses SUI design system.

## Running locally

### Prerequisites
- Create an JFrog account, setup JFrog API Key and configure npm cli. See https://siteminder.atlassian.net/wiki/spaces/~andy.shen/pages/879003226/Setting+up+npm+package+access


### Setup
```
git clone git@github.com:paula-abella/test-app.git

cd test-app

npm install

npm run serve
```

Then go to http://localhost:8080/

You should see the following:

<img width="720px" alt="test-app-demo" src="https://user-images.githubusercontent.com/84423488/174955650-633f1a29-56c1-489d-85c2-90c4e130f8ca.png">


### Updating packages
If you need to bump the SUI libraries to test the latest version(s)

```
npm i @siteminder/sui-core@latest @siteminder/sui-header@latest @siteminder/sui-sidebar@latest @siteminder/sui-icons@latest @siteminder/sui-themes@latest
```

### 
