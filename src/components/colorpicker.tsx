import { color, setColor } from '@/slices/editor-slice';
import { RootState } from '@/store';
import { SketchPicker } from 'react-color';
import { HexColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';

export default function ColorPicker() {
  const dispatch = useDispatch();
  const c = useSelector(color);
  return (
    <>
      <HexColorPicker color={c} onChange={(c) => dispatch(setColor(c))} />
    </>
  );
}
