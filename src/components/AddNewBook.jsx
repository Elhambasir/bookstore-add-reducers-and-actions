import { useDispatch } from 'react-redux';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import Button from './Buttons';
import styles from '../styles/addNewBook.module.css';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const data = {
    id: uuidv4(),
    title,
    author,
    category: 'Science-fiction',
  };
  const handleSubmit = () => {
    dispatch(addBook(data));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className={styles.addNewBookWrapper}>
      <div className={styles.addNewBookWrapperTitle}>
        <h3>ADD NEW BOOK</h3>
      </div>
      <form className={styles.addNewBookWrapperInputs}>
        <div className={styles.addNewBookWrapperInputSeprator}>
          <input value={title} type="text" id="title" placeholder="Book Title Here..." onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.addNewBookWrapperInputSeprator}>
          <input value={author} type="text" id="name" placeholder="Author Name Here..." onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className={styles.addNewBookWrapperInputSeprator}>
          <Button type="button" className="submit" value="Add New" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AddNewBook;
