// styles
import { AvatarStyle } from "./Avatar.style";

interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  return (
    <AvatarStyle>
      <img src={src} alt="avatar" />
    </AvatarStyle>
  );
};

export default Avatar;
