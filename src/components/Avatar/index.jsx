import styles from "./avatar.module.css"

const Avatar = (props) => {
    return (
        <>
        <img
        className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={props.src}
        alt=""/>
        </>

    )
}

export default Avatar;