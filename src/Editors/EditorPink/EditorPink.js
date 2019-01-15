import { connect } from 'react-redux'
import Editor from '../Editor';
import styles from './EditorPink.module.css';

class EditorPink extends Editor {
  constructor(props) {
    super(props, styles);
  }
  static version() {
    return '1.1';
  }
}

export default connect(Editor.mapStateToProps, Editor.mapDispatchToProps)(EditorPink);
