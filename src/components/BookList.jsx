import RenderIndividualBook from './RenderIndividualBook';
import styles from '../styles/bookList.module.css';
import AddNewBook from './AddNewBook';

export default function BookList() {
  return (
    <>
      <div className={styles.renderContainer}>
        <RenderIndividualBook />
        <AddNewBook />
      </div>
    </>
  );
}
