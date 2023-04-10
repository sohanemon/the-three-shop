export default function Camera({ children }: { children: React.ReactNode }) {
  return (
    <>
      <perspectiveCamera scale={[3, 3, 3]} />
      {children}
    </>
  );
}
