import type { MemberModel } from 'commonTypesWithClient/models';
import Input from '../Input/Input';
import styles from './SocialLinks.module.css';

type Props = {
  member: MemberModel;
  setMember: React.Dispatch<React.SetStateAction<MemberModel>>;
};

export const SocialLinks = ({ member, setMember }: Props) => {
  const changeSocialLink = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { value } = e.target;
    setMember((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks?.map((socialLink, j) => (i === j ? value : socialLink)),
    }));
  };

  const addSocialLink = () => {
    setMember((prev) => ({
      ...prev,
      socialLinks: [...(prev.socialLinks ?? []), ''],
    }));
  };

  const removeSocialLink = (i: number) => {
    setMember((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks?.filter((_, j) => i !== j),
    }));
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        <span>外部リンク</span>
        <button onClick={addSocialLink} className={styles.button}>
          Add
        </button>
      </p>
      {member.socialLinks?.map((socialLink, i) => (
        <div key={`socialLink-${i}`} className={styles.item}>
          <div className={styles.sort}>三</div>
          <Input
            name="socialLink"
            value={socialLink}
            onChange={(e) => changeSocialLink(e, i)}
            placeholder="ex: https://twitter.com/..."
          />
          <button onClick={() => removeSocialLink(i)} className={styles.remove} />
        </div>
      ))}
    </div>
  );
};
