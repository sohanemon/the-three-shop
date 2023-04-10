## Getting Started with Three

```sh
yarn add three @react-three/fiber @react-three/drei maath framer-motion
```

### Switch between tabs

```tsx
function generateTab(currentTab: string) {
  switch (currentTab) {
    case 'colorpicker':
      return <ColorPicker />;
    case 'filepicker':
      return <FilePicker />;
    case 'aipicker':
      return <AiPicker />;
    default:
      null;
  }
}
```

```tsx
export default function LeftSideTab() {
  const currentTab = useSelector((state: RootState) => state.editor.currentTab);

  return (
    <>
      <div>{generateTab(currentTab)}</div>
    </>
  );
}
```
