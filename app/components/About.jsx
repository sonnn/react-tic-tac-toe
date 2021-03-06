import React from 'react';

const aboutStyle = {
  fontSize: '1.4em'
};

const About = () =>
(
  <div style={aboutStyle}>
    <h1>About</h1>

    <h2>Technologies</h2>
    <p>The app is using the below technologies:</p>
    <ul>
      <li><a href="https://facebook.github.io/react/" target="_blank">React</a> - for building the client-site app and components</li>
      <li><a href="https://webpack.github.io/" target="_blank">Webpack</a> - for bundling and building</li>
      <li><a href="https://babeljs.io/" target="_blank">Babel.js</a> - for compiling Es6 and JSX</li>
      <li><a href="https://mobx.js.org/" target="_blank">Mobx</a> - for State management</li>
      <li><a href="https://github.com/ReactTraining/react-router" target="_blank">React Router</a> - for client-side (browser) routing</li>
      <li><a href="https://react-bootstrap.github.io/" target="_blank">React Bootstrap</a> - for building the UI / make the app responsive</li>
      <li><a href="https://lodash.com/" target="_blank">Lodash</a> - for utility library</li>
      <li><a href="http://eslint.org/" target="_blank">ESLint</a> - for ES6 linting using the <a href="http://standardjs.com/" target="_blank">JavaScript Standard Style</a></li>
    </ul>

    <h2>File Structure</h2>
    <h3>General</h3>
    <p>
      Nothing special is happening on the <code>root</code> level of the repository. The only files that probably need further explanation are the <code>index.html, package.json and webpack.config.babel.js</code>.
    </p>
    <p>
      Let's start from the most important, <code>webpack.config.babel.js</code>. The specific file is responsible for the component (JS) bundling and transpilation. The .babel extension of the file allows <a href="http://stackoverflow.com/questions/31903692/how-can-i-use-es6-in-webpack-config-js" target="_blank">ES6 code into webpackconfig</a>! This file extracts 2 webpack configurations depending which npm script you execute. So on top of a basic configuration (<code>baseConfig</code>) I'm adding the dev configuration (<code>developmentConfig</code>), when the npm command is <code>npm start</code>, and the production  configuration (<code>productionConfig</code>) when the npm command is <code>npm run build</code>. The main differences is that dev config is starting the webpack dev server, while the production config is optimizing the bundled file.
    </p>
    <p>
      The <code>package.json</code> holds our dependencies and scripts (nothing special) and finally, the <code>index.html</code> is automatically generated by the <code>HtmlWebpackPlugin</code>, and it's only purpose is to load the bundled JS file. This is also the file that is being served from the <a href="https://surge.sh/" target="_blank">surge service</a> (that hosts the live demo <a href="http://tsevdos-tic-tac-toe.surge.sh" target="_blank">http://tsevdos-tic-tac-toe.surge.sh</a>). Everything else are just configuration files for <a href="https://babeljs.io/" target="_blank">babel</a>, editor, <a href="http://eslint.org/" target="_blank">ESLint</a> and git (files <code>.babelrc, .editorconfig, .eslintrc, .gitignore)</code>
      </p>

    <h3>React App</h3>
    <p>
      The entire source code of the react app is located under the <code>app</code> directory. The <code>index.html</code> is the "blueprint" for generating the index.html on the root directory (read above). The <code>index.js</code> is responsible for the initialization of the app. It renders the react app into the div element (with id #app), after injecting the <code>gameStore</code> (main store of our app) to the app (more information below).
    </p>
    <p>
      All the other files are located into directories depending their purpose and functionality. The directories are the below:
    </p>
    <ul>
      <li><strong>Containers</strong>: Contains all the container components</li>
      <li><strong>Components</strong>: Contains all the presentational (stateless) components</li>
      <li><strong>Config</strong>: Configuration-related files</li>
      <li><strong>Helpers</strong>: Contains helper modules</li>
      <li><strong>Layouts</strong>: Contains layout-like container components (more info below)</li>
      <li><strong>Stores</strong>: Contains the app / game store (more info below)</li>
    </ul>

    <h2>Best Practises and Design decisions</h2>
    <h3>Centralize state</h3>
    <p>One of React's best practices (especially for medium and larger projects) is to keep the entire state of the app minimal and "centralized" (everything is easier if you follow the <a href="https://facebook.github.io/flux/" target="_blank">flux architecture</a> and it's one-way data flow). This app is using <a href="https://mobx.js.org/" target="_blank">Mobx</a> for state management. Mobx is very simple and scalable state manager with a very minimal API and concepts to follow. Its main concept is that you have an <strong>observable state</strong>, you mutate it using <strong>actions</strong> and finally Mobx triggers <strong>reactions</strong> and Reacts "listens" to them in order to re-render the app. You can read and learn more about Mobx from an <a href="http://tsevdos.github.io/presentations/react-mobx-2017/" target="_blank">internal presentation</a> I gave for airtickets.gr.</p>
    <p>In our app now, there is only one store (<code>GameStore.js</code>) that encapsulates the entire logic. What I like in Mobx is that you keep everything in pure (vanilla) Javascript objects. If you take a look at the class you can easily spot the observable state and the actions that mutate it. A minor thing that I don't like in Mobx is the use of <strong>decorators</strong>, which is a necessary evil if you use ES6 classes. There is an ES5 alternative API, but again it doesn't look so good, so I guess the decorators are the way to go today (actually Mobx team favors them).</p>
    <p>So, the entire store and logic is located in a single class (<code>GameStore.js</code>) and as you can see I'm only creating a single instance (singleton) to generate the store (<code>const gameStore = new GameStore()</code>) and immediately export it (<code>export default gameStore</code>) to our app. As you can see we use mobx-react tools (a library that gives us react specific tools for mobx) to create a <code>Provider</code> that exposes our store to the app (have a look at the <code>index.js</code>). With this technique, we can inject our store wherever we want in our app and use it as a normal component property.</p>
    <p>The store except for the observable state and actions, it also contains normal methods for selecting players, checking the board etc. Because the project is small, I kept everything in one class (on a single file of course). If the app grows bigger we can easily split the class into multiple other classes (for example Board, Position, Markers, etc.) with their own state, methods, and logic. If you want to have a look on such an implementation, please have a look at my latest personal react project <a href="https://github.com/tsevdos/repocompare" target="_blank">Repocompare</a>.</p>

    <h3>Smart and presentational (stateless) components</h3>
    <p>Another best practice for React apps is to keep your logic to containers (aka. smart) components and then just render everything else using properties passed down to presentational components (again you can read more from my latest <a href="http://tsevdos.github.io/presentations/react-mobx-2017/index.html#/3/1" target="_blank">presentation</a>). Some of the benefits from this pattern are listed below:</p>
    <ul>
      <li>separation of concerns</li>
      <li>reusability (provide the needed props to a stateless component and it's working)</li>
      <li>deal with the complexity in only one place</li>
      <li>very designer-friendly</li>
    </ul>
    <p>The entire app is using only one smart component, the <code>AppContainer.jsx</code>. We inject our store to this component (again using the mobx-react library) and at the same time we "observe" the component, so everytime we mutate the state react will re-render it. This component sets our main UI methods (<code>setMarkersToPlayers(), markPosition() and resetGame()</code>) and passes them down as properties to our presentational components. Finally, our presentational components (located into <code>components directory</code>), are just receiving everything as properties and render the UI, no magic at all here.</p>
    <p>Another, not so very popular pattern that I like and use on my react projects, is the "layouts" components. These components are presentational components with the a main difference, they act as layouts. This app contains only a single layout component (<code>MainLayout</code>), but if for example, we had a router that we wanted to display a component with a sidebar and no footer, we could just add another layout here, pass it to our <code>routes</code> and be ready. This pattern might not be relative in the future, since the new version of react router gives a lot of flexibility, but for the current version, it makes sense to me to keep the "layout" related components there.</p>

  </div>
);

export default About;
