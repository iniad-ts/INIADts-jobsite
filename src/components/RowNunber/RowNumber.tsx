export const RowNumber = (props: { a: string[] }) => {
  const { a } = props;
  return (
    <>
      {a.map((b, c) => (
        <div key={`${c}`}>{b}</div>
      ))}{' '}
    </>
  );
};
