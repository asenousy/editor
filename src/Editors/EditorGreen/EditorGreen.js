import { connect } from 'react-redux'
import Editor from '../Editor';
import styles from './EditorGreen.module.css';

class EditorGreen extends Editor {
  constructor(props) {
    super(props, styles);
  }
  static version() {
    return '2.0';
  }
}

export default connect(Editor.mapStateToProps, Editor.mapDispatchToProps)(EditorGreen);
