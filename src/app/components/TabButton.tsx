interface TabButtonProps<T> {
  active: Boolean;
  selectTab: Function;
  children: string[];
}

export default function TabButton<T>({
  active,
  selectTab,
  children,
}: TabButtonProps<T>) {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    // Not sure what is the best way to avoid this error
    // <button onClick={selectTab}>
    <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
    // </button>
  );
}
