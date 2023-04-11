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

## Next 13 / NextJS / API Routes

### GET

```ts
export async function GET() {
  return new Response('Hi man');
}
```

### POST

```ts
export async function POST(req: Request) {
  return Response.json({ msg: 'Alhamdulillah' });
}
```

Or for type safety use

```ts
export async function POST(req: Request) {
  return NextResponse.json({ msg: 'Alhamdulillah' });
}
```

Handling body

```ts
export async function POST(req: Request) {
  const res = await req.json();
  return NextResponse.json(res);
}
```
