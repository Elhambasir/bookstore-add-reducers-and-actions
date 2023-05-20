import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { add, addBookToApi } from '../redux/books/booksSlice';
import Button from './Buttons';
import styles from '../styles/addNewBook.module.css';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const data = {
    item_id: uuidv4(),
    title,
    author,
    category: 'Science-fiction',
  };
  const handleSubmit = () => {
    dispatch(addBookToApi(data));
    dispatch(add(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className={styles.renderContainerWrapper}>
      <div className={styles.addNewBookWrapper}>
        <div className={styles.line} />
        <div className={styles.addNewBookWrapperTitle}>
          <span>ADD NEW BOOK</span>
        </div>
        <form className={styles.addNewBookWrapperInputs}>
          <div className={styles.addNewBookWrapperInputSeprator}>
            <input value={title} type="text" id="title" placeholder="Book Title Here..." onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className={styles.addNewBookWrapperInputSeprator}>
            <input value={author} type="text" id="name" placeholder="Author Name Here..." onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className={styles.addNewBookWrapperInputSeprator}>
            <Button type="button" className="submit" value="ADD BOOK" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>

  );
};

export default AddNewBook;
