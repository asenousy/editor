import EditorRed from './EditorRed/EditorRed';
import EditorPink from './EditorPink/EditorPink';
import EditorGreen from './EditorGreen/EditorGreen';

export default {
    [EditorRed.version()]: EditorRed,
    [EditorPink.version()]: EditorPink,
    [EditorGreen.version()]: EditorGreen
};