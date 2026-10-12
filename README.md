# omarchy-webapp-launcher-electron
`omarchy-webapp-launcher-electron` is a Electron-based tool that replaces `omarchy-webapp-launcher` if you don't have a Chromium-based browser. It is licensed under the [MIT license](./LICENSE).

# Install
To install, you must download the precompiled x86-64 build from the [Releases tab](https://github.com/Infinite1024Void/omarchy-webapp-launcher-electron/releases) or, build it yourself, e.g. if you have a ARM-based chip. This will show you how to do both.

> [!NOTE]
> I am working on a installer script that will soon deprecate these methods (they will still work, but the installer script will replace them.)

## Getting the binary from releases
Requirements: FUSE

Download the omarchy-webapp-launcher-x86_64 binary and run this command in the place where you downloaded it:
```bash
mv ./omarchy-webapp-launcher-x86_64 $(which omarchy-launch-webapp)
```

The `omarchy-launch-webapp` command has now been replaced with this version.

## Compiling the binary yourself
Requirements: `npm`, `node`, FUSE, Git

First, clone this repo.

Then, install dependencies for the project (`npm install`). Then, build the app (`npm run build`), and then you will get an AppImage (in the `dist` directory).
AppImages require FUSE so go head and install that (unless you are packaging for someone else).

To check if you have FUSE, run `fusermount -V`.

To install it on your system:
```bash
mv ./dist/omarchy-webapp-launcher-*.AppImage $(which omarchy-launch-webapp)
```

And you've successfully installed your compiled copy of this app! If you just want to run it in one line:
```bash
git clone https://github.com/Infinite1024Void/omarchy-webapp-launcher-electron.git && npm install && npm run build
```

Compiling & installing one liner:
```bash
git clone https://github.com/Infinite1024Void/omarchy-webapp-launcher-electron.git && npm install && npm run build && mv ./dist/omarchy-webapp-launcher-*.AppImage $(which omarchy-launch-webapp)
```

## Testing the app
It's a little slower than a Chromium-based browser, because, it's Electron. But, it still loads. With only NodeJS and Electron, there is no IPC bridges or any bridges to Node. This project is simply an alternative to `[chromium-based-browser] --app ${url}`.

Testing if it works is easy. Just run `omarchy-launch-webapp` in your terminal. It should open up [omarchy.org](https://omarchy.org) *(by default)* and the terminal should look something like:

```bash
$ omarchy-launch-webapp
[ '/tmp/.mount_omarchXXXXXX/omarchy-webapp-launcher' ]
Loading: https://omarchy.org
```
