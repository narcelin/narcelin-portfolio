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
  const buttonClasses = active ? "text-pText border-b border-c1" : "text-c2";
  return (
    // Not sure what is the best way to avoid this error
    // <button onClick={selectTab}>
    <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
    // </button>
  );
}
