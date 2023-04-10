import { setColor } from '@/slices/editor-slice';
import { RootState } from '@/store';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';

export default function ColorPicker() {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.editor.color);
  return (
    <>
      <SketchPicker
        color={color}
        disableAlpha
        onChange={(color) => dispatch(setColor(color.hex))}
      />
    </>
  );
}
