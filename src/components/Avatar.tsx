import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    hasBorder?: boolean;
    alt?: string;
}

export function Avatar ({src, hasBorder = true, alt, ...props}: AvatarProps) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt={alt} {...props} />
    )
}