import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import updateCode from '../actions/updateCode';
import styles from './Editor.module.css';

class Editor extends Component {
  constructor(props, overridenStyles) {
    super(props);
    this.styles = {...styles, ...overridenStyles};
    this.handleUpload = this.handleUpload.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.fileInput = React.createRef();
    this.fileDownload = React.createRef();
  }

  render() {
    const { code, updateCode } = this.props;
    return (
      <div className={this.styles.container}>
        <h3>Version {this.constructor.version()}:</h3>
        <textarea
          rows='10'
          className={this.styles.textarea}
          value={code} 
          onChange={e => updateCode(e.target.value)}>
        </textarea>
        <input type="file" ref={this.fileInput} onChange={this.handleFile} hidden />
        <br />
        <a ref={this.fileDownload} download hidden></a>
        <div className={this.styles.buttons}>
          <button className={this.styles.button} onClick={this.handleUpload}>Upload</button>
          <button className={this.styles.button} onClick={this.handleSave}>save</button>
        </div>
      </div>
    );
  }

  handleUpload() {
    this.fileInput.current.click();
  }

  handleFile() {
    const [file] = this.fileInput.current.files;
    const fr = new FileReader();
    fr.onload = e => {
      const text = e.target.result.split('\n');
      const version = text.shift();
      const code = text.join('\n');
      this.props.updateCode(code);
      this.props.history.replace(`/${version}`);
    };
    fr.readAsText(file);
  }

  handleSave() {
    const fileDownload = this.fileDownload.current;
    const code = this.constructor.version() + '\n' + this.props.code;
    var blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    fileDownload.download = prompt('Save As FileName:', 'code.txt');
    fileDownload.href = window.URL.createObjectURL(blob);
    fileDownload.download !== 'null' && fileDownload.click();
  }

  static mapStateToProps(state) {
    return {
      code: state.code
    }
  }

  static mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateCode,
    }, dispatch)
  }
}

export default Editor;
