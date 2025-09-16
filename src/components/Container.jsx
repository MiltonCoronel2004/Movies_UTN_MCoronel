export default function Container({ children }) {
  return <div className="max-w-6xl mx-auto px-4 grid grid-cols-4 gap-6">{children}</div>;
}
