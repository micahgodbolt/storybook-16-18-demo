# storybook-16-18-demo
Trying to run a storybook 18 instance inside of a yarn workspace that is using react 16

The goal of this demo was to simulate a repo that was using React 16 for all of its packages (and storybooks), and then try to create a single package that used React 18 for not just the app, but for the storybook as well. (The app was easy, storybook less so).

Steps taken in this investigation

1. add React 18 to package - Local copy of React 18 installed, but storybook still uses the root React 17
2. add @storybook/react to package - nothing changes because storybook/react is hoisted to the root, and therefor uses react 17
3. add @storybook/react to root nohoist, @storybook/react now gets local copy, but @storybook/react/node_packages/react is still using 17 (even though react is only a peer-dependency)
4. add @storybook/react/react and react-dom to nohoist, no change
5. Remove all nohoisting, set root and react-18 to different storybook versions so that each would install its own copy without nohoisting issues


With nohoist, you can see that @storybook/react is properly pulled up into the react-18 package, but due to nohoist, @storybook/react resolves its own dependencies and includes the 16.x version of React instead of realying on the 18.x version installed at the package root.

![image](https://user-images.githubusercontent.com/1434956/189986550-cec70942-531c-4d10-b0d6-10b8b14b9366.png)
