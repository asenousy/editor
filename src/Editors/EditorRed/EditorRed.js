import { connect } from 'react-redux'
import Editor from '../Editor';
import styles from './EditorRed.module.css';
 
class EditorRed extends Editor {
  constructor(props) {
    super(props, styles);
  }
  static version() {
    return '1.0';
  }
}

export default connect(Editor.mapStateToProps, Editor.mapDispatchToProps)(EditorRed);
