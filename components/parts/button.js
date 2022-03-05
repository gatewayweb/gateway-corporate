export default function Button({ children, color, customClasses, ...props }) {
  if (!color) {
    color = 'blue';
  }

  let buttonClasses;

  switch (color) {
    case 'link':
      buttonClasses = 'text-sm text-gray-500 hover:text-gray-600';
      break;
    case 'light-gray':
      buttonClasses = 'bg-gray-200 text-gray-600 hover:bg-gray-300';
      break;
    case 'gray':
      buttonClasses = 'bg-gray-500 text-white hover:bg-gray-600';
      break;
    default:
      buttonClasses = 'bg-blue-800 text-white hover:bg-blue-700';
  }

  return (
    <button
      className={`rounded-full text-lg font-bold px-8 py-2 transition-all duration-300 ${buttonClasses} ${customClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}
