# omarchy-webapp-launcher-electron
`omarchy-webapp-launcher-electron` is a Electron-based tool that replaces `omarchy-webapp-launcher` if you don't have a Chromium-based browser. It is licensed under the [MIT license](./LICENSE)

# Install
To install, you must download the precompiled x86-64 build from the [Releases tab](https://github.com/Infinite1024Void/omarchy-webapp-launcher-electron/releases) or, build it yourself, e.g. if you have a ARM-based chip. This will show you how to do both.

> [!NOTE]
> I am working on a installer script that will soon deprecate these methods (they will still work, but the installer script will replace them.)

## Getting the binary from releases
Requirements: FUSE

Download the omarchy-webapp-launcher-x86_64 binary and run this command in the place where you downloaded it:
```bash
sudo mv ./omarchy-webapp-launcher-x86_64 $(which omarchy-launch-webapp)
```
And you're all done!

## Compiling the binary yourself
Requirements: `npm`, `node`, FUSE, Git

First, `git clone` this repo.

Then, `npm install` the project. Then, run `npm run build`, you will get an AppImage (in the `dist` directory).
AppImages require FUSE so go head and install that.

To check if you have FUSE, run `fusermount -V`.

Now, run this command:
```bash
cd dist
mv ./omarchy-webapp-launcher-*.AppImage $(which omarchy-launch-webapp)
```

And you've sucessfully compiled the binary and put it in! If you want to just wish copy and paste, here you go.
```bash
git clone https://github.com/Infinite1024Void/omarchy-webapp-launcher-electron.git
npm install
npm run build
cd dist
mv ./omarchy-webapp-launcher-*.AppImage $(which omarchy-launch-webapp)
```

## Testing if it works
It's a little slower than a Chromium-based browser, because, it's Electron. But, it still loads. With node + electron, I haven't put any special capabilities to your operating system in. Use this as a alternative to `chromium --app ${url}`.

Testing if it works is easy. Just run `omarchy-launch-webapp` in your terminal. It should open up [omarchy.org](https://omarchy.org) and the terminal should look something like:

```bash
$ omarchy-launch-webapp
[ '/tmp/.mount_omarch4hIEjb/omarchy-webapp-launcher' ]
Loading: https://omarchy.org
```
```
```
```
```
