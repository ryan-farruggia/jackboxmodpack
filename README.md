## How to Use
First, make sure you have [Node](https://nodejs.org/en/download) and [Python 3](https://www.python.org/downloads/) or higher installed.
1. Download and extract the .zip of this project.
2. Open a terminal (cmd, powershell, git bash, etc.) and `cd` two folders deep into the extracted zip folder (you should be in `jackboxmodpack-main\jackboxmodpack-main`)
3. Run the following commands in order:
- `npm install`
  - this installs packages, dependencies, and other cool shit
- `npm run build`
  - this builds a condensed version of the app
- `npx electron-packager . jackboxmodpack --platform=win32 --arch=x64`
  - this bigass command builds an `.exe` that you can double click to run.
  - **Note**: this command may take a couple minutes to finish. if you think it's stuck, it's not. let it cook.
4.  Open two fresh command prompts or powershells.
  - `cd` into `jackboxmodpack-main\jackboxmodpack-main` on the first terminal.
  - Run `serve -s build`.
  - `cd` into `jackboxmodpack-main\jackboxmodpack-main\server` on the second terminal.
  - Run `python app.py`.
    - Running both of these servers is meant to be automatic when you run the .exe but this functionality will come later.
5. Click into `jackboxmodpack-win32-x64` and run the `.exe`
> **IMPORTANT**: You will need to run step 4 & 5 every time you want to use this software. Step 4 will be eliminated in the future.

This software is untested af 🔥

## Credits and other shit
[@phoxwithmp7](https://github.com/phoxwithmp7) - [Earwax mod v1.0](https://github.com/PhoxWithMP7/WaxOgg)<br>
the federal reserve for causing epic inflation<br>
taco bell baja blast<br>
obamna<br>
soDA!!<br>
i need more boolets! 🔥🥶🗣<br>
