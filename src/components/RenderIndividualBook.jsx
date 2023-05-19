import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookFromApi, fetchApi } from '../redux/books/booksSlice';
import styles from '../styles/renderIndividual.module.css';

export default function RenderIndividualBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const booksList = books.bookItems.map((book, index) => ({
    ...book,
    item_id: book.item_id,
    key: `${book.item_id}-${index}`,
  }));

  return (
    <div>
      {booksList.map((book) => (
        <div key={book.key} className={styles.renderWrapper}>
          <div className={styles.renderWrapperBookInfo}>
            <small className={styles.bookCategory}>
              {book.category}
            </small>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <small className={styles.bookAuthor}>
              {book.author}
            </small>
            <div className={styles.buttons}>
              <button type="button" id="remove">Content</button>
              <button type="button" id={book.item_id} onClick={() => dispatch(removeBookFromApi(book.item_id))}>Remove</button>
              <button type="button" id="remove">Edit</button>
            </div>
          </div>
          <div className={styles.renderWrapperCurrentState}>
            <div className={styles.renderWrapperCurrentStateShape}>
              <h4>State</h4>
            </div>
            <div className={styles.renderWrapperPercentage}>
              <h1>64%</h1>
              <small>Completed</small>
            </div>
          </div>
          <div className={styles.renderWrapperCurrentChapter}>
            <h5 className={styles.currentChapterTitle}>CURRENT CHAPTER</h5>
            <h5 className={styles.chapterTitle}>Chapter title</h5>
            <button type="button" className={styles.btnUpdateProgress}>UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
}
