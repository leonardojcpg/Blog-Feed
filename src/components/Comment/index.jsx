import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "../Avatar";
import styles from "./comment.module.css";

const Comment = ({content}) => {
  return (
    <div className={styles.comment}>
      <Avatar 
      src="https://github.com/PedroHP-queiroz.png"
      alt="" 
      hasBorder={false} 
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Queiroz</strong>
              <time
                title="15 de fevereiro às 20:37"
                dateTime="2023-02-15 20:37:00"
              >
                Cerca de 1h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
