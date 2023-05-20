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
    <div className={styles.renderContainerWrapper}>
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
              <div className={styles.rectangle3}>
                <svg>
                  <circle cx="25" cy="25" r="25" />
                  <circle cx="25" cy="25" r="25" />
                </svg>
              </div>
            </div>
            <div className={styles.renderWrapperPercentage}>
              <span className={styles.percentage}>64%</span>
              <span className={styles.completed}>Completed</span>
            </div>
          </div>
          <div className={styles.renderWrapperCurrentChapter}>
            <span className={styles.currentChapterTitle}>CURRENT CHAPTER</span>
            <span className={styles.chapterTitle}>Chapter title</span>
            <button type="button" className={styles.btnUpdateProgress}>UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
}
