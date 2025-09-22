export default function Container({ children, loading }) {
  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );

  return <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-6">{children}</div>;
}
