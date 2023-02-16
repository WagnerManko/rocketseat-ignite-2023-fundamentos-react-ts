import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

interface CommentProps {
    content: string;
    deleteComment: (commentToDelete: string) => void;
}

export function Comment ({ content, deleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment() {
        deleteComment(content);
    };

    return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/Diego3g.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="22 de Dezembro de 2022 às 15:02" dateTime="2022-12-22 15:02">Cerca de 1hr atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar Comentário">
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
    )
}