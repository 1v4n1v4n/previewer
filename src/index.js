import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// global variable needed for compiling markdown to HTML synchronously
let marked = require("marked");

// Markdown template
const placeholder = 
`# Welcome to my React Markdown Previewer

## This is a sub-heading...
### And here's some other cool stuff:
  
Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want! 
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

class App extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col xs-12">
              <h1 className="heading">Markdown Live Preview</h1>
              <hr />
            </div>
          </div>
          <Previewer />
          <footer>
            <a href="https://github.com/1v4n1v4n">by 1v4n</a>
          </footer>
        </div>
    );
  }
}

class Previewer extends React.Component {

  constructor() {
    super();
    this.state = {
      markdown: placeholder
    };
  }
  
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (  
    <div className="row">
      <div className="col-md-6">
      {/* Input Area */}
        <h3 className="heading">Markdown Input</h3>
        <textarea
          className="input"
          style = {{}}
          value={this.state.markdown}
          onChange={(e) => {
            this.updateMarkdown(e.target.value);
          }}
        >
        </textarea>
      </div>
      <div className="col-md-6">
        {/* Output Area */}
        <h3 className="heading">Preview</h3>
        <div
          className="output"
          dangerouslySetInnerHTML={{
          __html: marked(this.state.markdown)}}>
        </div>
      </div>
    </div>  
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);