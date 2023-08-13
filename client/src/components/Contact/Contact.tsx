import MemberInfo from '../MemberInfo/MemberInfo';

export const Contact = () => {
  const office = [{ 概要: 'aaa', お申込み: '' }];
  return (
    <>
      <MemberInfo name="オフィスの見学" value={office} />
    </>
  );
};
