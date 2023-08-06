export const SideBar = (props: { array: string[] }) => {
  const { array } = props;
  return (
    <>
      {array.map((x, y) => (
        <div key={`${y}`}>{x}</div>
      ))}
    </>
  );
};
