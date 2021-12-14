export default function Button({ children, color, customClasses, ...props }) {
  if (!color) {
    color = 'blue';
  }

  let buttonClasses;

  switch (color) {
    default:
      buttonClasses = 'bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600';
  }

  return (
    <button className={`rounded text-lg font-bold px-8 py-2 ${buttonClasses} ${customClasses}`} {...props}>
      {children}
    </button>
  );
}
