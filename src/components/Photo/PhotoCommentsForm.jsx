import React from 'react';
import Enviar from '../../assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import Error from '../Help/Error';
import styles from './PhotoCommentsForm.module.css';
import { COMMENT_POST } from '../../api';

const PhotoCommentsForm = ({ id, setComments, single }) => {
    const [comment, setComment] = React.useState('');
    const { request, error } = useFetch();

   async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, {comment});
    const { response, json } = await request(url, options);
    if(response.ok) {
        setComments((comments) => [...comments, json]);
        setComment('');
    }
   }

    return (
    <form className={`${styles.form} ${single ? styles.photoSingle : ''}`} onSubmit={handleSubmit}>
        <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        />
        <button className={styles.button}>
            <Enviar />
        </button>
        <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm