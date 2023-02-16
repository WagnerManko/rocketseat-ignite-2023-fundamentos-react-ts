import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface PostProps {
    author: {
        avatarURL: string;
        name: string;
        role: string;
    };
    content: {
        type: string;
        content: string;
    }[];
    publishedAt: Date;
}

export function Post ({author, content, publishedAt}: PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm",{
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function hadleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarURL} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={`Publicado em ${publishedDateFormatted}`} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(content => (
                    <div key={content.content}>
                        {content.type === 'link' ? <p>👉 <a href="#">{content.content}</a></p> : <p>{content.content}</p>}
                    </div>
                ))}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    onChange={hadleNewCommentChange}
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />

                <footer>
                    <button type="submit" disabled={newCommentText.length == 0}>Publicar</button>
                </footer>
            </form>

            <div className={styles.CommentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} deleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}